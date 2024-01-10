import { Car } from "./Car";

export interface ICarsRepositories {
  findAll(): Promise<Car[]>;

  findOne(id: number): Promise<Car>;

  create(car: Car): Promise<Car>;

  update(car: Partial<Car>, id: number): Promise<Car>;

  remove(id: number): Promise<void>;
}
