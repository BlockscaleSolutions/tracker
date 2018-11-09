import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ProductMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={2}
        // Toronto as the center
        defaultCenter={{ lat: 43.666667, lng: -79.416667 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 43.666667, lng: -79.416667 }} />}
    </GoogleMap>
))

export default ProductMap