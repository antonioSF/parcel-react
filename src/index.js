import React from "react";

import ReactDOM from "react-dom";

import Header from './components/Header';

import './styles/app.scss';

class HelloMessage extends React.Component {

	render() {
		return <div>
			<Header />

			<div className="container">
				<h1>Hello {this.props.name}</h1>
			</div>

		</div>
	}
}

const App = document.getElementById('js-app');

ReactDOM.render(<HelloMessage name="Anakin" />, App);