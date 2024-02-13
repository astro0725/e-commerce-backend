module.exports = (sequelize, DataTypes) => {
  class Product extends sequelize.Sequelize.Model {}
  Product.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      product_name: {
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
        allowNull: false,
        defaultValue: 10,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'category',
          key: 'id',
        },
      }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  });
  Product.associate = models => {
    Product.belongsTo(models.category, {
      foreignKey: 'category_id',
      as: 'category',
    });
    Product.belongsToMany(models.tag, {
      through: models.product_tag,
      as: 'tags',
      foreignKey: 'product_id',
      otherKey: 'tagId',
    });
  };
return Product;
};