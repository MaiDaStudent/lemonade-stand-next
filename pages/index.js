import { useSelector, useDispatch } from "react-redux";
import { sellLemonade, buyLemons } from "../redux/profitSlice";

export default function Home() {
  const profit = useSelector((state) => state.profit);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>🍋 Lemonade Stand</h1>
      <h2>Profit: ${profit}</h2>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => dispatch(sellLemonade())}>Sælg Lemonade (+5 kr)</button>
        <button onClick={() => dispatch(buyLemons())} style={{ marginLeft: "1rem" }}>
          Køb Citroner (-2 kr)
        </button>
      </div>
    </div>
  );
}