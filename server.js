//dependencies
const Express = require("express")
	, Exphbs = require("express-handlebars")
	, MethodOverride = require("method-override")
	, db = require("./models");
	// , routes = require("./controllers/burgers-controllers.js");

//variables
var app = Express();
var port = process.env.PORT || 3000;

//setup public folder as static
app.use(Express.static("./public"));

//handlebars setup
app.engine("handlebars", Exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Method Override setup
app.use(MethodOverride("_method"));

//routing setup
require("./controllers/routes.js")(app);


//sync the sequelize models
db.sequelize.sync({force: true}).then(function()
{
	//start the app listening on a port
	app.listen(port, function(error)
	{
		if (error)
			throw error;

		console.log("now listening on port: " + port);
	});
});


