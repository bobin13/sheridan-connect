import { View, Text, StyleSheet } from "react-native";
import React from "react";

const map = () => {
  return (
    <View>
      <Text style={styles.title}>Campus Map</Text>
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

export default map;
