import React, { Component } from 'react'
import { Text, View , Pressable , useState , StyleSheet} from 'react-native'
import { auth, db } from '../FireBase/Config'



function Crear_Post (){
    const [comentario , setComentario] = useState("")
    function Submit (){
        db.collection("Post").add({
            owner : auth.currentUser.email,
            description: comentario ,
            likes : [] ,
            createdAt: Date.now ()
        })
        .then()
        .catch (e => console.log (e))
    }

    return (
      <View styles = {styles.container} >
          
          <Text>Crear nuevo post</Text>
          <TextInput placeholder='Escriba aqui su comentario...' styles = {styles.Campos} value={comentario} onChangeText={ text => setComentario (text)}/>
          <Pressable onPress={()=> Submit()} styles = {styles.Campos}  ><Text>Publicar post</Text></Pressable>
          </View>
    )
  }



const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
    },
    Campos: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10
    },
    boton : {
        borderWidth : 3 ,
        borderStyle: "solid",
        backgroundColor : "lightBlue" ,
        borderRadius : 4 ,
        


    } , 
     boton2: {
        color: "Black" , 
        fontSize : 15 ,

    }


})

export default Crear_Post

