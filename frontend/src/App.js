import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import StarIcon from "@mui/icons-material/Star";
import "mapbox-gl/dist/mapbox-gl.css";
import './app.css'

function App() {
  const [showPopup, setShowPopup] = React.useState(true);
  const [viewState, setViewState] = React.useState({
   longitude: 35,
   latitude: 31.6,
   zoom: 6.5,
 });

 return (
   <Map
     {...viewState}
     onMove={(evt) => setViewState(evt.viewState)}
     style={{ width: "100vw", height: "100vh" }}
     //  mapStyle="mapbox://styles/mapbox/streets-v9"
     mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
     mapboxAccessToken={process.env.REACT_APP_MAPBOX}
   >
     <Marker longitude={34.75} latitude={32.05} color="slateblue" />
     {/* {showPopup && (
       <Popup
         longitude={34.75}
         latitude={32.05}
         anchor="right"
         onClose={() => setShowPopup(false)}
       >
         <div className="card">
           <label>Place</label>
           <h4 className="place">Jaffa</h4>
           <label>Review</label>
           <p className="desc">Beautiful place. I like it.</p>
           <label>Rating</label>
           <div className="stars">
             <StarIcon className="star" />
             <StarIcon className="star" />
             <StarIcon className="star" />
             <StarIcon className="star" />
             <StarIcon className="star" />
           </div>
           <label>Information</label>
           <span className="username">
             created By <b>Jingjing</b>
           </span>
           <span className="date">1 hour ago</span>
         </div>
       </Popup>
     )} */}
   </Map>
 );
}

export default App;
