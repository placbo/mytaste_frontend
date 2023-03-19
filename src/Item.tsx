import { useParams } from 'react-router-dom';

export function Item() {
  const { id } = useParams();

  return <h1>Item: {id}</h1>;
}
