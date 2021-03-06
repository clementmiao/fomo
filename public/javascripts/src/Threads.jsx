var React = require('react');
var request = require('request');
var moment = require('moment');
var url = require('url');
var S = require('string');

var Thread = require('./Thread.jsx');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			data: []
		};
	},
	componentWillReceiveProps: function(nextProps) {
    var searchText = nextProps.searchText;
    var encodedText = encodeURIComponent(searchText);
    var baseUrl = S(url.parse(searchText).host);
	  request('https://www.reddit.com/search.json?q=' + encodedText, function(error, response, body) {
      var result = JSON.parse(body);
      var flattened = [];
      if (result.constructor != Array) {
        result = [result];
      }
      for (i = 0; i < result.length; i++) {
        var children = result[i].data.children;
        for (j = 0; j < children.length; j++) {
          if (children[j].kind == "t3" && baseUrl.contains(children[j].data.domain)) {
              flattened.push(children[j]);
          }
        }
      };
      var res = {};
      res["data"] = flattened;
			this.setState(res);
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
              numComments={ thread.data.num_comments }
							key={ position }
						/>
					)
				})}
			</div>
		)
	}
});
