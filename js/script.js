// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let widht = document.getElementById('inputWidht').value;
  let color = document.getElementById('colorPicker').value;
  let drawTable = document.getElementById('pixelCanvas');
  let newTable = document.createElement('tr');
  let newData = document.createElement('td');
  newTable.setAttribute('class', 'cell');
  height = parseInt(height);
  widht = parseInt(widht);
  for (let i=1; i<=height; i++){
    drawTable.appendChild(newTable);
    console.log("row" + i);
  }
    for(let j=1; j<=widht; j++){
      newTable.last().appendChild(newData);
  console.log("td" + j);
  }
          
  newData.on("click","td", function(){
  $(this).style.backgroundColor = color;
};
};

$("input[type='submit']").on("click", function(makeGrid){
  makeGrid.preventDefault();
});