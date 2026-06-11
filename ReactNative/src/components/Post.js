import { View, Text, FlatList, Pressable , StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import { db , auth } from "../FireBase/Config"


function Post(props) {


    console.log(props);
    

    return (
        <View style={styles.container}>


            <View style={styles.publicacion}>
                <Text style={styles.owner}>{props.datos.data.owner}</Text>
                <Text style={styles.description}>{props.datos.data.description}</Text>
                <Text style={styles.likes}>Likes: {props.datos.data.likes}</Text>

                <Pressable onPress={() => Likear(item)} style={styles.botonLike}>
                    <Text style={styles.textoBoton}>Me gusta</Text>
                </Pressable>
                <Pressable onPress={() => Comentar()} style={styles.botonComentar}>
                    <Text style={styles.textoBotonComentar}>Comentar</Text>
                </Pressable>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3d6d6",
        padding: 15,
    },

    publicacion: {
        backgroundColor: "#fff4f4",
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#854848",
        borderStyle: "solid",
        borderRadius: 10,
    },

    owner: {
        fontSize: 15,
        color: "#4a2c2c",
        marginBottom: 8,
    },

    description: {
        fontSize: 18,
        color: "#000",
        marginBottom: 10,
    },

    likes: {
        fontSize: 14,
        color: "#6b3f3f",
        marginBottom: 10,
    },

    botonLike: {
        backgroundColor: "#c78873",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#9b5f4f",
        marginTop: 5,
    },

    textoBoton: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
    },

    botonComentar: {
        backgroundColor: "#854848",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#5c3030",
        marginBottom: 20,
    },

    textoBotonComentar: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
});

export default Post




