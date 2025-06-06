import "./App.css";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import SideNav from "./components/SideNav.jsx";
import Skills from "./components/Skills.jsx";
const App = () => {
  return (
    <>
      <SideNav />
      <Home />
      <About />
      <Skills />
    </>
  );
};

export default App;
