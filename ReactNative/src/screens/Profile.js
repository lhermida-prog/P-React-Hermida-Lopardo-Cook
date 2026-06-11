import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { auth, db } from '../FireBase/Config'
import { Pressable } from 'react-native'
import Post from '../components/Post'

function Profile(props) {
  const [nombre_usuario, setNombreUsuario] = useState([])
  const [nombre_email, setNombreEmail] = useState([])
  const [publicaciones, setPublicaciones] = useState([])

  function logout() {
    auth.signOut()
    props.navigation.navigate("Login")
  }

  useEffect(() => {
  
    db.collection("users").where("email", "==", auth.currentUser.email).onSnapshot(
      docs => {
        let usuarioss = []
        docs.forEach(doc => {
          usuarioss.push({
            id: doc.id,
            data: doc.data()
          })
          
          setNombreUsuario(usuarioss[0].data.username)
          setNombreEmail(usuarioss[0].data.email)

        })
      },

    )
  }, [])
  db.collection("Post").where("owner" , "==" , auth.currentUser.owner).onSnapshot(
    docs => {
      let posts = []
      docs.forEach( doc => {
        posts.push({
          id: doc.id,
          data: doc.data()
        })
        console.log(posts);
      })
    }
  )

  return (
    <View>
      <Text> Tu perfil </Text>
      <Text> Usuario: {nombre_usuario}</Text>
      <Text> Email: {nombre_email}</Text>
      <Pressable onPress={() => logout()}><Text>Cerrar Sesion</Text></Pressable>
    </View>
  )
}


export default Profile

