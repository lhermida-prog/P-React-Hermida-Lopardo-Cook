import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { auth } from "../Firebase/config";


function Login(props) {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    function Submit() {
        if (contrasena.length < 6) {
            return (
                alert("Contraseña invalida")
            )
        }
        if (!auth.signInWithEmailAndPassword(email, contrasena) ){
            return (
                alert ("Las credenciales no son iguales")
            )
        }

        auth.signInWithEmailAndPassword(email, contrasena)
            .then((response) => {
                console.log("Usuario registrado: ", response.email)
                props.navigation.navigate("Tab")


            })
            .catch((error) => {
                console.log("Ocurrio un error : ", error)

            })


    }

    return (
        <View style={styles.container}>

            <Text>Iniciar sesion</Text>
            <TextInput placeholder='Email...' keyboardType='email-address' value={email} onChangeText={text => setEmail(text)} style={styles.Campos} />
            <TextInput placeholder='Password...' secureTextEntry={true} value={contrasena} onChangeText={text => setContrasena(text)} style={styles.Campos} />

            <Pressable onPress={() => Submit()} style={styles.Boton}><Text style={styles.boton2}>Iniciar Sesion</Text></Pressable>
            <Pressable onPress={() => props.navigation.navigate("Register")} style={styles.Boton}><Text style={styles.boton2}>No tengo cuenta</Text></Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        backgroundColor : "#d01b1b3f"
    },
    Campos: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#854848",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10
    },
    Boton: {
        backgroundColor: "#c78873",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#bd540e"


    },
    boton2: {
        color: "#fff"
    }

})
export default Login



