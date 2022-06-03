import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MapsAPI from '../../MapsAPI';

const containerStyle = {
  width: '90%',
  height: '300px',
  margin: '0 auto'
};

const center = { lat: 45.042968, lng: 20.079514 };

function Map() {
  return (
    <LoadScript googleMapsApiKey={MapsAPI}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={{ lat: 45.042968, lng: 20.079514 }} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
