import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const AddInfoPage: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    // "https://via.placeholder.com/150x100?text=Image+1",
    "https://via.placeholder.com/150x100?text=Image+1",
    "https://via.placeholder.com/150x100?text=Image+2",
    "https://via.placeholder.com/150x100?text=Image+3",
    // Add more image URLs as needed
  ];

  const handleAddInfo = () => {
    // Here, you can add the logic to save the information
    alert('New information added');
    router.push('/'); // Navigate back to the news feed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Information</Text>
      
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      
      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        placeholder="Date"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.imageHeader}>Select an Image:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(image)}>
            <Image source={{ uri: image }} style={styles.imageThumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <Button title="Add Info" onPress={handleAddInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  imageHeader: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageThumbnail: {
    width: 150,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default AddInfoPage;
