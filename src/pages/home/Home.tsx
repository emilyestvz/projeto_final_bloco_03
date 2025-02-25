import ListarCategorias from '../../components/categorias/listarcategorias/ListarCategorias';

const Home = () => {

    return (
      <>
       {/* Banner/Background */}
      <div className='flex justify-center backgroundImg py-4 min-h-screen '>
        <div className='container flex justify-center text-gray-100'>
          <div className='flex flex-col justify-center items-center'>
            
            <p className='text-xl'>Bem vindo(a)</p>
            <h1 className='fontStyle text-5xl font-bold'>FarmDay!</h1>

            <p className='text-lg'>Os melhores produtos, medicamentos e preços você encontra aqui.</p>
          </div>
        </div>
      </div>

      <div className=' '>
         <ListarCategorias /> 
      </div>
      </>
    );
  };
  
export default Home;

  