import { faker } from '@faker-js/faker';
import { ICar } from './types';

export const getCars = (size = 10): ICar[] => [...Array(size)].map(() => ({
  vin: faker.vehicle.vrm(),
  year: faker.date.past().getFullYear(),
  make: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  price: faker.datatype.number(),
  thumbnail: {
    url: faker.image.transport(),
  },
  photos: [],
}));

export default getCars;
