async function deleteProduct(productId) {
  let res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: 'DELETE',
  })
  return res.json()
}

async function Page({ params }) {
  let deletedProduct = await deleteProduct(params.id)
  console.log(deletedProduct)
  return (
    <main>
      <section>
        <h2>you have deleted this product: </h2>
        <ul>
          <li>ID : {deletedProduct.id}</li>
          <li>Title : {deletedProduct.title}</li>
          <li>Price : {deletedProduct.price}</li>
          <li>Category : {deletedProduct.category}</li>
        </ul>
      </section>
    </main>
  )
}

export default Page
