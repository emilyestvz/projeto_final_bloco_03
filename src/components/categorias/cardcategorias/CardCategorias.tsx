
import { Pencil, Trash } from '@phosphor-icons/react';
import Categoria from '../../../models/Categoria';
import { Link } from 'react-router-dom';

interface CardCategoriaProps {
    categoria: Categoria;
}

const CardCategorias = ({ categoria }: CardCategoriaProps) =>{
    
    return (
        <div className='flex flex-col size-80 m-2 bg-white border rounded'>
            <header className='bg-gradient-to-b from-emerald-800 to-emerald-600 px-6 py-2 font-bold text-2xl text-white '>
                Categorias
            </header>

            <p className='bg-white p-8 h-full text-3xl'>
                {categoria.nome}
            </p>

            <div className='flex justify-center items-center gap-2 bg-gradient-to-b from-emerald-800 to-emerald-600 p-2'>
                <Link to={`/editarcategoria/${categoria.id}`} aria-label={`Editar ${categoria.nome}`}>
                    <Pencil size={28} color='white' className='mr-1 hover:fill-cyan-400' />
                </Link>
                
                <Link to={`/deletarcategoria/${categoria.id}`} aria-label={`Deletar ${categoria.nome}`}>
                    <Trash size={28} color='white' className='mr-1 hover:fill-red-400' />
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;