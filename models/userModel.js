/* eslint-disable no-console */
// 1. import knihoven
const crypto = require('crypto'); // pro generování bezpečnostních tokenů
const mongoose = require('mongoose'); // pro modelování dat aplikace
const validator = require('validator'); // pro validaci dat
const bcrypt = require('bcryptjs'); // pro hešování a ověřování hesel
//  2. definice uživatelského schématu
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },

  passwordConfirmation: {
    type: String,
    required: [true, 'Please comfirm a password'],
    validate: {
      // this only works on Create and save
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//3. validace a hešhování hesla
userSchema.pre('save', async function (next) {
  // hešovaní hesla před uložením, pokud bylo změněno
  //Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  //Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete passwordcomfirm field
  this.passwordConfirmation = undefined;
  next();
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000; // 1s
  next();
});
userSchema.pre(/^find/, function (next) {
  //this points to the current query
  this.find({ active: { $ne: false } });

  next();
});
userSchema.methods.correctPassword = async function (
  // ověření hesla
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// 4. Změna hesla
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  // ověření, zda bylo helso změněno po vydání JWT
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    console.log(changedTimestamp - JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};
// 5. resetování hesla
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
// 6. kompilace modelu
const User = mongoose.model('User', userSchema);
// 7. Export modelu
module.exports = User;
