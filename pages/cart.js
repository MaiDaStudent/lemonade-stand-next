import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * 5,
    0
  ); // 5 kr pr drink

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Din Kurv</h1>

      {cartItems.length === 0 ? (
        <p>Kurven er tom.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.idDrink}
              className="flex items-center gap-4 border-b pb-2"
            >
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.strDrink}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.idDrink))
                    }
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.idDrink))
                    }
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(removeFromCart(item.idDrink))
                    }
                    className="ml-4 text-red-500"
                  >
                    Fjern
                  </button>
                </div>
              </div>
              <div>{item.quantity * 5} kr</div>
            </div>
          ))}

          <div className="mt-4 font-bold">Total: {total} kr</div>
        </div>
      )}
    </div>
  );
}