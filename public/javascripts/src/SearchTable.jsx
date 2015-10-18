var React = require('react');
var Threads = require('./Threads.jsx');
var Search = require('./Search.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      searchText: ''
    };
  },
  handleUserInput: function(searchText) {
    // console.log(searchText);
    this.setState({
      searchText: searchText
    });
  },
  render: function() {
    return(
      <div className = "search-table">
        <Search searchText= { this.state.searchText } onUserInput={ this.handleUserInput } />
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Reddit Threads</h3>
          </div>
          <div className="panel-body">
            <Threads searchText= { this.state.searchText } />
          </div>
        </div>
      </div>
    )
  }
})
