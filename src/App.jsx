import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

export default function App() {
  return <div className="min-h-screen bg-stone-50 text-stone-900"><Navbar /><main><Routes><Route path="/" element={<HomePage />} /><Route path="/shop" element={<ShopPage />} /><Route path="/products/:productId" element={<ProductDetailsPage />} /><Route path="/cart" element={<CartPage />} /><Route path="/checkout" element={<CheckoutPage />} /></Routes></main></div>
}