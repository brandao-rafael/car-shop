import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(data: IMotorcycle) {
    super(data);
    this.category = data.category;
    this.engineCapacity = data.engineCapacity;
  }
}