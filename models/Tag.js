module.exports = (sequelize, DataTypes) => {
  class Tag extends sequelize.Sequelize.Model {}
  Tag.init({
      tagId: {
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
    modelName: 'tag',
  })
  Tag.associate = models => {
    Tag.belongsTo(models.Product, { 
      foreignKey: 'productId', 
    });
  };
return Tag;
};