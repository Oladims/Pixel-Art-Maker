$(document).ready(animatecolor);
// Changes the page background color
function animatecolor() {
  setInterval(changeColor, 3000);
}

// Selects a background color from a set of random colors at intervals
function changeColor() {
  var bgcolors = ['#fff', '#f0532c', '#3db161', '#e8c0ff', '#bd9986'];
  var textcolors = ['#5cd1f3', '#835cf3', '#8d38e4', '#f35c5c', '#b1f35c'];
  var bgcolor = bgcolors[Math.floor(Math.random() * bgcolors.length)];
  var textcolor = textcolors[Math.floor(Math.random() * textcolors.length)];
  $('body').animate({ backgroundColor: bgcolor }, 1500);
  $('.header').animate({ color: textcolor }, 500);
  $('#myModal').animate({ color: textcolor }, 1500);


}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick=function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// When size and background is submitted by the user, call makeGrid() and tableBackground()
$('#sizePicker').on('submit', function (e) {
  e.preventDefault();
  makeGrid();
  tableBackground();
});

// Sets the background of the table
function tableBackground() {
  let tableBackgroundColor = $('#tableColorPicker').val();
  $('table').css('background-color', tableBackgroundColor);
}

// Clears the table
function resetTable() {
  $("#pixelCanvas").html('');
}

function makeGrid() {
  // Sets the height and width of the table based on the user input
  let inputHeight = $('#inputHeight').val();
  let inputWidth = $('#inputWidth').val();

  resetTable();

  for (let i = 1; i <= inputHeight; i++) {
    // Appends column to the table based on the user selection
    $('#pixelCanvas').append('<tr id = coloumn' + i + '></tr>');
    for (let j = 1; j <= inputWidth; j++) {
      // Appends set of row to each column 
      $('#coloumn' + i).append('<td id=row' + j + '></td>');
    }
  }

  // Calls the fillbox function on mousedown
  // Fills the box on mousedrag(mousedown + mousemove)
  $("tr td").mousedown(fillBox);

  // Adds color property to the box
  function addcolor() {
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
  }
  // Sets the box color property to the background color
  function removeColor() {
    let tableBackgroundColor = $('#tableColorPicker').val();
    $(this).css('background-color', tableBackgroundColor)
  }

  function fillBox() {
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
    $('tr td').bind("mousemove", addcolor).mouseup(function () {
      $('td').unbind('mousemove');
    });
    // Sets the box color property to the background color on doubleclick
    $('tr td').dblclick(removeColor)
  }
}
