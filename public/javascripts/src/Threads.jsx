var React = require('react');
var request = require('request');
var moment = require('moment');

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
      var flattened = [];
      for (i = 0; i < result.length; i++) {
        var children = result[i].data.children;
        for (j = 0; j < children.length; j++) {
          if (children[j].kind == "t3") {
              flattened.push(children[j]);
          }
        }
      };
      console.log(flattened[0].data);
      var res = {};
      res["data"] = flattened;
			if (this.isMounted()) {
				this.setState(res);
			}
		}.bind(this));
	},
	render: function() {
		return (
			<div className="list-group">
				{this.state.data.map(function(thread, position){
          var utcDate = thread.data.created;
          var postCreated = moment.unix(utcDate).format("dddd, MMMM Do YYYY");
					return (
						<Thread
							author={ thread.data.author }
              title={ thread.data.title }
              permalink={ thread.data.permalink }
              subreddit={ thread.data.subreddit }
              score={ thread.data.score }
              created_date={ postCreated }
              thumbnail={ thread.data.thumbnail }
							key={ position }
						/>
					)
				})}
			</div>
		)
	}
});
