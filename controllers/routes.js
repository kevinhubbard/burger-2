//dependencies
var db = require("../models")
	, BodyParser = require("body-parser");

//body parser setup
var urlEncodedParser = BodyParser.urlencoded({extended: false});

//establish the routes
module.exports = function(app)
{
	app.post("/api/addBurger", urlEncodedParser, function(req, res)
	{
		db.burgersNew.create(
		{
			burger_name: req.body.burgerName,
			devoured: false,
			date: new Date()
		}).then(function(data)
		{
			res.redirect("/");
		});
	});

	app.put("/:id", function(req, res)
	{
		db.burgersNew.update(
		{
			devoured: true
		}, 
		{
			where: { id: req.params.id }
		}).then(function(data)
		{
			res.redirect("/");
		});
	});

	app.get("/", function(req, res)
	{
		db.burgersNew.findAll({}).then(function(results)
		{
			console.log(results);
			res.render("index", { burgers: results });
		});
	});
};