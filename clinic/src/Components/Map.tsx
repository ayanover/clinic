import React from 'react';
import './ComponentStyles/Map.css'

const GoogleMapComponent: React.FC = () => {
    return (
        <>
            <iframe className={'map'}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Krupiowska%202%20Rzesz%C3%B3w+(BioSfera%20-%20Gabinet%20Biorezonansu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=39e78104f1937e044e0e192d37b7ffbf5e2679d8'></script>
    </>
)
    ;
};

export default GoogleMapComponent;