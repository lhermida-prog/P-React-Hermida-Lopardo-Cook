import { View, Text, FlatList, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { db , auth } from "../FireBase/Config"
import Post from "../components/Post";


function Home(props) {
    
    const [posteos, setPosteos] = useState([])
    const [loading, setLoading] = useState("")

    const usuario = auth.currentUser

    useEffect(()=> {
    db.collection("Post").orderBy("createdAt" , "desc").onSnapshot(
        docs => {
            let posts = [];
            docs.forEach(doc => {
                posts.push({
                    id: doc.id,
                    data: doc.data() , 
                })
                setPosteos(posts)
                setLoading(false)

            })
        })
    },[])

    console.log(posteos);
    

    return (
    <View>
        {posteos.length === 0 ? (
            <Text>Cargando...</Text>
        ) : (<FlatList 
            data={posteos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Post datos={item} />
            )}
        />)
            
        }
        
        

    </View>
);
}


export default Home