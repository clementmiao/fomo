var $ = global.jQuery = require('jquery');
var bootstrap = require('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');
var ReactDOM = require('react-dom');
var Threads = require('./Threads.jsx');

ReactDOM.render(
	<Threads />,
	document.getElementById('threads')
);
