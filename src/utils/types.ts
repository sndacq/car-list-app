export interface IPhoto {
  url: string;
  description?: string;
}

export interface IOwnerHistory {
  date: string;
  owner?: string;
  details: string;
}

export interface IAccidentHistory extends IOwnerHistory {}

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
