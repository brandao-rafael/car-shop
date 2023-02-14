import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

const INVALID_MONGO_ID = 'Invalid mongo id';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
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
    const motorcycle: IMotorcycle = this.req.body;
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allMotorcycles = await this.service.getAll();
      return this.res.status(200).json(allMotorcycles);
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
      const motorcycle = await this.service.getById(id);
      
      if (!motorcycle) {
        return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });
      }
      return this.res.status(200).json(motorcycle);
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
        return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });
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
        return this.res.status(404).json({ message: MOTORCYCLE_NOT_FOUND });
      }
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}