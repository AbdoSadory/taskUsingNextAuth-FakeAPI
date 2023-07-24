import Link from 'next/link'
async function getData() {
  let res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}
async function Page() {
  let products = await getData()

  return (
    <main>
      <Link href={`/`} className="navLink">
        Home
      </Link>
      {products && products.length ? (
        products.map((product) => {
          return (
            <div key={product.id} className="productCard">
              <h2>{product.title}</h2>
              <p>category: {product.category}</p>
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div>
                <Link
                  href={`/products/productDetails/${product.id}`}
                  className="moreDetailsBtn"
                >
                  More Details
                </Link>
                <Link
                  href={`/products/deleteProduct/${product.id}`}
                  className="deleteBtn"
                >
                  Delete
                </Link>
              </div>
            </div>
          )
        })
      ) : (
        <p>No products</p>
      )}
    </main>
  )
}

export default Page
