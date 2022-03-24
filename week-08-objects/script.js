// Array of objects representing a todo list.
// Modify this array to contain your own list.
const taskArray = [
  {title: 'Step Brothers', time: 158, rating: 6.9},
  {title: 'Magnolia', time: 188, rating: 8.0},
  {title: 'The Other Guys', time: 107, rating: 7.8},
  {title: 'Blow', time: 124, rating: 7.5},
  {title: 'Law Abiding Citizen', time: 109, rating: 7.4},
  {title: 'A Million Ways to Die in the West', time: 176, rating: 6.1},
  {title: 'Deja Vu', time: 126, rating: 7.1},
  {title: 'Three Billboards', time: 175, rating: 8.1},
  {title: 'Tombstone', time: 130, rating: 7.8},
  {title: 'The Shining', time: 146, rating: 8.4},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  taskArray.sort((a, b) => compare(a.title, b.title));

  loadTable();
  loadHighestRated();
  loadAverageRating();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskTitle = document.getElementById('title-input').value;
  const newTaskRating = document.getElementById('rating-input').value;
  const newTaskTime = document.getElementById('time-input').value;
  const newTask = {title: newTaskTitle, rating: newTaskRating, time: newTaskTime};
  taskArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Rating'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Run Time'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', task.rating));
    rowElement.appendChild(createElement('td', task.title));
    rowElement.appendChild(createElement('td', task.time));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadHighestRated(){
  // Assume the first task is shortest
  let highestRated = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.rating > highestRated.rating) {
      highestRated = task;
    }
  }
  document.getElementById('highest-rated').innerText = highestRated.title;
}

function loadAverageRating(){
    let total = 0;

   for(let i = 0; i < taskArray.length; i++){
     const task = taskArray[i];
     total += Number(task.rating);
   }

    let average = total / taskArray.length;

  document.getElementById('average-rating').innerText = average;
}



// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
