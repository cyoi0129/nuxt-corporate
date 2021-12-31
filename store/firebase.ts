import { firebaseConfig } from './config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database(firebaseApp);
const dbRef = database.ref();

export const fetchDBData = async () => {
    const dataRef = await dbRef.child('react-editor/').get();
    const data = await dataRef.val();
    return data;
}