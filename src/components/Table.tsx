import { useEffect, useState } from 'react';
import { StyledTable, TableRow, TableCell } from './styles';

interface Post {
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const data: [] = await (
          await fetch('https://api.spacexdata.com/v3/rockets')
        ).json();

        setPosts(data);
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
      {posts.map((post: Post) => (
        <TableRow key={post.id}>
          <TableCell>{post.rocket_name}</TableCell>
          <TableCell>{post.diameter.meters}</TableCell>
          <TableCell>{post.height.meters}</TableCell>
          <TableCell>{post.mass.kg}</TableCell>
          <TableCell>{post.cost_per_launch}</TableCell>
        </TableRow>
      ))}
    </StyledTable>
  );
};

export default Table;
