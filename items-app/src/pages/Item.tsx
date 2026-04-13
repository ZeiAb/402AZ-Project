import { useParams } from "react-router-dom";
export default function Item() {

  const { id } = useParams()

  return (
    <div>
      <h1>Item Page</h1>
      <p>Viewing item with ID: {id}</p>
    </div>
  );
}