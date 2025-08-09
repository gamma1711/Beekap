import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const SocialNet = () => {
    const [posts, setPosts] = useState([
        {
            id: '1',
            user: 'Usuario1',
            title: 'Donde puedo conseguir miel de calidad?',
            body: 'El dia de hoy no pude conseguir miel ayudaaaaaaa',
            image: require('../../imagenes/post1.jpg'),
            comments: [
                { id: '1', user: 'Usuario2', text: 'Comentario 1 para la Publicación 1' },
            ],
        },
        {
            id: '2',
            user: 'Usuario2',
            title: 'Título de la Publicación 2',
            body: 'Cuerpo de la Publicación 2...',
            image: require('../../imagenes/post2.jpg'),
            comments: [
                { id: '1', user: 'Usuario1', text: 'Comentario 1 para la Publicación 2' },
                // Puedes añadir más comentarios según sea necesario
            ],
        },
        // Puedes añadir más publicaciones según sea necesario
    ]);

    const [newComment, setNewComment] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);

    const handleCommentSubmit = () => {
        if (!newComment.trim()) {
            return;
        }

        // Añadir el nuevo comentario a la publicación seleccionada
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === selectedPost.id
                    ? { ...post, comments: [...post.comments, { id: `${post.comments.length + 1}`, user: 'UsuarioX', text: newComment }] }
                    : post
            )
        );

        // Limpiar el input y deseleccionar la publicación
        setNewComment('');
        setSelectedPost(null);
    };

    const renderCommentItem = ({ item }) => (
        <View style={styles.commentItem}>
            <Text>{item.user}: {item.text}</Text>
        </View>
    );

    const renderPostItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedPost(item)}>
            <View style={styles.postItem}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item.user}</Text>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        <Text style={{ fontSize: 16 }}>{item.body}</Text>
                    </View>
                    <Image style={{ width: '60%', height: '100%', resizeMode: 'contain', }} source={item.image} />
                </View>
                {selectedPost === item && (
                    <View>
                        <FlatList
                            data={item.comments}
                            renderItem={renderCommentItem}
                            keyExtractor={(comment) => comment.id}
                        />

                        <TextInput
                            style={styles.commentInput}
                            placeholder="Añadir comentario..."
                            value={newComment}
                            onChangeText={(text) => setNewComment(text)}
                        />
                        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
                            <Text style={styles.commentButtonText}>Comentar</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </View>

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image
                    source={require('../../imagenes/logoBanner.png')} style={styles.bannerImage}
                />
            </View>

            <FlatList
                data={posts}
                renderItem={renderPostItem}
                keyExtractor={(item) => item.id}
            />
            <View>
                <TouchableOpacity style={{ backgroundColor: '#FEC75D', padding: 8, borderRadius: 8, alignItems: 'center', margin: 10 }} >
                    <Text style={styles.commentButtonText}>Publicar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        backgroundColor: '#fec75d',
        alignItems: 'center',
        height: 70, // Altura de la cinta amarilla
        marginBottom: 10,
    },
    bannerImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    postItem: {
        margin: 5,
        borderWidth: 5,
        padding: 5,
        borderColor: '#fec75d',
        borderRadius: 10,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    commentItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    commentInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 8,
        paddingHorizontal: 8,
    },
    commentButton: {
        backgroundColor: '#FEC75D',
        padding: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    commentButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SocialNet;