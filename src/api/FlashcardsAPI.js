import firebase from 'react-native-firebase';

export async function addFlashcards(card, addComplete) {
  try {
    const newCard = await firebase.firestore()
    .collection('Flashcards-World-Capitals')
    .add({
      capital: card.capital,
      country: card.country,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    addComplete(newCard)
  } catch (err) {
    console.log(error);
    Response.status(500);
  }
}

export async function getFlashcards(cardsRetrieved){


  const snapshot = await firebase.firestore()
  .collection('Flashcards-World-Capitals')
  .orderBy('createdAt')
  .get()

  snapshot.forEach((doc) => {

  })
}
