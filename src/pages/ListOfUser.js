import ListCard from "../components/ListCard"
import { getUserFromApi } from "../utils/Api"

const ListOfUser = async (firstParam, secondParam) => {
  const res = await getUserFromApi()
  const data = res.map((element) => ({
    text: `${element.name} ${element.species}`,
    src: element.image
  }))

  console.log('list card')
  console.log(ListCard)
  return ListCard(data)
}

export default ListOfUser