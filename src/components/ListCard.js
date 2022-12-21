import Card from "./Card";

export default function ListCard(arrayOfElement) {
  const template = document.querySelector('#listOfElement')
  const element = template.content.cloneNode(true)

  console.log(element.querySelector('ul'))
  
  arrayOfElement.forEach(e => {
    element.querySelector('ul').appendChild(Card({ ...e, tagName: 'li' }))
  });

  return element
}