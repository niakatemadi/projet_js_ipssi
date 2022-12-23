import ListCard from "../components/ListCard"
import {getInputData} from '../../main.js'
import { getUserSearchedFromApi } from "../utils/Api"

const ListOfUserSearched = async (firstParam, secondParam) => {
    console.log(firstParam)
  const res = await getUserSearchedFromApi(firstParam)
  console.log(res.results)
  const data = res.results.map((element) => ({
    text: `${element.name} ${element.species}`,
    src: element.image
  }))

    const element=document.createElement('div');
    element.className='bloc_list_card';
    element.appendChild(ListCard(data))

    
      
      const form = document.createElement('form')

      const button = document.createElement('div')
      button.setAttribute('class','search_button')
      button.style.width='150px'
      button.style.height='25px'
      button.style.backgroundColor='green'
      button.type='submit'
      button.textContent='Rechercher'

      const input = document.createElement('input')
      input.setAttribute('id','search_bar')
      

      form.appendChild(input)
      form.appendChild(button)

      const app = document.querySelector('.bloc_search')
      app.appendChild(form);

       
       const searchButton = document.querySelector('.search_button')
       searchButton.addEventListener('click',getInputData)
       

  return element
}

export default ListOfUserSearched