import "./App.css";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import SideNav from "./components/SideNav.jsx";
import Skills from "./components/Skills.jsx";
import Resume from "./components/Resume.jsx";
import ListMenu from "./components/menu.jsx";
import Portfolio from "./components/Portfolio.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Services from "./components/services.jsx";
const App = () => {
  return (
    <>
      <SideNav />
      <Home />
      <About />
      <Skills />
      <Resume />
      <ListMenu />
      <Portfolio />
      <Services />
      <BackToTop />
  </>
  );
};

export default App;
