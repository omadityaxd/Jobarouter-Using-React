import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <div>
      <h2>Page Not Found !!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        fugiat soluta? Voluptate fugit ullam, est quidem libero voluptatem non
        labore, repellat optio corrupti architecto molestias accusamus.
        Temporibus itaque perferendis at!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
