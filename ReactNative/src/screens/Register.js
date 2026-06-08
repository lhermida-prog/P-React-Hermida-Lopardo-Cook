import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { auth, db } from '../FireBase/Config';


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
      <Text style={styles.titulo}>Registro</Text>

      <TextInput placeholder='Email...' keyboardType='email-address' value={email} onChangeText={setEmail} style={styles.Campos} />

      <TextInput placeholder='Username...' value={username} onChangeText={setUsername} style={styles.Campos} />

      <TextInput placeholder='Password...' secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.Campos} />

      <Pressable onPress={Submit} style={styles.Boton}><Text style={styles.textoBoton}>Registrarme</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Login")}   style={styles.Boton}>
        <Text style={styles.textoBoton}>Ya tengo cuenta</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 20,
        backgroundColor: "#f3d6d6",
        flex: 1,
    },

    titulo: {
        fontSize: 22,
        marginBottom: 20,
        textAlign: "center",
        color: "#4a2c2c",
    },

    Campos: {
        height: 45,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#854848",
        borderStyle: "solid",
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: "#fff4f4",
    },

    Boton: {
        backgroundColor: "#c78873",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#9b5f4f",
        marginTop: 12,
    },

    textoBoton: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },


});

export default Register;


