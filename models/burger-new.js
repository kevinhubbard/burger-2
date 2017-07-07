//dependencies
module.exports = function(sequelize, DataTypes)
{
	var burgersNew = sequelize.define("burgersNew", 
	{
		burger_name: 
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate: 
			{
				len: [1, 40]
			}
		},
		devoured: 
		{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		date: 
		{
			type: DataTypes.DATE,
			allowNull: false
		},
	},
	{
		freezeTableName: true
	});
	return burgersNew;
};