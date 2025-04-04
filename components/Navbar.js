import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          🍋 Lemonade Stand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                🏠 Hjem
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className="nav-link">
                🛒 Butik
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" className="nav-link">
                🧺 Kurv ({totalQuantity})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}