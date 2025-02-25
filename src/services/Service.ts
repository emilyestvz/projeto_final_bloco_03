import axios from "axios"

export const api = axios.create({
    baseURL: 'https://farmacia-nest.onrender.com/'
  })

// GETs
export const listar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}


// POST
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// PUT
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados)
  setDados(resposta.data)
}

// DELETE
export const deletar = async (url: string) => {
  await api.delete(url)
}