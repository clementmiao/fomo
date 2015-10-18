var React = require('react');

module.exports = React.createClass({
    render: function() {
        var tn;
        if (this.props.thumbnail && this.props.thumbnail != 'default') {
          tn = <a href={ 'http://www.reddit.com' + this.props.permalink }>
                <div className="post-thumb">
                  <img src={ this.props.thumbnail } className="thumbnail-img"/>
                </div>
               </a>;
        };
        return (
          <div className="post-container">
            { tn }
            <a href={ 'http://www.reddit.com' + this.props.permalink } className="list-group-item">
                <h4 className="list-group-item-heading post">
                    <span className="post-title">{ this.props.title }</span>
                    <small className="post-author">{ this.props.author }</small>
                    <small className="post-score">score: { this.props.score }</small>
                </h4>
                <p className="list-group-item-text">
                    <span className="subreddit">Subreddit: { this.props.subreddit }</span>
                </p>
                <p className="list-group-item-text">
                    <span className="post-posted">Posted: { this.props.created_date }</span>
                    <span className="num-comments">{ this.props.numComments } comments</span>
                </p>
            </a>
          </div>
        );
    }
});
