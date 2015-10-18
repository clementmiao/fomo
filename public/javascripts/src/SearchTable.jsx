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
      <div>
        <Search searchText= { this.state.searchText } onUserInput={ this.handleUserInput } />
        <Threads searchText= { this.state.searchText } />
      </div>
    )
  }
})
