import { faker } from '@faker-js/faker';
import { ICar, IAccidentHistory, IOwnerHistory } from './types';

export const getCars = (size = 8): ICar[] => [...Array(size)].map(() => ({
  vin: faker.vehicle.vrm(),
  year: faker.date.past(20).getFullYear(),
  make: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  price: faker.datatype.number(),
  thumbnail: {
    url: faker.image.transport(),
  },
  photos: [
    { url: faker.image.abstract() },
    { url: faker.image.animals() },
    { url: faker.image.business() },
    { url: faker.image.transport() },
  ],
  ownerHistory: [...Array(4)].map(() => ({
    date: faker.date.past(10).toDateString(),
    details: faker.lorem.words(10),
    owner: faker.name.fullName(),
  } as IOwnerHistory)),
  accidentHistory: [...Array(4)].map(() => ({
    date: faker.date.past(10).toDateString(),
    details: faker.lorem.words(10),
  } as IAccidentHistory)),
}));
