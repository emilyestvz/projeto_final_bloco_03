import { useEffect, useState } from 'react'
import { DNA } from 'react-loader-spinner'
import Categoria from '../../../models/Categoria'
import { listar } from '../../../services/Service'
import CardCategorias from '../cardcategorias/CardCategorias'
import { ToastAlert } from '../../../utils/ToastAlert'

const ListarCategorias = () => {
	const [categorias, setCategorias] = useState<Categoria[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarCategorias() {
		setIsLoading(true)

		try {
			await listar('/categorias', setCategorias)
		} catch (error: any) {
			ToastAlert('Erro ao listar as Categorias!', 'erro')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		buscarCategorias()
	}, [])

	return (
		<>
			{isLoading && (
				<DNA
				visible={true}
				height='200'
				width='200'
				ariaLabel='dna-loading'
				wrapperStyle={{}}
				wrapperClass='dna-wrapper mx-auto'
				/>
			)}
			<div className='flex justify-center w-full py-8'>
				<div className='container flex flex-col mx-4'>
					{!isLoading && categorias.length === 0 && (
						<span className='my-8 text-3xl text-center'>Nenhuma categoria foi encontrada</span>
					)}

					<div className='flex flex-wrap gap-x-2 gap-y-4 justify-between'>
						{categorias.map((categoria) => (
							<CardCategorias key={categoria.id} categoria={categoria} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarCategorias