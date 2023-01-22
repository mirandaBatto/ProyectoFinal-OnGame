import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
    <Navbar/>
    <ItemCount valorInicial={0} stock={10} />
    </>
  );
}

export default App;
