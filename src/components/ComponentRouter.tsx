import { Link } from "react-router-dom";
const ComponentRouter = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">test</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <div>ComponentRouter</div>;
    </>
  );
};

export default ComponentRouter;
