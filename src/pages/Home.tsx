import Card from '../components/Card';
import { getCars } from '../utils/mocks';

const Home = () => {
  const cars = getCars();
  return (
    <div className="main">
      <div className="content flex flex-wrap px-20 justify-evenly">
        {cars.map((item) => <Card data={item} />)}
      </div>
    </div>
  );
};

export default Home;
