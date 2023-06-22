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
  [key: string | number]: any;
}

function SearchFilter() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<Rocket[]>([]);

  const [searchResults, setSearchResults] = useState<number | null>(null);

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

  const filterRockets = (query: string) => {
    const keys = [
      'rocket_name',
      'diameter',
      'height',
      'mass',
      'cost_per_launch',
    ];
    const filteredRockets = rockets.filter((rocket) =>
      keys.some((key) => {
        const value = rocket[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(query.toLowerCase());
        } else if (typeof value === 'object' && value !== null) {
          return Object.values(value).some((val: any) =>
            val.toString().toLowerCase().includes(query.toLowerCase())
          );
        } else if (typeof value === 'number') {
          return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    );
    setFilteredRockets(filteredRockets);
    setSearchResults(filteredRockets.length);
  };

  return (
    <>
      <Input onFilter={filterRockets} searchResults={searchResults} />
      <Table data={filteredRockets} />
    </>
  );
}

export default SearchFilter;
