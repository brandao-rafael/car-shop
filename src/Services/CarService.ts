import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private createCarDomain(data: ICar | null): Car | null {
    if (data) {
      return new Car(data);
    }
    return null;
  }

  public async create(car: ICar):Promise<Car | null> {
    const carsODM = new CarsODM();
    const result = await carsODM.create(car);
    return this.createCarDomain(result);
  }
}