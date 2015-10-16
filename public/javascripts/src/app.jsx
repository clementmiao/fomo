var $ = global.jQuery = require('jquery');
var bootstrap = require('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');
var ReactDOM = require('react-dom');
var Jobs = require('./Jobs.jsx');

ReactDOM.render(
	<Jobs />,
	document.getElementById('jobs')
);