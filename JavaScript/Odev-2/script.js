const newItem = document.querySelector('#task')
const addButon = document.querySelector('#liveToastBtn')
const itemList = document.querySelector('#list')
const itemChecked = document.querySelector('#listli')

addButon.addEventListener('click', newElement);

let counter = 0;

function newElement () {
  if(newItem.value == "") {
    $('.error').toast('show');
  }else {

    let li = document.createElement('li')
    li.innerHTML = newItem.value

    let i = document.createElement('i')

    i.classList = "fas fa-eraser btn btn-danger close dltButton checked"

    li.appendChild(i);

    itemList.appendChild(li);

    newItem.value = ""
   
    $('.success').toast('show');
    
    itemList.addEventListener('click' ,deleteElement);
    
    localStorage.setItem(`${counter}`,newItem)
  }

  itemChecked.addEventListener('click',(e)=> {
    if(e.target.classList('close')) {
      e.target.classList('checked')
    }
  })
  
}


function deleteElement() {
  let itemListNew = document.querySelector('.dltButton').parentElement.remove()
}




