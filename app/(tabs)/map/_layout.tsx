// CollegeMapView.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const CollegeMapView = () => {
  // Coordinates for Sheridan College, Oakville
  const collegeCoords = {
    latitude: 43.46922,  // Latitude of Sheridan College, Oakville
    longitude: -79.69098
    , // Longitude of Sheridan College, Oakville
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...collegeCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={collegeCoords}
          title="Sheridan College"
          description="Location of Sheridan College, Oakville"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%', // Full height
  },
});

export default CollegeMapView;
