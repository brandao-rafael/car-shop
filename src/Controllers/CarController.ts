import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';
export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allCars = await this.service.getAll();
      return this.res.status(200).json(allCars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: INVALID_MONGO_ID });
      }
      const car = await this.service.getById(id);
      if (!car) {
        return this.res.status(404).json({ message: CAR_NOT_FOUND });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const data = this.req.body;
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: INVALID_MONGO_ID });
      }
      const updated = await this.service.update(id, data);
      if (!updated) {
        return this.res.status(404).json({ message: CAR_NOT_FOUND });
      }

      return this.res.status(200).json(updated);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: INVALID_MONGO_ID });
      }

      const deleted = await this.service.delete(id);
      if (!deleted) {
        return this.res.status(404).json({ message: CAR_NOT_FOUND });
      }
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}