import ListCard from "../components/ListCard"
import {getInputData} from '../../main.js'
import { getUserSearchedFromApi } from "../utils/Api"
import { Form } from "../components/Form"

const ListOfUserSearched = async (firstParam, secondParam) => {
    console.log(firstParam)
  const res = await getUserSearchedFromApi(firstParam)
  console.log(res.results)
  const data = res.results.map((element) => ({
    text: `${element.name} ${element.species}`,
    src: element.image
  }))

    const count = res.info.count;
    console.log(count);

    const nbreOfResults = document.createElement('h3');
    nbreOfResults.textContent=`${count}: résultats`;


    const element=document.createElement('div');
    element.className='bloc_list_card';
    element.appendChild(nbreOfResults)
    element.appendChild(ListCard(data))

      const form = Form()
      const app = document.querySelector('.bloc_search')
      app.appendChild(form);

       
       const searchButton = document.querySelector('.search_button')
       searchButton.addEventListener('click',getInputData)
       
  return element
}

export default ListOfUserSearched