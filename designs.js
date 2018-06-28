// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#sizePicker').on('submit', function (e) {
  e.preventDefault()
  makeGrid();
});

function makeGrid() {
  // Sets the height and width of the grid to the user input
  let inputHeight = $('#inputHeight').val();
  let inputWidth = $('#inputWidth').val();

  $('#pixelCanvas').html('');

  for (let i = 1; i <= inputWidth; i++) {
    $('#pixelCanvas').append('<tr id = row' + i + '></tr>');
    for (let j = 1; j <= inputHeight; j++) {
      $('#row' + i).append('<td id=coloumn' + j + '></td>');
    }
  }

  $('td').click(fillBox);

  function fillBox() {
    // Stores the value of the selected color into color
    let color = $("#colorPicker").val();

    // Checks for the background color style property on the selected box
    ($(this).attr("style")) ? $(this).removeAttr("style") : $(this).attr("style", `background-color:${color}`);

  }
}
