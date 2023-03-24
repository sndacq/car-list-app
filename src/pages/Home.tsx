import { FC, useEffect, useState } from 'react';
import Card from '../components/Card';
import Paginate from '../components/Paginate';
import { ICar } from '../utils/types';

interface IHomeProps {
  data: ICar[];
  searchTerm: string;
}

const Home:FC<IHomeProps> = ({ data, searchTerm }) => {
  const [filteredList, setFilteredList] = useState([] as ICar[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredList.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const searched = data.filter((item) => {
        const {
          year, make, model, vin,
        } = item;
        const carString = `${vin} ${year} ${make} ${model}`;
        return carString.toUpperCase().includes(searchTerm.toUpperCase());
      });
      setFilteredList(searched);
    } else setFilteredList(data);
  }, [searchTerm, data, currentPage]);

  return (
    <div className="main">
      <div className="content flex flex-wrap px-20 justify-evenly">
        {currentItems.map((item) => <Card data={item} />)}
      </div>
      <Paginate
        itemsPerPage={itemsPerPage}
        totalItems={filteredList.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default Home;
