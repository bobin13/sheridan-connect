import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const NewsFeed = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/LoginPage');
  };

  // Hardcoded News Data
  const newsData = [
    {
      id: 1,
      title: "New Campus Library Opened",
      image: "https://via.placeholder.com/400x200", // Placeholder image
      description: "The newly renovated library on campus is now open. With a modern design and more resources, students have access to more than ever.",
      date: "October 2, 2024",
    },
    {
      id: 2,
      title: "Upcoming Tech Fest 2024",
      image: "https://via.placeholder.com/400x200", // Placeholder image
      description: "The annual Tech Fest is here! This year promises to bring exciting new tech innovations. Join us on October 20th.",
      date: "October 1, 2024",
    },
    {
      id: 3,
      title: "AI Expert Seminar",
      image: "https://via.placeholder.com/400x200", // Placeholder image
      description: "Join Dr. John Smith for an expert seminar on AI and Machine Learning. The event is free for all students and faculty.",
      date: "September 30, 2024",
    },
    {
      id: 4,
      title: "College Sports Day",
      image: "https://via.placeholder.com/400x200", // Placeholder image
      description: "Join us for the annual College Sports Day filled with fun, competition, and prizes. Don’t miss out!",
      date: "September 29, 2024",
    },
    {
      id: 5,
      title: "Mental Health Awareness Workshop",
      image: "https://via.placeholder.com/400x200", // Placeholder image
      description: "A workshop focused on mental health awareness and resources available to students. Open to everyone.",
      date: "September 28, 2024",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News and Updates</Text>

      <ScrollView contentContainerStyle={styles.newsFeed}>
        {newsData.map((news) => (
          <View key={news.id} style={styles.newsItem}>
            <Image source={{ uri: news.image }} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.newsDescription}>{news.description}</Text>
              <Text style={styles.newsDate}>Posted on: {news.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={navigateToLogin} style={styles.iconButton}>
        <Ionicons name="log-in" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  newsFeed: {
    paddingHorizontal: 20,
  },
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: '#888',
  },
  iconButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default NewsFeed;
