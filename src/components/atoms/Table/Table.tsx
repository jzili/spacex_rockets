import { useEffect, useState } from 'react';
import {
  StyledTable,
  TableHeader,
  TableRow,
  TableCell,
  StyledMessage,
} from './styles';

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
}

interface TableProps {
  data: Rocket[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(false);
    if (error) setError('Error...');
  }, [error]);

  if (data.length === 0) {
    return (
      <StyledMessage>
        <p>No results...</p>
      </StyledMessage>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
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
        {data.map((item: Rocket) => (
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
