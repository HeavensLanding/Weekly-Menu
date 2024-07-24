let id = 0;

document.getElementById('add').addEventListener('click',() => {
    let table = document.getElementById('tables-container');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('dayOfWeek').value;
    row.insertCell(1).innerHTML = document.getElementById('mealType').value;
    row.insertCell(2).innerHTML = document.getElementById('new-entree').value;
    row.insertCell(3).innerHTML = document.getElementById('new-sides').value;
    let actions = row.insertCell(4)
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('dayOfWeek').value = '';
    document.getElementById('mealType').value = '';
    document.getElementById('new-entree').value = '';
    document.getElementById('new-sides').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`)
        let elementToDelete = document.getElementById(`item-${id}`)
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}