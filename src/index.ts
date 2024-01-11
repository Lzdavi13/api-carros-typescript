import express from "express";
import carsController from "./controllers/cars.controller";

const app = express();

app.use(express.json());

app.get("/carros", (request, response) => {
  return carsController.listCars(request, response);
});

app.get("/carros/:id", (request, response) => {
  return carsController.detailCar(request, response);
});

app.post("/carros", (request, response) => {
  return carsController.createCar(request, response);
});

app.put("/carros/update/:id", (request, response) => {
  return carsController.updateCar(request, response);
});

app.delete("/carros/remove/:id", (request, response) => {
  return carsController.removeCar(request, response);
});

app.listen(3333);
