module.exports = (sequelize, DataTypes) => {
  class Product extends sequelize.Sequelize.Model {}
  Product.init({
      productId: {
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
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  })
  Product.associate = models => {
    Product.hasMany(models.Category, { 
      foreignKey: 'categoryId', 
    });
    Product.hasMany(models.Tag, { 
      foreignKey: 'tagId', 
    });
    Product.hasMany(models.ProductTag, {
      foreignKey: 'productTagId',
    });
  };
return Product;
};