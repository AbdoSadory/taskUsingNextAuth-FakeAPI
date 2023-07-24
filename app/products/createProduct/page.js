'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productCategory, setProductCategory] = useState('electronics')
  const [isLoading, setIsLoading] = useState(false)
  const [createStatus, setCreateStatus] = useState(false)
  const fileValidationRegEx = /\.jpg|\.png|\.webp|\.jfif$/gi
  const productNameValidation = () => {
    if (productName.length >= 3) {
      return true
    } else {
      return false
    }
  }
  const productPriceValidation = () => {
    if (productPrice > 0 && !isNaN(productPrice)) {
      return true
    } else {
      return false
    }
  }
  const productDescriptionValidation = () => {
    if (productDescription.length >= 50) {
      return true
    } else {
      return false
    }
  }
  const productImageValidation = () => {
    if (
      productImage.match(fileValidationRegEx) &&
      productImage.match(fileValidationRegEx).length
    ) {
      return true
    } else {
      return false
    }
  }
  const productCategoryValidation = () => {
    if (productCategory.length) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      productNameValidation() &&
      productPriceValidation() &&
      productDescriptionValidation() &&
      productImageValidation() &&
      productCategoryValidation()
    ) {
      setIsLoading(true)
      await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          title: productName,
          price: productPrice,
          description: productDescription,
          image: productImage,
          category: productCategory,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            setCreateStatus(true)
            setIsLoading(false)
            throw new Error('faild to add product')
          }
          return res.json()
        })
        .then((data) => {
          setCreateStatus(false)
          setIsLoading(false)
          console.log(data)
        })
        .catch((err) => console.log(err.message))
    } else {
      setCreateStatus(true)
    }
  }
  return (
    <main>
      <Link href={`/`} className="navLink">
        Home
      </Link>
      <h2 className="title">Add Product To Our Store</h2>
      <section className="addProductFormContainer">
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <div className="inputContainer">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="number"
              name="price"
              placeholder="Product price"
              min="0"
              step="0.01"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <input
              type="file"
              name="image"
              placeholder="Image"
              accept="image/*"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </div>
          <div className="inputContainer selectContainer">
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
          <button type="submit">{isLoading ? 'loading' : 'Add Product'}</button>
        </form>
      </section>
      {createStatus ? <p>Please Add Correct Values</p> : ''}
    </main>
  )
}
