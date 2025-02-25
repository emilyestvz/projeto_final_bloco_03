import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"



function App() {
  

  return (
    <>
      <ToastContainer />
            <Navbar />

            <div className='min-h-[73.5vh]'>
                <Home />
            </div>

            <Footer />
    </>
  )
}

export default App
