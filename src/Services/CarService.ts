import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';

const carsODM = new CarsODM();
export default class CarService {
  private createCarDomain(data: ICar | null): Car | null {
    if (data) {
      return new Car(data);
    }
    return null;
  }
  
  public async getAll(): Promise<(Car | null)[]> {
    const result = await carsODM.getAll();
    return result.map((car) => this.createCarDomain(car));
  }

  public async getById(id: string): Promise<Car | null> {
    const result = await carsODM.getById(id);
    return this.createCarDomain(result);
  }

  public async create(car: ICar):Promise<Car | null> {
    const result = await carsODM.create(car);
    return this.createCarDomain(result);
  }
}