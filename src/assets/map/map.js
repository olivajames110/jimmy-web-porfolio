import React, { useRef, useEffect } from 'react';
import './map.css';
const apiKey = 'AIzaSyB-NdQtol6W5tmk6AzHsKKTgRThZd9njbk';

const Map = props => {
	const mapRef = useRef();

	useEffect(
		() => {
			const map = new window.google.maps.Map(mapRef.current, {
				center: props.c3,
				zoom: props.zoom
			});

			new window.google.maps.Marker({ position: props.center, map: map });
			new window.google.maps.Marker({ position: props.c2, map: map });
			new window.google.maps.Marker({ position: props.c3, map: map });
		},
		[props.c2, props.c3, props.center, props.zoom]
	);

	return (
		<div id="map-container">
			<div ref={mapRef} className={`map ${props.className} style=${props.style}`}>
				Map
			</div>
			<div id="map-container__locations">
				<div className="location">
					<h2 className="location__title">Olney Location</h2>
					<p>18149 Town Center Drive</p>
					<p>Olney, MD 20832</p>
					<p>Tel: 301-570-1111</p>
				</div>
				<div className="location">
					<h2 className="location__title">Olney Location</h2>
					<p>18149 Town Center Drive</p>
					<p>Olney, MD 20832</p>
					<p>Tel: 301-570-1111</p>
				</div>
				<div className="location">
					<h2 className="location__title">Olney Location</h2>
					<p>18149 Town Center Drive</p>
					<p>Olney, MD 20832</p>
					<p>Tel: 301-570-1111</p>
				</div>
			</div>
		</div>
	);
};

export default Map;
