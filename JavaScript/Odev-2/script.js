const newItem = document.querySelector('#task')
const addButon = document.querySelector('#liveToastBtn')
const itemList = document.querySelector('#list')
const allItem = document.querySelectorAll('li')

allItem.forEach(item =>{
  const deleteButton = document.createElement('i');
  deleteButton.classList.add("fas","fa-eraser","close","delete", "btn-danger");
  item.classList.add('line');
  item.append(deleteButton);
})

addButon.addEventListener('click', newElement);

let counter = 0;

function newElement (e) {
  e.preventDefault();

  const trimValue = newItem.value.trim();

  if(trimValue.length){
    counter ++;

    let li = document.createElement('li');
    li.classList.add('line');
    li.innerHTML = `${trimValue}<i class="fas fa-eraser close delete btn-danger"></i>`;

    itemList.append(li);

    newItem.value = "";

    localStorage.setItem(`Ekleme${counter}`,trimValue);
  
    $('.success').toast('show');
    
  }else{
    $('.error').toast('show');
    }
  
}

itemList.addEventListener('click', (e)=> {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});


itemList.addEventListener('click', (e) =>{
  if(e.target.classList.contains('line')){
    e.target.classList.toggle('checked');
  }
});






