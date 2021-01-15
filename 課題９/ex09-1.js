const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.getElementById('list')

// addButton.addEventListener('click', (event) => {
//     for (let i = 1; i < 10; i++) {
//         const newItem = document.createElement('li')
//         newItem.textContent = `アイテム${i}`
//         list.appendChild(newItem)
//     }
// })

let i = 1;
addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li')
    newItem.textContent = 'アイテム' + `${i}`;
    list.appendChild(newItem)
    i++;
})


removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastChild)
})

