import React, {Component} from 'react'


class GoogleMap extends Component{

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    // isso cria uma referencia para bibliotecas normais que nao conhecem react like #id
    render() {
        return <div ref="map"></div>
    }
}

export default GoogleMap