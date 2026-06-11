import { useState,useEffect } from "react";
import { View,Text,TextInput,Pressable,FlatList} from 'react-native';
import {db,auth} from '../FireBase/Config';

function Comentarios(props){
    const [comentario,setcomentario] = useState('');
    const [comentarios,setcomentarios] = useState('');



    function agregarComentario(){
        db.collection('comentarios').add({
            idPost: idpost,
            comentario: comentario,
            email: auth.currentUser.email,
            createdAt: Date.now()
        })
.then(() => {
    setcomentario('')
    })
    
  .catch((error) => {
        console.log(error);
     } )
}

useEffect(() =>{
    db.collection('comentarios').where("idPost","==","").onSnapshot(
        docs =>{
            let listacomentarios = [];
            docs.foreach(doc =>
            {
            comentarios.push({
               id: doc.data() 
            })
        setcomentario(listacomentarios)
            })
        })})
    
        return(
              <View>

       
   </View>
        );
    }

        
















