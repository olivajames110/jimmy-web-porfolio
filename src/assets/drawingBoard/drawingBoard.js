import React, {Component} from 'react';
import './drawingBoard.css';
import CursorIcon from './images/pencil.png';
import {render} from 'react-dom';
import {Stage, Layer, Rect, Image, Group} from 'react-konva';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faHighlighter, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
class Drawing extends Component {
	state = {
		isDrawing: false,
		mode: 'brush',
		strokeColor: '#000000',
		dimensions: {
			width: 995,
			height: 658
		}
	};
	componentDidMount() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		this.setState({canvas, context});
		this.setState({
			dimensions: {
				width: document
					.querySelector('.whiteboard-container')
					.offsetWidth,
				height: document
					.querySelector('.whiteboard-container')
					.offsetHeight
			}
		});
		console.log(this.state.dimensions.width);
		canvas.width = document
			.querySelector('.whiteboard-container')
			.offsetWidth;
		canvas.height = document
			.querySelector('.whiteboard-container')
			.offsetHeight;
		console.log(this.state.dimensions.width);
	}

	handleMouseDown = () => {
		// console.log('mousedown');
		this.setState({isDrawing: true});

		// TODO: improve
		const stage = this.image.parent.parent;
		this.lastPointerPosition = stage.getPointerPosition();
	};

	handleMouseUp = () => {
		// console.log('mouseup');
		this.setState({isDrawing: false});
	};

	handleMouseMove = () => {
		// console.log('mousemove');
		const {context, isDrawing, mode} = this.state;

		if (isDrawing) {
			// console.log('drawing');

			// TODO: Don't always get a new context
			context.strokeStyle = this.state.strokeColor;
			context.lineJoin = 'round';
			context.lineWidth = 5;

			if (mode === 'brush') {
				context.globalCompositeOperation = 'source-over';
			} else if (mode === 'eraser') {
				context.globalCompositeOperation = 'destination-out';
			}
			context.beginPath();

			var localPos = {
				x: this.lastPointerPosition.x - this
					.image
					.x(),
				y: this.lastPointerPosition.y - this
					.image
					.y()
			};
			// console.log('moveTo', localPos);
			context.moveTo(localPos.x, localPos.y);

			// TODO: improve
			const stage = this.image.parent.parent;

			var pos = stage.getPointerPosition();
			localPos = {
				x: pos.x - this
					.image
					.x(),
				y: pos.y - this
					.image
					.y()
			};
			console.log('lineTo', localPos);
			context.lineTo(localPos.x, localPos.y);
			context.closePath();
			context.stroke();
			this.lastPointerPosition = pos;
			this
				.image
				.getLayer()
				.draw();
		}
	};

	handleColorChange = (color) => {
		console.log(color.target);
		this.setState({strokeColor: 'red'});
	};

	handlePalette = () => {
		return (
			<div className="palette">
				<div className="palette-sub-container">
					<span>Colors</span>
					<div className="palette-colors">
						<div
							onClick={this.handleColorChange}
							id="black"
							className="palette-sub-container-item"/>
						<div
							onClick={this.handleColorChange}
							id="white"
							className="palette-sub-container-item"/>
						<div
							onClick={this.handleColorChange}
							id="red"
							className="palette-sub-container-item"/>
						<div
							onClick={this.handleColorChange}
							id="blue"
							className="palette-sub-container-item"/>
					</div>
				</div>
				<div className="palette-sub-container">
					<span>Tools</span>
					<div className="palette-tools">
						<div id="black" className="palette-sub-container-item">
							{' '}
							<FontAwesomeIcon icon={faHighlighter}/>
						</div>
						<div id="white" className="palette-sub-container-item">
							<FontAwesomeIcon icon={faPencilAlt}/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const {canvas} = this.state;
		// console.log('canvas', canvas);
		const cursor = 'pencil';
		// console.log(cursor);

		return (
			<div className={`canvas-container canvas-cursor--${cursor}`}>
				{this.handlePalette()}
				<Stage
					width={this.state.dimensions.width - 20}
					height={this.state.dimensions.height - 38}>
					<Layer>
						<Image
							image={canvas}
							ref={(node) => (this.image = node)}
							width={this.state.dimensions.width}
							height={this.state.dimensions.height}
							stroke="blue"
							onMouseDown={this.handleMouseDown}
							onMouseUp={this.handleMouseUp}
							onMouseMove={this.handleMouseMove}/>
					</Layer>
				</Stage>
			</div>
		);
	}
}

export default Drawing;

// class App extends Component {   render() {     return (       <Stage
// width={700} height={700}>         <Layer>           <Drawing />
// </Layer>       </Stage>     );   } } render(<App />,
// document.getElementById("root"));