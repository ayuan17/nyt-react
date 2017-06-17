// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

var Router = router.Router;
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../Components/Main");
var Saved = require("../Components/Saved");
var Search = require("../Components/Search");

// Export the Routes
module.exports = (
<Router>
  // The high level component is the Router component
    <Route path="/" component={Main}>
    	<Route path="/saved" component={Saved} />
    	<Route path="/search" component={Search} />
     </Route>
</Router>
);
