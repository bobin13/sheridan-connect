import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface NewsItem {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  likes: number;
  comments: string[];
}

const NewsFeed: React.FC = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);
  const [newComment, setNewComment] = useState("");

  // Hardcoded News Data with random images
  const [newsData, setNewsData] = useState<NewsItem[]>([
    {
      id: 1,
      title: "New Campus Library Opened",
      image: "https://source.unsplash.com/random/400x200?library",
      description:
        "The newly renovated library on campus is now open. With a modern design and more resources, students have access to more than ever.",
      date: "October 2, 2024",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Upcoming Tech Fest 2024",
      image: "https://source.unsplash.com/random/400x200?tech",
      description:
        "The annual Tech Fest is here! This year promises to bring exciting new tech innovations. Join us on October 20th.",
      date: "October 1, 2024",
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      title: "Mental Health Awareness Workshop",
      image: "https://source.unsplash.com/random/400x200?mental-health",
      description:
        "A workshop focused on mental health awareness and resources available to students. Open to everyone.",
      date: "September 28, 2024",
      likes: 0,
      comments: [],
    },
    {
      id: 4,
      title: "Student Art Exhibition",
      image: "https://source.unsplash.com/random/400x200?art",
      description:
        "Explore the creativity of our talented students at the upcoming Art Exhibition on November 5th.",
      date: "October 29, 2024",
      likes: 0,
      comments: [],
    },
  ]);

  const navigateToAddInfo = () => {
    router.push("/AddInfoPage");
  };

  const navigateToLogin = () => {
    router.push("/LoginPage");
  };

  const handleLike = (id: number) => {
    setNewsData(
      newsData.map((news) =>
        news.id === id ? { ...news, likes: news.likes + 1 } : news
      )
    );
  };

  const openCommentsModal = (news: NewsItem) => {
    setCurrentNews(news);
    setModalVisible(true);
  };

  const handleAddComment = () => {
    if (currentNews) {
      setNewsData(
        newsData.map((news) =>
          news.id === currentNews.id
            ? { ...news, comments: [...news.comments, newComment] }
            : news
        )
      );
      setNewComment("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News and Updates</Text>

      {/* <TouchableOpacity onPress={navigateToAddInfo} style={styles.addButton}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity> */}

      <ScrollView contentContainerStyle={styles.newsFeed}>
        {newsData.map((news) => (
          <View key={news.id} style={styles.newsItem}>
            <Image source={{ uri: news.image }} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{news.title}</Text>
              <Text style={styles.newsDescription}>{news.description}</Text>
              <Text style={styles.newsDate}>Posted on: {news.date}</Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  onPress={() => handleLike(news.id)}
                  style={styles.actionButton}
                >
                  <Ionicons name="heart" size={20} color="red" />
                  <Text style={styles.actionText}>{news.likes} Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openCommentsModal(news)}
                  style={styles.actionButton}
                >
                  <Ionicons name="chatbubble" size={20} color="blue" />
                  <Text style={styles.actionText}>
                    {news.comments.length} Comments
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Implement share functionality */
                  }}
                  style={styles.actionButton}
                >
                  <Ionicons name="share-social" size={20} color="green" />
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={navigateToAddInfo} style={styles.addButton}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin} style={styles.iconButton}>
        <Ionicons name="log-in" size={25} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Comments for {currentNews?.title}
          </Text>
          <ScrollView style={styles.commentsContainer}>
            {currentNews?.comments.map((comment, index) => (
              <Text key={index} style={styles.commentText}>
                {comment}
              </Text>
            ))}
          </ScrollView>
          <TextInput
            placeholder="Add a comment..."
            style={styles.commentInput}
            value={newComment}
            onChangeText={setNewComment}
          />
          <Button title="Submit" onPress={handleAddComment} />
          <Button
            title="Close"
            onPress={() => setModalVisible(false)}
            color="red"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  newsFeed: {
    paddingHorizontal: 20,
  },
  newsItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  newsImage: {
    width: "100%",
    height: 200,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: "#888",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  iconButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  addButton: {
    position: "absolute",
    top: 70,
    right: 10,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    padding: 10,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  commentsContainer: {
    maxHeight: 200,
  },
  commentText: {
    fontSize: 14,
    marginVertical: 5,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default NewsFeed;
