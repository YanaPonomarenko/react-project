import './App.css'
import { type ChangeEvent, useState } from 'react'
import type { ProductType } from "./types/ProductType"

function App() {
  const [product, setProduct] = useState<ProductType>({
    title: "Bread",
    count: 0,
    price: 35,
    is_active: false
  })

  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, title: e.target.value })
  }

  function changePrice(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, price: +e.target.value })
  }

  function changeCount(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, count: +e.target.value })
  }

  function changeIsActive(e: ChangeEvent<HTMLInputElement>) {
    setProduct({ ...product, is_active: e.target.checked })
  }

  return (
      <>
        <h3>Product</h3>
        <p>
          Title: {product.title} | Price: {product.price} | Count: {product.count} | Status: {product.is_active ? "Active" : "Non active"}
        </p>
        <hr />
        Title: <input type="text" value={product.title} onChange={changeTitle} />
        <br />
        Price: <input type="number" value={product.price} onChange={changePrice} />
        <br />
        Count: <input type="number" value={product.count} onChange={changeCount} />
        <br />
        Active: <input type="checkbox" checked={product.is_active} onChange={changeIsActive} />
      </>
  )
}

export default App
