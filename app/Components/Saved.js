const React = require("react");
const Router = require('react-router');
const test = "test";
const helpers = require('../utils/helpers');

const Saved = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
          </div>
          <div className="panel-body" id="well-section">
          </div>
        </div>
        </div>
      </div>
    )
  }
});

module.exports = Saved;
