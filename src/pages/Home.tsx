import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { getCars } from '../utils/mocks';

const Home = () => {
  const data = getCars(8);
  return (
    <div className="main">
      <NavBar />
      <div className="content flex flex-wrap px-20 justify-evenly">
        {data.map((item) => <Card data={item} />)}
      </div>
    </div>
  );
};

export default Home;
