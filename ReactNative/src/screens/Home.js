import { View, Text, FlatList, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { db , auth } from "../FireBase/Config"


function Home(props) {
    
    const [posteos, setPosteos] = useState([])
    const [loading, setLoading] = useState("")

    useEffect(db.collection("Post").orderBy("createdAt" , "desc").onSnapshot(
        docs => {
            let posts = [];
            docs.forEach(doc => {
                posts.push({
                    id: doc.id,
                    data: doc.data()
                })
                setPosteos(posteos)
                setLoading(false)
            })
        }
    ), [])

    function Comentar(){
        props.navigation.navigate("Crear_Post")
    }

    return (

        <View>
            <FlatList 
            data={posteos}
            keyExtractor={ (item) => item.id}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.data.owner}</Text>
                    <Text>{item.data.description}</Text>
                    <Text>{item.data.likes}</Text>
                    <Pressable onPress={()=> Comentar()}>Me gusta</Pressable>
                </View>
            )}/>
            <Pressable onPress={() => Comentar()}>Comentar</Pressable>
        </View>
    )
}

export default Home