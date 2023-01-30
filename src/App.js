import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='p-3'>
      {/* top header -- fb/react  notification star fork*/}
      <Header />

      {/* nav -- code issues pullr action ..*/}
      <Main />
      {/* Main COntent */}
      {/* main content nav open closed etc */}
      {/* the main issues list with infinite scroll */}
      <Footer />
    </div>
  );
}

export default App;
