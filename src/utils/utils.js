import { MD5 } from "crypto-js"

const API_URL = process.env.NEXT_PUBLIC_REACT_APP_URL
const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString()
}

const fetchCharacters = async (value) => {
  const baseUrl = `${API_URL}/characters`
  const publicKey = process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_REACT_APP_PRIVATE_KEY
  let ts = Date.now().toString()
  let hash = getHash(ts, privateKey, publicKey)
  let offset = Math.floor(Math.random() * (1562 - 20))
  let url = ""

  if (value === "") {
    // url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=8`
    url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=8`
  } else {
    url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}&limit=8`
  }

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const fetchCharacterComicsById = async (id) => {
  const baseUrl = `${API_URL}/characters/${id}/comics`
  const publicKey = process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_REACT_APP_PRIVATE_KEY
  let ts = Date.now().toString()
  let hash = getHash(ts, privateKey, publicKey)
  let url = ""

  url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const fetchComicById = async (id) => {
  const baseUrl = `${API_URL}/comics/${id}`
  const publicKey = process.env.NEXT_PUBLIC_REACT_APP_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_REACT_APP_PRIVATE_KEY
  let ts = Date.now().toString()
  let hash = getHash(ts, privateKey, publicKey)
  let url = ""

  url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export { fetchCharacters, fetchCharacterComicsById, fetchComicById }
