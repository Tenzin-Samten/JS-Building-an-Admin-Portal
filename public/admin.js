
// Your Code Here
async function main() {
    let response = await fetch ('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(renderBook)
}
function renderBook(book) {
    let root = documnet.querySlector('#root')

    let li = documnet.createElement('Li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantityInput

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'applition/json'
          },
          body: JSON.stringify({
            id: book.id,
            qauntity: quantityInput.value
          })  
        })
    })
    li.append(qauntityInput, saveButton)

    root.append(li)
}
main();
