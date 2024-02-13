module.exports = (sequelize, DataTypes) => {
  class Tag extends sequelize.Sequelize.Model {}
  Tag.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  });
  Tag.associate = models => {
    Tag.belongsToMany(models.product, {
      through: models.product_tag,
      as: 'products',
      foreignKey: 'tagId',
      otherKey: 'productId',
    });
  };
return Tag;
};