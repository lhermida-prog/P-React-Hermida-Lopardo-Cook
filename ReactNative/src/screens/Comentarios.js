import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { db, auth } from "../FireBase/Config";

function Comentarios(props) {
    const [comentario, setcomentario] = useState("");
    const [comentarios, setcomentarios] = useState([]);

    const { id } = props.route.params;

    function agregarComentario() {
        db.collection("Comentarios")
            .add({
                idPost: id,
                comentario: comentario,
                email: auth.currentUser.email,
                createdAt: Date.now(),
            })
            .then(() => {
                setcomentario("");
            })
            .catch((error) => {
                console.log(error);
            });
    }

 db.collection("Comentarios")
    .where("idPost", "==", id)
    .onSnapshot(docs => {
        let listacomentarios = [];

        docs.forEach(doc => {
            listacomentarios.push({
                id: doc.id,
                data: doc.data(),
            });
        });

        setcomentarios(listacomentarios);
    });

    return (
        <View>
            <TextInput placeholder="Escribí un comentario..."value={comentario} onChangeText={(text) => setcomentario(text)}/>

            <Pressable onPress={agregarComentario}>
                <Text>Enviar comentario</Text>
            </Pressable>

          <FlatList
    data={comentarios}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <View>
            <Text>{item.data.email}</Text>
            <Text>{item.data.comentario}</Text>
        </View>
    )}
/>
        </View>
    );
}

export default Comentarios;
        

   



















