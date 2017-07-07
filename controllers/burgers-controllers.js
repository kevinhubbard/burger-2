//dependencies
const Express = require("express")
	, Burger = require("../models/burger.js")
	, BodyParser = require("body-parser");

//variables
var router = Express.Router();
var urlEncodedParser = BodyParser.urlencoded({extended: false});

//routes
router.post("/api/addBurger", urlEncodedParser, function(req, res)
{
	Burger.InsertOne(req, res);
});

router.put("/:id", function(req, res)
{
	Burger.UpdateOne(req, res);
});

router.get("/", function(req, res)
{
	Burger.SelectAll(req, res);
});

//export the router
module.exports = router;