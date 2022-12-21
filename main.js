import sayHello from './sayHello'
import Card from './src/components/Card'
import ListCard from './src/components/ListCard'


const arrayOfElement = [
  {
    text: 'Hello',
    src: 'https://via.placeholder.com/150'
  },
  {
    text: 'World',
    src: 'https://via.placeholder.com/150'
  }
]

document.querySelector('#app').appendChild(
  ListCard(arrayOfElement)
)