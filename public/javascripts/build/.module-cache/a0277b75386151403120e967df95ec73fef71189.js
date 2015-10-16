var React = require('react');

module.exports = React.createClass({displayName: "exports",
	render: function() {
		return (
			React.createElement("h1", null, "Hello, world from React.js Component!")	
		)
	}
});
