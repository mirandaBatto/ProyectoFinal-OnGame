import { useState } from "react"

const ItemCount = ({valorInicial, stock}) => {
    const [valor, setValor] = useState(valorInicial)

    const restar = ()=> { (valor > valorInicial) && setValor(valor - 1) }
    const sumar = ()=> {(valor < stock) && setValor(valor + 1)}
  return (
    <div className="flex flex-row gap-3 items-center">
    <button onClick={restar} className="bg-violet-600 p-2 m-2 rounded">-</button>
    <p>{valor}</p>
    <button onClick={sumar} className="bg-violet-600 p-2 m-2 rounded">+</button>
    </div>
  )
}

export default ItemCount