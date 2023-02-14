import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

const motorcycleODM = new MotorcycleODM();
export default class CarService {
  private createCarDomain(data: IMotorcycle | null): Motorcycle | null {
    if (data) {
      return new Motorcycle(data);
    }
    return null;
  }
  
  public async getAll(): Promise<(Motorcycle | null)[]> {
    const result = await motorcycleODM.getAll();
    return result.map((bike) => this.createCarDomain(bike));
  }

  public async getById(id: string): Promise<Motorcycle | null> {
    const result = await motorcycleODM.getById(id);
    return this.createCarDomain(result);
  }

  public async create(bike: IMotorcycle):Promise<Motorcycle | null> {
    const result = await motorcycleODM.create(bike);
    return this.createCarDomain(result);
  }

  public async update(id: string, obj: IMotorcycle): Promise<Motorcycle | null> {
    const updated = await motorcycleODM.update(id, obj);
    return this.createCarDomain(updated);
  } 

  public async delete(id: string): Promise<IMotorcycle | null> {
    const deleted = await motorcycleODM.delete(id);
    if (!deleted) return null;
    return deleted;
  }
}