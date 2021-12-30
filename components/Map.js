import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter'
function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({});
    const coordinates = searchResults.map((result) => ({
        longitude:result.long,
        latitude:result.lat,
    }))
    const center = getCenter(coordinates)
    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    })
    return (
        <ReactMapGL
          mapStyle='mapbox://styles/dipesharya/cktvvhv4w06r619nzi5omjilm'
          mapboxApiAccessToken={process.env.mapbox_key}
          {...viewport}
          onViewportChange={(nextViewport)=>setViewport(nextViewport)}>
          {searchResults.map((result)=>(
              <div key={result.long}>
                  <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetRight={-10}>
                      <p aria-label='push-pin' role='img' onClick={()=>setSelectedLocation(result)} className=' cursor-pointer text-2xl animate-bounce'>
                      📌
                      </p>
                  </Marker>
                  {selectedLocation.long === result.long ? (
                      <Popup closeOnClick={true} onClose={()=>setSelectedLocation({})} longitude={result.long} latitude={result.lat} >{result.title}</Popup>
                  ) : (false)}
              </div>
          ))}
        </ReactMapGL>
    )
}

export default Map
