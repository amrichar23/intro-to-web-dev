const taskArray = [
  {title: 'Wicked', year: 2003},
  {title: 'Chicago', year: 1975},
  {title: 'Rent', year: 1996},
  {title: 'Evita', year: 1975},
  {title: 'Company', year: 1970},
  ];


function loadContent() {

  taskArray.sort((a, b) => compare(a.title, b.title));

  loadTable();
  loadNewestYear();

}


function addNewTask() {
  const newTaskTitle = document.getElementById('title-input').value;
  const newTaskYear = document.getElementById('year-input').value;
  const newTask = {title: newTaskTitle, year: newTaskYear};
  taskArray.push(newTask);

  loadContent();
}


function loadTable() {
  const tableElement = document.createElement('table');


  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Year'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  tableElement.appendChild(headerRowElement);


  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', task.year));
    rowElement.appendChild(createElement('td', task.title));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

function loadNewestYear(){
  let newestYear = taskArray[0];

  for (let i = 1; i < taskArray.length; i++) {
    const task = taskArray[i];
      if(task.year > newestYear.year) {
      newestYear = task;
    }
  }
  document.getElementById('newest-year').innerText = newestYear.title;
}

function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}


function compare(valueOne, valueTwo) {
  if (valueOne < valueTwo) {
    return -1;
  }

    if (valueOne > valueTwo) {
    return 1;
  }

  return 0;
}
