var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.searchTextInput.value
    )
  },
  render: function() {
    return(
        <div className="input-group search-bar">
          <span className="input-group-addon" id="basic-addon1">search URL</span>
          <input
            type="text"
            placeholder="input link URL..."
            value={ this.props.searchText }
            ref="searchTextInput"
            onChange={ this.handleChange }
            className="search-box form-control"
            aria-describeby="basic-addon1"
          />
        </div>
    )
  }
})
