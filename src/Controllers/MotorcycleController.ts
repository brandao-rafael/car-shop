import { NextFunction, Request, Response } from 'express';
// import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const car: IMotorcycle = this.req.body;
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  // public async getAll() {
  //   try {
  //     const allMotorcycles = await this.service.getAll();
  //     return this.res.status(200).json(allMotorcycles);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }

  // public async getById() {
  //   const { id } = this.req.params;
  //   try {
  //     if (!isValidObjectId(id)) {
  //       return this.res.status(422).json({ message: 'Invalid mongo id' });
  //     }
  //     const car = await this.service.getById(id);
  //     if (!car) {
  //       return this.res.status(404).json({ message: 'Car not found' });
  //     }
  //     return this.res.status(200).json(car);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }

  // public async update() {
  //   const { id } = this.req.params;
  //   const data = this.req.body;
  //   try {
  //     if (!isValidObjectId(id)) {
  //       return this.res.status(422).json({ message: 'Invalid mongo id' });
  //     }
  //     const updated = await this.service.update(id, data);
  //     if (!updated) {
  //       return this.res.status(404).json({ message: 'Car not found' });
  //     }

  //     return this.res.status(200).json(updated);
  //   } catch (error) {
  //     this.next(error);
  //   }
  // }
}