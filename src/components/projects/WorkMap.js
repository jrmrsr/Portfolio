
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'

export default class WorkMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -100,
      zoom: 3,
      calgaryLat: 51.0486, 
      calgaryLng: -114.0708,
      torontoLat: 43.6532,
      torontoLng: -79.3832,
      ottawaLat: 45.4215,
      ottawaLng: -75.6972,
      sfLat: 37.7749,
      sfLng: -122.4194,
      charlottetownLat: 46.2382,
      charlottetownLng: -63.1311
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const calgaryPosition = [this.state.calgaryLat, this.state.calgaryLng]
    const torontPosition = [this.state.torontoLat, this.state.torontoLng]
    const ottawaPosition = [this.state.ottawaLat, this.state.ottawaLng]
    const sfPosition = [this.state.sfLat, this.state.sfLng]
    const charlottetownPosition = [this.state.charlottetownLat, this.state.charlottetownLng]
    return (
      <Map center={position} zoom={this.state.zoom} className="map-container">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={calgaryPosition}>
          <Popup>
            <h3>> Software Development Intern<br/>> May – Aug 2017<br/>> Shaw Communications Inc.</h3>
          </Popup>
        </Marker>
        <Marker position={torontPosition}>
          <Popup>
            <h3>> Junior Mechanical Designer<br/>> Jan – Apr 2018<br/>> Smith + Andersen</h3>
          </Popup>
        </Marker><Marker position={ottawaPosition}>
          <Popup>
            <h3>> Quality Assurance Intern<br/>> Sept – Dec 2016<br/>> Epiphan Systems Inc.</h3>
          </Popup>
        </Marker><Marker position={sfPosition}>
          <Popup>
            <h3>> Automation Intern<br/>> Sept - Dec 2018<br/>> FutureAdvisor</h3>
          </Popup>
        </Marker><Marker position={charlottetownPosition}>
          <Popup>
            <h3>> FLASHLamp Project<br/>> Jan – Apr 2016<br/>> Canada Food Inspection Agency</h3>
          </Popup>
        </Marker>
      </Map>
    )
  }
}