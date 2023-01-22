import CartWidget from "../CartWidget/CartWidget"
import Greeting from "../Greeting/Greeting"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Navbar = () => {
  return (
    <div className="flex flex-row h-20 justify-between px-4 bg-gray-200 items-center">
      <h1 className="text-3xl text-violet-600 font-bold md:inline-block">On Game</h1>
      <Greeting mensaje="Buenos Días!"/>
      <div className="flex flex-row gap-5 items-center">  
      <ItemListContainer/>
      <CartWidget cantCarrito={1}/>
      </div>
    </div>
    )
}

export default Navbar