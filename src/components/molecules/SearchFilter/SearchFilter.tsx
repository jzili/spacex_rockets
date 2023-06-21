import { useState, useEffect } from 'react';
import Table from '../../atoms/Table';
import Input from '../../atoms/Input';

interface Rocket {
  id: number;
  rocket_name: string;
  diameter: {
    meters: number;
  };
  height: {
    meters: number;
  };
  mass: {
    kg: number;
  };
  cost_per_launch: number;
  [key: string]: any;
}

function SearchFilter() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/rockets');
        const data: Rocket[] = await response.json();
        setRockets(data);
        setFilteredRockets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  const handleFilter = (query: string) => {
    const keys = ['rocket_name', 'diameter'];
    const filteredRockets = rockets.filter((rocket) =>
      keys.some((key) => {
        const value = rocket[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    );
    setFilteredRockets(filteredRockets);
    console.log(filteredRockets);
  };

  return (
    <>
      <Input onFilter={handleFilter} />
      <Table
        data={filteredRockets.map((rocket) => ({ ...rocket, key: rocket.id }))}
      />
    </>
  );
}

export default SearchFilter;
