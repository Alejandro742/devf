import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import Movies from "./components/Movies/Movies";
import Home from "./views/Home";

import "./App.css";
import Header from "./components/Header";

//Redux
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
