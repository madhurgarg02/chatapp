import {  BrowserRouter , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import './App.css';
import Contact from "./components/Contact";

const App = () => {


  return (
    <>
  <Navbar />
    <BrowserRouter>
		<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				
		</BrowserRouter>
    </>
  );
}

export default App;