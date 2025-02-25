import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import FormCategorias from "./components/categorias/formcategoria/FormCategorias"
import DeletarCategorias from "./components/categorias/deletarcategorias/DeletarCategorias"
import { Routes, Route } from "react-router-dom"



function App() {
  

  return (
    <>
      <ToastContainer />
            <Navbar />

            <div className='min-h-[73.5vh]'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path="/categorias" element={<ListarCategorias />} />
                <Route path="/cadastrarcategoria" element={<FormCategorias />} />
                <Route path="/editarcategoria/:id" element={<FormCategorias />} />
                <Route path="/deletarcategoria/:id" element={<DeletarCategorias />} />
              </Routes>
                
            </div>

            <Footer />
    </>
  )
}

export default App
