export function Form(){
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


    return form
}