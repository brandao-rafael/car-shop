import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(data: ICar) {
    this.id = data._id || data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.buyValue = data.buyValue;
    this.doorsQty = data.doorsQty;
    this.seatsQty = data.seatsQty;
    this.status = data.status || false;
  }
}
