import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllItems } from "./api/api.js";

export default function Home() {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    getAllItems()
      .then((result) => {
        setItems(result);
      })
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div>
      <h1>Homepage</h1>
      {items.map((item: any) => (
        <div>{item.title}</div>
      ))}

      <Link to={"/123"}>
        <p>Lenke</p>
      </Link>
    </div>
  );
}
