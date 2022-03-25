import "./App.css";
import Products from "./component/Products/Products";

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "#FF6E14",
    padding: "10px",
    fontFamily: "Arial",
  };
  return (
    <div className="App">
      <h1 style={mystyle}>Smart Electronics</h1>
      <Products></Products>
    </div>
  );
}

export default App;
