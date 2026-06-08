import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { auth, db } from '../../firebase/config';
import { useState } from 'react';
function Register(props) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');

  function Submit() {
    if (!email || !password || !username) {
 alert("Error", "Todos los campos son obligatorios")
return;
    }

auth.createUserWithEmailAndPassword(email, password)
 .then(() => {
db.collection('users').add({
          email: email,
          username: username,
          createdAt: Date.now(),
          });

        console.log("Usuario creado:", email);

      
        props.navigation.navigate('Login');

      })
      .catch((error) => {
        console.log(error);

      
        alert("Error de registro");
      });
  }

  return (
<View style={styles.container}>
<Text>Registro</Text>

<TextInput placeholder='Email...' keyboardType='email-address'value={email} onChangeText={setEmail} style={styles.Campos}/>

<TextInput placeholder='Username...'value={username}onChangeText={setUsername}style={styles.Campos}/>

<TextInput placeholder='Password...'secureTextEntry={true}value={password}onChangeText={setPassword} style={styles.Campos}/>

      <Pressable onPress={Submit} style={styles.Boton}><Text style={styles.boton2}>Registrarme</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Login")}>
        <Text>Ya tengo cuenta</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#d01b1b3f"
  },
  Campos: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#854848",
    borderRadius: 6,
    marginVertical: 10
  },
  Boton: {
    backgroundColor: "#c78873",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#bd540e"
  },
  boton2: {
    color: "#fff",
    textAlign: "center"
  }
});

export default Register;
   

