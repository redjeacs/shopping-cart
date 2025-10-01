import { Link } from "react-router";

function Nav() {
  return (
    <header>
      <div className="left">
        <div className="logo">Logo</div>
        <div className="shopLinks">
          <Link to="shop">Shop</Link>
        </div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="cart">Cart</Link>
      </div>
    </header>
  );
}

export default Nav;
