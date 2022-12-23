import ListPost from "../components/ListPost"
import { getPostFromApi } from "../utils/Api"

const ListOfPost = async (firstParam, secondParam) => {
  console.log('inside list of post')
  const res = await getPostFromApi()
  return ListPost(res)
}

export default ListOfPost