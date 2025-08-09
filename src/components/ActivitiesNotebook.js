import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const ActivitiesNotebook = () => {
  // Suponiendo que las notas se obtienen de alguna fuente de datos
  const activitiesData = [
    'Nota 1: Realizar informe de ventas',
    'Nota 2: Reunión con equipo de marketing',
    'Nota 3: Investigar nuevos proveedores',
    'Nota 4: Completar el plan de acción',
  ];

  const currentDate = new Date().toDateString();

  const [newNote, setNewNote] = useState('');
  const [activities, setActivities] = useState(activitiesData);

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setActivities([...activities, `Nota ${activities.length + 1}: ${newNote}`]);
      setNewNote('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.dateText}>{currentDate}</Text>
      </View>

      <ScrollView style={styles.notesContainer}>
        {activities.map((note, index) => (
          <View style={styles.noteBox} key={index}>
            <Text style={styles.noteText}>{note}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.addNoteContainer}>
        <TextInput
          style={styles.input}
          placeholder="Agrega una nueva nota"
          value={newNote}
          onChangeText={(text) => setNewNote(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff9e',
  },
  banner: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  dateText: {
    fontSize: 18,
  },
  notesContainer: {
    marginVertical: 20,
  },
  noteBox: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  noteText: {
    fontSize: 16,
  },
  addNoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#ffff9e',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default ActivitiesNotebook;
