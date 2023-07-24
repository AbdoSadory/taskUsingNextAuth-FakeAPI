import Link from 'next/link'
async function getData(productID) {
  let res = await fetch(`https://fakestoreapi.com/products/${productID}`)
  return res.json()
}
export default async function Page({ params }) {
  let product = await getData(params.id)

  return (
    <main>
      <Link href={`/products`} className="navLink">
        Products
      </Link>
      <section key={product.id} className="productCard">
        <h2>{product.title}</h2>
        <p>
          price : <span>{product.price}</span>
        </p>
        <p>{product.description}</p>
        <p>category: {product.category}</p>
        <p>rating: {product.rating.rate}</p>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
      </section>
      <Link
        href={`/products/productDetails/${params.id}/edit`}
        className="link"
      >
        <h2>
          Edit Product <span>-&gt;</span>
        </h2>
      </Link>
    </main>
  )
}
