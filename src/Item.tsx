import { useParams } from "react-router-dom";
export default function BlogDetails() {
  const { id } = useParams();

  return <h1>Item: {id}</h1>;
}
