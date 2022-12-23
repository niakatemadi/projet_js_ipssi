import ListOfPost from './src/pages/ListOfPost'
import ListOfUser from './src/pages/ListOfUser'
import ListOfUserSearched from './src/pages/ListOfUserSearched'
import TabManager from './src/utils/TabManager'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfUser,
    params: [1, 'hello']
  },
  page2: {
    component: ListOfPost,
    params: ['https://jsonplaceholder.typicode.com/posts','dima']
  },
  page3: {
    component: ListOfUserSearched,
    params : ['rick']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {

    const app = document.querySelector('.bloc_search')
    app.innerHTML=''

    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

// Cette fonction permet de récupérer la valeur de l'input recherche
// De plus, elle affiche la page avec ce nouveau paramètre 
export const getInputData = (event) => {
  event.preventDefault()
  
  const inputData = document.querySelector('#search_bar').value 

  // Modifie le paramètre envoyé à la page3
  tabManager.componentMapping.page3.params[0] =inputData

  const element = document.querySelector('[data-tabId2]')
  tabManager.openTabById(element.getAttribute('data-tabId2'))

  const app = document.querySelector('.bloc_search')
    app.innerHTML=''
}

tabManager.openTabById('page1')
