import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';



const GoogleMapComponent: React.FC = () => {
    const containerStyle = {
        width: '400px',
        height: '400px',
    };

    const center = {
        lat: -34.397,
        lng: 150.644,
    };

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        >
            <Marker position={center}>
                <InfoWindow>
                    <div>
                        <h3>Marker Info</h3>
                        <p>This is the marker's info window content.</p>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    );
};

export default GoogleMapComponent;