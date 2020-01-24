import React, { Component } from 'react';
import Mapboxgl from 'mapbox-gl';

export default class MapSection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		Mapboxgl.accessToken = process.env.REACT_APP_MAPGL_KEY
		
		new Mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v10',
			zoom: 9.5,
			center: [-73.138260, 40.792240]
		});
	}

	render() {
		return(
			<section id='section-map-wrapper'>
				<div id='map'></div>
			</section>
		)
	}

}