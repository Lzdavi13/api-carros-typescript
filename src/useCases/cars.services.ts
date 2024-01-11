import { Car } from "../types/Car";
import { CarsRepository } from "./../repositories/cars.repositories";

export class CarsServices {
  private carsRepository: CarsRepository;
  constructor() {
    this.carsRepository = new CarsRepository();
  }

  async createCar(car: Omit<Car, "id">): Promise<Car> {
    const newCar = await this.carsRepository.create(car);

    return newCar;
  }

  async listCars(): Promise<Car[]> {
    const cars = await this.carsRepository.findAll();

    return cars;
  }

  async detailCar(id: number): Promise<Car> {
    const car = await this.carsRepository.findOne(id);

    if (typeof car === null) {
      throw new Error("O carro não foi encontrado");
    }

    return car;
  }

  async updateCar(car: Partial<Car>, id: number): Promise<Car> {
    const updatedCar = await this.carsRepository.update(car, id);

    return updatedCar;
  }

  async removeCar(id: number): Promise<void> {
    await this.carsRepository.remove(id);
  }
}
