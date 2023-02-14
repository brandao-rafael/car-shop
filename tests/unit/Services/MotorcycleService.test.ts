import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const INVALID_ID = 'Invalid mongo id';
const MODEL = 'Honda Cb 600f Hornet';

describe('Verify the endpoint /motorcycle', function () {
  it('should be success, when the route /motorcycle/id is passed correctly', async function () {
    const motorcicle: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: MODEL,
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const keyOutput: Motorcycle = new Motorcycle(motorcicle);
    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new MotorcycleService();
    const result = await service.getById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
  
  it('should throw error, when the route /motorcycle/id is passed wrong format', async function () {
    sinon.stub(Model, 'findOne').resolves(INVALID_ID);
    try {
      const service = new MotorcycleService();
      await service.getById('35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }

    sinon.restore();
  });

  it('should have success, when the route /motorcycle is ok', async function () {
    const car: IMotorcycle[] = [{
      id: '634852326b35b59438fbea2f',
      model: MODEL,
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    }];
    sinon.stub(Model, 'find').resolves(car);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(car);

    sinon.restore();
  });

  it('is possible create new car', async function () {
    const car: IMotorcycle = {
      id: '634852326b35b59438fbea2f',
      model: MODEL,
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const keyOutput: Motorcycle = new Motorcycle(car);
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new MotorcycleService();
    const result = await service.create(car);

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
});