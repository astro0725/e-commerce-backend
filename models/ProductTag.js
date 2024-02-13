module.exports = (sequelize, DataTypes) => {
  class ProductTag extends sequelize.Sequelize.Model {}
  ProductTag.init({
      productTagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  })
return ProductTag;
};