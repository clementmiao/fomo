var $ = global.jQuery = require('jquery');
var bootstrap = require('../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');
var ReactDOM = require('react-dom');
var SearchTable = require('./SearchTable.jsx');

ReactDOM.render(
	<SearchTable />,
	document.getElementById('search-table')
);
