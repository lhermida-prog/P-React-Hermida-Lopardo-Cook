import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { auth } from "../FireBase/Config";


function Login(props) {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    function Submit() {
        if (contrasena.length < 6) {
            return (
                alert("Contraseña invalida")
            )
        }
        if (!auth.signInWithEmailAndPassword(email, contrasena)) {
            return (
                alert("Las credenciales no son iguales")
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

            <Text style={styles.titulo}>Iniciar sesión</Text>

            <TextInput placeholder="Email..." style={styles.Campos} value={email} onChangeText={setEmail}/>

            <TextInput placeholder="Password..." style={styles.Campos} secureTextEntry={true} value={contrasena} onChangeText={setContrasena} />

            <Pressable style={styles.Boton} onPress={() => Submit()}>
                <Text style={styles.textoBoton} >Iniciar Sesion</Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate("Register")}   style={styles.Boton}>
                <Text style={styles.textoBoton}>No tengo cuenta</Text>
            </Pressable>

        </View>
    )
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
export default Login



