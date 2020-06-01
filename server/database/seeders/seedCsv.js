import fs from "fs";
import path from "path";
import neatCsv from "neat-csv";
import models from "../models";
import "dotenv/config";
const filePath = path.resolve(__dirname, "car_ownsers_data.csv");

fs.readFile(filePath, async (error, data) => {
  if (error) return console.log("error reading file");
  const parsedData = await neatCsv(data);
  const insertCars = await models.Car.bulkCreate(parsedData);
  console.log(insertCars);
});
