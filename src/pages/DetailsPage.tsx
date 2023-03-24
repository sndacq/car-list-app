import Gallery from '../components/Gallery';
import Timeline from '../components/Timeline';
import { getCars } from '../utils/mocks';

const DetailsPage = () => {
  const cars = getCars(1);
  const {
    photos = [], vin, year, make, model, ownerHistory, accidentHistory,
  } = cars[0];

  return (
    <div className="details-page">
      <Gallery photos={photos} />
      <div className="details-content">
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

  );
};

export default DetailsPage;
