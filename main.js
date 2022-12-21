import ListCard from './src/components/ListCard'
import { getUserFromApi } from './src/utils/Api'


const fetchDataFromAPI = async () => {

  const res = await getUserFromApi()

  const data = res.map((element) => ({
    text: `${element.first_name} ${element.last_name}`,
    src: element.avatar
  }))

  document.querySelector('#app').appendChild(
    ListCard(data)
  )
}

fetchDataFromAPI()
