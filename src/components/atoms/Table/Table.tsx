import { useEffect, useState } from 'react';
import { StyledTable, TableHeader, TableRow, TableCell } from './styles';

interface Item {
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
}

const Table = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const data: [] = await (
          await fetch('https://api.spacexdata.com/v3/rockets')
        ).json();

        setItems(data);
        setLoading(false);
      } catch (error) {
        setError('Error...');
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    <p>{error}</p>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Rocket name</TableHeader>
          <TableHeader>Diameter</TableHeader>
          <TableHeader>Height</TableHeader>
          <TableHeader>Mass</TableHeader>
          <TableHeader>Cost per launch</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map((item: Item) => (
          <TableRow key={item.id}>
            <TableCell>{item.rocket_name}</TableCell>
            <TableCell>{item.diameter.meters + 'm'}</TableCell>
            <TableCell>{item.height.meters + 'm'}</TableCell>
            <TableCell>{item.mass.kg + 'kg'}</TableCell>
            <TableCell>{'$' + item.cost_per_launch}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
