import "./App.css";
import Header from "./Components/Header";
import BlockH from "./Components/BlockH";
import { Modal } from "./Components/Modal";
import { ModalTwo } from "./Components/ModalTwo";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";

function App() {
  const color = useSelector((state) => state.changeBackground);
  console.log(color);
  return (
    <div className="App">
      <div className={`container-${color}`}>
        <Header />
        <BlockH />
      </div>
      {/* <text part> */}
      <Footer />

      {/* <ModalTwo/> */}
    </div>
  );
}

export default App;
