
export const getUserSearchedFromApi = async (status) => {
  const req = await fetch(`https://rickandmortyapi.com/api/character/?name=${status}`)
  const res = await req.json()
  console.log('inside user api get')
  console.log(res)


  return res
}

export const getUserFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character/1,183,2,4,8')
  const res = await req.json()
  console.log('inside user api get')
  console.log(res)

  return res
}

export const getPostFromApi = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await req.json()

  return res
}