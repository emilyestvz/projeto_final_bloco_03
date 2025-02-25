import styles from "./Home.css"; 

const Home = () => {

    return (
      <>
       {/* Banner/Background */}
      <div className='flex justify-center backgroundImg py-4 min-h-screen '>
        <div className="container flex justify-center text-gray-100">
          <div className="flex flex-col justify-center items-center gap-4 py-4">
            <h1 className="text-5xl font-bold">
              Bem-vindo a FarmDay!
            </h1>

            <p className="text-lg">
              Os melhores produtos, medicamentos e preços você encontra aqui.
            </p>

            <div className="flex justify-around gap-4">
              <div className='flex justify-around gap-4'>
                {/* <ModalPost /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Produtos */}
      <div className="mt-20 container mx-auto px-6">
        {/* <ListaPost /> */}
      </div>
      </>
    );
  };
  
export default Home;

  