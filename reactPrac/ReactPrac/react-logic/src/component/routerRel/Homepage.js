import { Link, useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  const gotopro = () => {
    navigate("/product");
  };
  return (
    <>
      <h1>Homepage</h1>
      <Link to="/product">Product</Link>
      <div className="my-2">
        <button className="btn btn-outline-primary" onClick={gotopro}>
          go to Product
        </button>
      </div>
    </>
  );
}
