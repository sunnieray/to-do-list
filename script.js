//select items from HTML
const itemInput = document.querySelector('#item');
const addItemButton = document.querySelector('#addItem');
const itemsList = document.querySelector('.collection-items');
const clearButton = document.querySelector('#clear');

loadEventListeners();

function loadEventListeners() {
  addItemButton.addEventListener('click', addItem);
  clearButton.addEventListener('click', clearItems);
}

function addItem(event) {
  if (itemInput.value === '') {
    alert('please type into the text box!');
  }
//create list item 
  const itemLi = document.createElement("li");
  // gives the class item a class
  itemLi.className = "item";
  //attach the text that is entered in text box to the Li
  itemLi.innerText = itemInput.value;
  //attach our itemsList variable to our itemLi variable to make it create on UL
  itemsList.appendChild(itemLi);

  //creates button called remove button
  const removeButton = document.createElement('button');
  removeButton.innerText ="X";

//appends button to each list item
  itemLi.appendChild(removeButton);

  //when button is clicked the itemLi and its child (the button) will delete
  removeButton.addEventListener('click', () => {
    itemsList.removeChild(itemLi);
  });

  itemInput.value = "";

//prevent webpage from doing default behavior and perform out event function
  event.preventDefault();
};

function clearItems (event) {
  while (itemsList.firstChild) {
    itemsList.removeChild(itemsList.firstChild);
  }
  event.preventDefault();
    };
