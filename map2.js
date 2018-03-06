import React from 'react';
import MapView from 'react-native-maps';
import Geojson from 'react-native-geojson';

const alcatraz = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [-122.42305755615234, 37.82687023785448],
      }
    }
  ]
};

const Map = props => (
  <MapView>
    <Geojson geojson={alcatraz} />
  </MapView>
);
