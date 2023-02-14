import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(data: IVehicle) {
    this.id = data._id || data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.buyValue = data.buyValue;
    this.status = data.status || false;
  }
}
