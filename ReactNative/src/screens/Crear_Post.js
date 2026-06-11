import React, { Component , useState } from 'react'

import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native'
import { auth, db } from '../FireBase/Config'





function Crear_Post (props){
    const [comentario , setComentario] = useState("")
    function Submit (){


        if (comentario === ""){
        return (alert ("No hay comentario escrito") )}

        db.collection("Post").add({
            owner : auth.currentUser.email,
            description: comentario ,
            likes : [] ,
            createdAt: Date.now()
        })
        .then(res => console.log(res)
            
        )
        .catch (e => console.log (e))
        

        props.navigation.navigate("Home")
    }

    return (
        <View style = {styles.container} >
          
          <Text style = {styles.titulo}>Crear nuevo post</Text>
          <TextInput placeholder='Escriba aqui su comentario...' style = {styles.Campos} value={comentario} onChangeText={ text => setComentario (text)}/>
          <Pressable onPress={()=> Submit()} style = {styles.boton} ><Text style = {styles.boton2}>Publicar post</Text></Pressable>
        </View>
    )
  }



const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 20,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        marginHorizontal: 20,
    },
    titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 15,
},
    Campos: {
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 8,
        marginVertical: 15,
        backgroundColor: "white",
        fontSize: 16,
    },

    boton: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#1e90ff",
        backgroundColor: "lightblue",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginTop: 10,
        alignItems: "center",
    },

    boton2: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    }
});

export default Crear_Post

