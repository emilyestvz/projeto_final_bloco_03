import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlert } from "../../../utils/ToastAlert";

const FormCategorias = () => {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
 
    let navigate = useNavigate();
 
    const { id } = useParams<{ id: string }>();
 
    async function buscarPorId(id: string) {
       await buscar(`/categorias/${id}`, setCategoria);
    }
 
    useEffect(() => {
       if (id !== undefined) {
          buscarPorId(id)
       }
    }, [id])
 
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
       setCategoria({
          ...categoria,
          [e.target.name]: e.target.value
       })
 
       console.log(JSON.stringify(categoria))
    }
 
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
       e.preventDefault()
 
       if (id !== undefined) {
          try {
             await atualizar(`/categorias`, categoria, setCategoria)
 
             ToastAlert('Categoria atualizada com sucesso!', 'sucesso')
             retornar()
 
          } catch (error: any) {
             ToastAlert('Erro ao atualizar o tema!', 'erro')
          }
 
       } else {
          try {
             await cadastrar(`/categorias`, categoria, setCategoria)
 
             ToastAlert('Categoria cadastrada com sucesso!', 'sucesso')
 
          } catch (error: any) {
             ToastAlert('Erro ao cadastrado o Tema', 'erro')
          }
       }
 
       retornar()
    }
 
    function retornar() {
       navigate("/categorias")
    }
 
    return (
       <div className="flex flex-col items-center justify-center bg-emerald-50 min-h-[80vh]">
          <h1 className="text-5xl text-center font-medium py-4">
             {id === undefined ? 'Cadastre Uma Nova Categoria' : 'Editar Categoria'}
          </h1>
 
          <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
             <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição da Categoria</label>
                <input
                   type="text"
                   placeholder="Descrição"
                   name='nome'
                   className="border-2 border-slate-700 rounded p-2"
                   value={categoria.nome}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
             </div>
             <button
                className="rounded text-slate-100 bg-emerald-800 hover:bg-emerald-950 w-1/2 py-4 mx-auto mb-16 block"
                type="submit"
             >
                {id === undefined ? 'Cadastrar' : 'Editar'}
             </button>
          </form>
       </div>
    );
 }
 
 export default FormCategorias;