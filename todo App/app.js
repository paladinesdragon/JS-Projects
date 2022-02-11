const input = document.getElementById('item');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list'); 
let LIST = [];

const addToDo = () => {
    if(input.value) {
        const item = `<li>
        <input type="checkbox" />
        <label>${input.value}</label>
        <i class="far fa-trash-alt"></i>
        </li>`
        
        list.insertAdjacentHTML("beforeend", item);
        LIST.push(input.value);

        const deleteBtn = list.querySelectorAll('.fa-trash-alt');
        console.log(deleteBtn);
        for(let i = 0;i < deleteBtn.length;i++) {
            console.log(deleteBtn[i]);
            deleteBtn[i].addEventListener('click', (e) => {
                deleteBtn[i].parentNode.remove();
                LIST.pop(item[i]);
                console.log(LIST);
            });
        }
        console.log(LIST);
    }
    input.value = "";
}

addBtn.addEventListener('click', addToDo);


