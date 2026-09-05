import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => setCartItems((items) => {
    const found = items.find((item) => item.id === product.id)
    return found ? items.map((item) => item.id === product.id ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) } : item) : [...items, { ...product, quantity: 1 }]
  })
  const updateQuantity = (id, quantity) => setCartItems((items) => items.map((item) => item.id === id ? { ...item, quantity: Math.min(Math.max(quantity, 0), item.stock) } : item).filter((item) => item.quantity))
  const removeFromCart = (id) => setCartItems((items) => items.filter((item) => item.id !== id))
  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems])
  return <CartContext.Provider value={{ cartItems, cartCount, subtotal, addToCart, updateQuantity, removeFromCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}