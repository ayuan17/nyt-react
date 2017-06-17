const React = require("react");
const Router = require('react-router');
const test = "test";
const helpers = require('../utils/helpers');
const axios = require('axios');

const Search = require('./Search');
const Query = require('./Query');
const Saved = require('./Saved');
const Header = require('./Header');

const Main = React.createClass({

	getInitialState: function() {
		return {
			topic: "",
			start: "",
			end: "",
			results: [],
			savedArticles: []
		}
	},

	setParent: function(topic, start, end) {
		this.setState({
			topic: topic,
			startYear: start,
			endYear: end
		});
	},

	saveArticle: function(title, date, url) {
		helpers.postArticle(title, date, url);
		this.getArticle();
	},

	deleteArticle: function(article) {
		axios.delete('/api/saved/' + article._id)
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
				return response;
			}.bind(this));

		this.getArticle();
	},

	componentDidUpdate: function(prevProps, prevState) {

		if(this.state.topic != prevState.topic) {
		helpers.runQuery(this.state.topic, this.state.start, this.state.end)
      		.then(function(data) {
        		this.setState({ results: data});
      }.bind(this));
      }
	},

	render: function() {
		return(
			<div className="container">
				<div className="container">
					<div className="jumbotron">
						<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  NYT React </strong></h1>
					</div>
				</div>
				<Search setParent={this.setParent} />
				<Query results={this.state.results} savedArticle={this.savedArticle}/>
				<Saved savedArticles={this.state.savedArticles} deleteArticle={this.state.deleteArticle} />
			</div>


		)
	}
});
module.exports = Main;
