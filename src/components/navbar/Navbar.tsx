import { Pill, ShoppingCart, SignOut } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
      <>
      <div className='bg-white/[0.98] text-cyan-900 flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-gray-400'>
         
         {/* Logo */}
         <a href='/' className='flex items-center space-x-2 hover:text-cyan-700'>
           <Pill className='w-8 h-8' />
           <span className='font-medium text-xl'>FarmDay</span>
         </a>

         {/* Barra de busca */}
         <input
           type='text'
           placeholder='Procurar...'
          className=' text-gray-400 hidden w-3xl mx- md:block border
           border-gray-300 rounded px-4 py-2 text-sm focus:outline-none
           focus:ring-purple-500 '
         />

        {/* Botões e menu */}
        <div className='flex gap-4'>
          <a href='/categorias'>Categorias</a>
          <a href='/produtos'>Produtos</a>
          <a href='/produtos'>Delivery</a>
          <a href='/carrinho' className='px-4 py- text-sm hover:text-cyan-700'>
            <ShoppingCart size={30} />
          </a>
          <a href='/sair' className='px-4 py- text-sm hover:text-cyan-700'>
            <SignOut size={30} />
          </a>
        </div>
       </div>
      </>
    )
}

export default Navbar