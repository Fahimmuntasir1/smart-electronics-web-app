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
      <footer>
        <div>
          <h1>QNA</h1>
          <p>1.How React Works?</p>
          <p>ans:- React is  javascript library. React is commonly used to create user interfaces.React is more commonly used to create single-page applications. React uses a decleartive paradism that makes it easier to reason about your application and aims to be both efficient and flexible. it creats a simple views for each state in your application.and react will efficiently update and render just rite componenet when your data changes.This makes it predictable and easy to debuging</p>
          <p>1.Difference of Props VS State</p>
          <p>ans:- There ;are many difference between props and state . props are read only, but state can be asynchronously.Props allow you to passing data from one component to other components but state hold information about other components. props are alwyes immutable but state is muatable. props are use to commounicate between components but state can be use for rendering dynamic chaange with the component . Props make components reuseable and state can't make components reuseable</p>
          <p>1.How Usestate Works?</p>
          <p>ans:- </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
