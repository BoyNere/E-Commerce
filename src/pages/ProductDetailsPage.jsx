import { ShoppingBag } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function ProductDetailsPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const product = products.find((item) => item.id === productId)
  if (!product) return <section className="mx-auto max-w-7xl px-4 py-24 text-center"><h1 className="text-4xl">Product not found.</h1><Link to="/shop" className="mt-7 inline-block bg-stone-900 px-5 py-3 font-bold text-white">Return to shop</Link></section>
  return <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"><Link to="/shop" className="text-sm font-semibold underline underline-offset-4">Back to shop</Link><div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover" /><div className="lg:pt-6"><p className="text-sm font-bold uppercase tracking-[.14em] text-emerald-700">{product.category}</p><h1 className="mt-3 text-4xl sm:text-5xl">{product.name}</h1><p className="mt-5 text-2xl font-semibold">${product.price.toFixed(2)}</p><p className={`mt-5 text-sm font-bold ${product.stock ? 'text-emerald-700' : 'text-red-700'}`}>{product.stock ? `${product.stock} in stock` : 'Out of stock'}</p><p className="mt-6 max-w-xl leading-7 text-stone-600">{product.description}</p><button type="button" onClick={() => addToCart(product)} disabled={!product.stock} className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-stone-900 px-5 py-4 font-bold text-white hover:bg-emerald-800 disabled:bg-stone-400 sm:w-auto"><ShoppingBag size={18} />Add to cart</button></div></div></section>
}