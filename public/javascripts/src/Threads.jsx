var React = require('react');
var request = require('request');

var Thread = require('./Thread.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		// This will return an API call eventually ...
		return {
			data: []
		};
	},
	componentDidMount: function() {
		request('https://www.reddit.com/search.json?q=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2Fbehrouz%2Fnora-the-smart-snoring-solution%2Fupdates', function(error, response, body) {
			var result = JSON.parse(body);
			console.log(result[0].data.children[0].data.author); //.data.children.data.author
			if (this.isMounted()) {
				this.setState(result);
			}
		}.bind(this));
	},
	render: function() {
		return (
			<div className="list-group">
				{this.state.data.map(function(thread, position){
					return (
						<Thread
							company={job.company}
							position={job.position}
							local={job.local}
							lookingFor={job.lookingFor}
							postedDate={job.postedDate}
							description={job.description}
							category={job.category}
							key={position}
						/>
					)
				})}
			</div>
		)
	}
});