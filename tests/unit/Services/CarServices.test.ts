import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const INVALID_ID = 'Invalid mongo id';

describe('Verify the endpoint /cars', function () {
  it('should be success, when the route /cars/id is passed correctly', async function () {
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const keyOutput: Car = new Car(car);
    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new CarService();
    const result = await service.getById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
  
  it('should throw error, when the route /cars/id is passed in wrong format', async function () {
    sinon.stub(Model, 'findOne').resolves(INVALID_ID);
    try {
      const service = new CarService();
      await service.getById('35b59438fbea2f');
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }

    sinon.restore();
  });

  it('should have success, when the route /cars is ok', async function () {
    const car: ICar[] = [{
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    }];
    sinon.stub(Model, 'find').resolves(car);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(car);

    sinon.restore();
  });

  it('is possible create new car', async function () {
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const keyOutput: Car = new Car(car);
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new CarService();
    const result = await service.create(car);

    expect(result).to.be.deep.equal(keyOutput);

    sinon.restore();
  });
});