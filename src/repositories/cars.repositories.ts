import database from "../database/connection";
import { Car } from "../types/Car";
import { ICarsRepositories } from "../types/ICarsRepositories";

class CarsRepository implements ICarsRepositories {
  async create(car: Car): Promise<Car> {
    const newCar = await database.carro.create({
      data: {
        ...car,
      },
    });

    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const listCars = await database.carro.findMany();

    return listCars;
  }

  async findOne(id: number): Promise<Car> {
    const car = (await database.carro.findUnique({
      where: {
        id,
      },
    })) as Car;

    return car;
  }

  async update(car: Partial<Car>, id: number): Promise<Car> {
    const updatedCar = await database.carro.update({
      where: {
        id,
      },
      data: {
        ...car,
      },
    });

    return updatedCar;
  }

  async remove(id: number): Promise<void> {
    const deleteCar = await database.carro.delete({
      where: {
        id,
      },
    });
    console.log(deleteCar);
  }
}
