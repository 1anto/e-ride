import map from '../assets/map.png';
const MapContainer = () => {
    return (
        // <Map
        //   google={props.google}
        //   zoom={8}
        //   style={mapStyles}
        //   initialCenter={{ lat: 47.444, lng: -122.176}}
        // />
        <>
            <img src={map} alt="map"/>
        </>
    );
}

export default MapContainer;