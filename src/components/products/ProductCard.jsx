import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return <article className="group"><Link to={`/products/${product.id}`} className="block overflow-hidden bg-zinc-100"><img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" /></Link><div className="pt-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-zinc-500">{product.category}</p><div className="mt-1 flex items-start justify-between gap-2"><Link to={`/products/${product.id}`} className="font-semibold hover:text-red-600">{product.name}</Link><span className="shrink-0 text-sm font-semibold">${product.price.toLocaleString()}</span></div><button type="button" onClick={() => addToCart(product)} className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-black px-3 py-3 text-xs font-bold uppercase tracking-[.1em] text-white transition hover:bg-red-600"><ShoppingBag size={15} />Add to cart</button></div></article>
}