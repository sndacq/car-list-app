import { FC } from 'react';
import { useParams } from 'react-router-dom';

import Gallery from '../components/Gallery';
import Timeline from '../components/Timeline';
import NoPage from './NoPage';

import { ICar } from '../utils/types';

interface IDetailsPageProps {
  data: ICar[]
}

const DetailsPage:FC<IDetailsPageProps> = ({ data }) => {
  const { id } = useParams();
  const carDetails = data.find((item) => item.vin === id);
  const {
    photos = [], vin, year, make, model, ownerHistory, accidentHistory,
  } = carDetails || {} as ICar;

  return carDetails ? (
    <div className="details-page">
      <Gallery photos={photos} />
      <div className="details-content p-5">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {`${year} ${make} ${model}`}
        </h1>
        <h1 className="text-l text-gray-500 dark:text-white">
          {vin}
        </h1>
        <div className="owner-history">
          <h1 className="text-md font-semibold text-gray-900 dark:text-white">
            Owner History
          </h1>
          <Timeline data={ownerHistory || []} />
        </div>
        <div className="accident-history">
          <h1 className="text-md font-semibold text-gray-900 dark:text-white">
            Accident History
          </h1>
          <Timeline data={accidentHistory || []} />
        </div>
        <div />
      </div>
    </div>
  ) : (
    <NoPage />
  );
};

export default DetailsPage;
