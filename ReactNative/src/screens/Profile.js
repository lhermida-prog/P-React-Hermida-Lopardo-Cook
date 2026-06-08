import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { auth, db } from '../FireBase/Config'
import { Pressable } from 'react-native'

function Profile (props) {
   const [nombre_usuario , setNombreUsuario] =   useState ([])
   const [nombre_email , setNombreEmail] = useState ([])

   function logout(){
    auth.signOut()
    props.navigation.navigate("Login")
   }

  useEffect (()=> { db.collection ("users").onSnapshot(
          docs => {
              let usuarioss = []
              docs.forEach (doc => {
                  usuarioss.push({
                      id : doc.id ,
                      data : doc.data ()
  
                  })
                  setNombreUsuario (usuarioss)
                  
  
              })
          } ,
          
      )},[] )
    return (
      <View>
        <Text> Tu perfil </Text>
        <Pressable onPress={() => logout()} ><Text >Cerrar Sesion</Text></Pressable>
      </View>
    )
  }


  export default Profile

