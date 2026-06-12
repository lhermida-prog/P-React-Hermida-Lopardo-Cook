import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, FlatList } from 'react-native'
import { auth, db } from '../FireBase/Config'
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
     db.collection("Post").where("owner" , "==" , auth.currentUser.email).onSnapshot(
    docs => {
      let posts = []
      docs.forEach( doc => {
        posts.push({
          id: doc.id,
          data: doc.data()
        })
        setPublicaciones(posts)
        console.log(posts);
      })
    }
  )
  }, [])

  return (
    <View>
      <Text> Tu perfil </Text>
      <Text> Usuario: {nombre_usuario}</Text>
      <Text> Email: {nombre_email}</Text>
      <Pressable onPress={() => logout()}><Text>Cerrar Sesion</Text></Pressable>

      <Text>Mis Publicaciones</Text>

      <FlatList 
      data={publicaciones}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (<Post datos={item} navigation={props.navigation}/>)}
      />
    </View>
  )
}


export default Profile

