import firebase from "firebase/app";

import { prepareDocForCreate } from "./helpers/firestoreHelpers";

const createSubscription = token => {
  const subscription = prepareDocForCreate({
    tempStripePaymentTokenId: token.id
  });

  return firebase
    .firestore()
    .collection("subscriptions")
    .add(prepareDocForCreate(subscription))
    .catch(error => {
      alert(`Whoops, couldn't create the subscription: ${error.message}`);
    });
};

export default createSubscription;
