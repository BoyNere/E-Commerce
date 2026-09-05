import { useMemo, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/products'

export default function ShopPage() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const visible = useMemo(() => { const selected = category === 'All' ? products : products.filter((product) => product.category === category); return sort === 'price' ? [...selected].sort((a, b) => a.price - b.price) : selected }, [category, sort])
  return <section className="mx-auto max-w-[1440px] px-6 py-12 sm:px-12 lg:px-20"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-zinc-500">Focus Standard / Equipment</p><h1 className="mt-3 text-4xl uppercase sm:text-5xl">All products</h1><div className="mt-9 flex flex-col gap-4 border-y border-zinc-200 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-5 overflow-x-auto">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`shrink-0 text-xs font-bold uppercase tracking-[.1em] ${category === item ? 'text-red-600 underline underline-offset-8' : 'text-zinc-500 hover:text-black'}`}>{item}</button>)}</div><select value={sort} onChange={(event) => setSort(event.target.value)} className="border-0 bg-white py-2 text-xs font-bold uppercase tracking-[.08em] outline-none"><option value="featured">Sort: Featured</option><option value="price">Sort: Price low to high</option></select></div><p className="mt-6 text-xs font-semibold uppercase tracking-[.1em] text-zinc-500">{visible.length} products</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
}