import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import {Ionicons} from '@expo/vector-icons'
import { useRouter } from "expo-router";

const newsfeed = () => {

  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/LoginPage');
  }

  return (
    <View>
      
      <Text style={styles.title}>News and Updates</Text>

      <TouchableOpacity onPress={navigateToLogin} style={styles.iconButton}>
        <Ionicons name="log-in" size={25} color="black" />
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,           
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,   
    marginVertical: 50    
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

export default newsfeed;
