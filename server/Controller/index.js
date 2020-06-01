import models from "../database/models";
import { Op } from "sequelize";


class Car {
  static welcome(req, res) {
    res.status(200).json({ message: "Welcome to Cars" });
  }

  static async getAllCars(req, res) {
    const getCars = await models.Car.findAll();
    res.status(200).json({
      message: "success",
      getCars,
    });
  }
  static async searchCars(req, res) {
    const { start, end, gender, countries, color } = req.query;
    try {
      const carResults = await models.Car.findAll({
        where: {
          car_model_year: {
            [Op.between]: [start, end],
          },
          gender: `${gender}`,
          car_color: { [Op.iLike]: `%${color}%` } ,
          country: { [Op.iLike]: `%${countries}%` } ,
        },
        order: [["createdAt", "DESC"]],
      });
      return res.status(200).json({ message: "Success", carResults });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Fail", error });
    }
  }
}

export default Car;
