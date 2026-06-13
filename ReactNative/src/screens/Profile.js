import React, { useEffect, useState } from 'react'
import { Text, View, Pressable, FlatList, StyleSheet } from 'react-native'
import { auth, db } from '../FireBase/Config'
import Post from '../components/Post'

function Profile(props) {
  const [nombre_usuario, setNombreUsuario] = useState("")
  const [nombre_email, setNombreEmail] = useState("")
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
    db.collection("Post").where("owner", "==", auth.currentUser.email).onSnapshot(
      docs => {
        let posts = []
        docs.forEach(doc => {
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
    <View style={styles.container}>
      <Text style={styles.title}> Tu perfil </Text>

      <View style={styles.infoBox}>

        <View style={styles.rowInfo}>

          <Text style={styles.label}>Usuario: </Text>
          <Text style={styles.infoText}>{nombre_usuario}</Text>

        </View>

        <View style={styles.rowInfo}>

          <Text style={styles.label}>Email: </Text>
          <Text style={styles.infoText}>{nombre_email}</Text>

        </View>
      </View>

      <Pressable onPress={() => logout()} style={styles.button}><Text style={styles.buttonText}>Cerrar Sesion</Text></Pressable>

      <Text style={styles.subtitle}>Mis Publicaciones</Text>

      <FlatList
        data={publicaciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Post datos={item} navigation={props.navigation} />)}
        style={styles.list}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1d4d4',
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  rowInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#4a2c2c',
    marginBottom: 30,
  },

  infoBox: {
    backgroundColor: '#fff5f5',
    borderWidth: 1,
    borderColor: '#9b5f5f',
    borderRadius: 6,
    padding: 15,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: '#4a2c2c',
    fontWeight: 'bold',
  },

  infoText: {
    fontSize: 16,
    color: '#000',
  },

  button: {
    backgroundColor: '#c78873',
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#9b5f4f',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4a2c2c',
    marginBottom: 15,
  },

  list: {
    paddingBottom: 30,
  },
})

export default Profile