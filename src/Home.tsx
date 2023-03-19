import { Link, useParams } from "react-router-dom";
export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Homepage</h1>
      <Link to={"/123"}>
        <p>Lenke</p>
      </Link>
    </div>
  );
}
