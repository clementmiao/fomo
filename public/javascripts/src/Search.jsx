var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.searchTextInput.value
    )
  },
  render: function() {
    return(
      <form className="search-bar">
        <input
          type="text"
          placeholder="input link URL..."
          value={ this.props.searchText }
          ref="searchTextInput"
          onChange={ this.handleChange }
          className="search-box"
        />
      </form>
    )
  }
})
