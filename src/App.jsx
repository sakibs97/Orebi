import RootLayout from "./components/layout/RootLayout"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Singup from "./pages/Singup"
import MyAccount from "./pages/MyAccount"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/products" element={<Products />}></Route>
    <Route path="/products/:id" element={<ProductDetails />}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/singup" element={<Singup/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
  </Route>
))

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
