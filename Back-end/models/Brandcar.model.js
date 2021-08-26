module.exports = (sequelize, Sequelize) => {
    const BrandCar = sequelize.define("brandcars", {
      brandName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
    });  
    return BrandCar;
  };