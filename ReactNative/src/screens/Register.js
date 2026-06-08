import {View,Text,TextInput, Pressable,StyleSheet,} from 'react-native';
import { auth, db } from '../../firebase/config';
import { useState} from 'react';

export default function Register({ navigation }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');
const [registerError, setRegisterError] = useState('');

const onSubmit = () => {
auth.CreateUserWithEmailAndPassword(email,password)

db.collection('users').add({
email:email,
username:username,
createAT: Date.now(),
})
.then()
.catch(e => console.log(e))

}
}
