interface IPhoto {
  url: string;
  description?: string;
}

interface IOwnerHistory {
  date: string;
  details: string;
}

interface IAccidentHistory extends IOwnerHistory {}

export interface ICar {
  vin: string;
  year: number;
  make: string;
  model: string;
  price: number;
  thumbnail?: IPhoto;
  photos?: IPhoto[];
  ownerHistory?: IOwnerHistory[];
  accidentHistory?: IAccidentHistory[];
}
