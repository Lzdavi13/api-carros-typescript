import { Request, Response } from "express";
import { CarsServices } from "./../useCases/cars.services";

class CarsController {
  private carsServices: CarsServices;
  constructor() {
    this.carsServices = new CarsServices();
  }

  async listCars(req: Request, res: Response): Promise<Response> {
    const listCars = await this.carsServices.listCars();

    return res.status(200).json({ carros: listCars });
  }

  async detailCar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const car = await this.carsServices.detailCar(Number(id));

    return res.status(200).json({ carro: car });
  }

  async createCar(req: Request, res: Response): Promise<Response> {
    const car = await this.carsServices.createCar(req.body);

    return res
      .status(200)
      .json({ mensagem: "Carro adicionado com sucesso", carro: car });
  }

  async updateCar(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updatedCar = await this.carsServices.updateCar(req.body, Number(id));

    return res
      .status(200)
      .json({ mensagem: "Carro atualizado com sucesso", carro: updatedCar });
  }
}

export default new CarsController();
