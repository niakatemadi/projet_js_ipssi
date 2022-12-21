import ListCard from './src/components/ListCard'


const fetchDataFromAPI = async () => {

  const req = await fetch('https://reqres.in/api/users')
  const res = await req.json()

  console.log(res.data)

  const data = res.data.map((element) => ({
    text: `${element.first_name} ${element.last_name}`,
    src: element.avatar
  }))

  document.querySelector('#app').appendChild(
    ListCard(data)
  )


}

fetchDataFromAPI()
