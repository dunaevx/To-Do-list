const InputText = document.getElementById('input-txt');
const listContainer = document.getElementById('list-container');

function addText() {
    
    if(InputText.value === ''){
        alert('Enter the task');
    }else{
        let li = document.createElement('li');

        li.innerHTML = InputText.value;
        listContainer.insertBefore(li, listContainer.firstChild);
        InputText.value = '';
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();