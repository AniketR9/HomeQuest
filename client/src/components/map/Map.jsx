import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet';
import './map.scss';
import Pin from "../pin/Pin"
import "leaflet/dist/leaflet.css";

function Map({items}){
    return(
    <MapContainer center={items.length==1 ? [items[0].latitude,items[0].longitude] : [21.7679,78.8718]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(<Pin key={item.id} item={item} />))}
    
  </MapContainer>
    );
}

export default Map;