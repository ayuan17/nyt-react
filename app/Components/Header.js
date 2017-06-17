var React = require("react");
var Router = require('react-router');

var helpers = require('../utils/helpers');

var Header = React.createClass({

	render: function() {
		return(
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> NYT React </strong></h1>
				</div>
			</div>


		)
	}
});
module.exports = Header;
