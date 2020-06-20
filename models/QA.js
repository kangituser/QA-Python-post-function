const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../util/database");

class QA extends Model {}

QA.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    module: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    component: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    field_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    test_desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    desired_result: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    board_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    insert_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "mvcQA",
    timestamps: false,
    freezeTableName: true,
  }
);

QA.sync({ alter: false })

module.exports = QA;
