/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51PNvdxGdJmdHaCe0kGZpD1y8Y5J9UYr28NkbC0KMq3CvFg8Zhn1PN3V5LOBj7lXqeZgsc9aZk91vw3Cn4RECtDxr000lBLGXZ8',
  );
  try {
    // 1) GetCheckout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout from + charge credicard
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};
