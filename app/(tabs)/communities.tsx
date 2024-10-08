import { View, Text, StyleSheet } from "react-native";
import React from "react";

const communities = () => {
  return (
    <View>
      <Text style={styles.title}>Communities</Text>
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

});
export default communities;
