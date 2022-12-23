import Card from "./Card";

export default function ListCard(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)

  //test
  const title= document.createElement('h1');
  title.textContent='Bienvenue Madi';

  element.querySelector('div').appendChild(title)
  arrayOfElement.forEach(e => {
    element.querySelector('div').appendChild(Card(e))
  });

  return element
}