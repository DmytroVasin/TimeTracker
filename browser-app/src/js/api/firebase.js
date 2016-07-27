import 'firebase';
import { firebaseConfig } from '../config/configureFirebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebaseApp.database();

export function writeData(title, description) {

  return firebase.database().ref('/stories/').push({
    title: title,
    description: description
  });
}

// curl -X Pcurl -X POST -d '{"user_id" : "jack", "text" : "Ahoy!"}' 'https://timetracking-c860a.firebaseio.com/stories.json'
