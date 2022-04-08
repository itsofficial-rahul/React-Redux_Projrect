import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Component/cakeContainer";
import Store from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Redux</h1>
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
