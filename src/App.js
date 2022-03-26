import "./App.css";
import Products from "./component/Products/Products";
import Question from "./component/Question/Question";

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
      <Question></Question>
    </div>
  );
}

export default App;
