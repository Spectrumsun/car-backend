export default (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    car_model: {
      type: DataTypes.STRING,
    },
    car_model_year: {
      type: DataTypes.INTEGER,
    },
    car_color: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    job_title: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT,
    },
  });
  Car.associate = (models) => {};
  return Car;
};
