var curr_symbol = "#"
var curr_height = "5"

function adjust_slider(event) {
    // console.log("event = " + event.type);    
    slider = document.getElementById('hS');
    // console.log("slider val = " + slider.value);
    slider_label = document.getElementsByName("curr_height")[0];
    console.log("slider label = " + slider_label);
    slider_label.textContent = slider.value; 
    curr_height = parseInt(slider.value);
    drawPyramid(curr_height);
}


function update_symbol(event) {
    s_elem = document.getElementsByName("symbol")[0];
    s_val = s_elem.options[s_elem.selectedIndex].value 
    curr_symbol = s_val
    console.log("new sym: " + curr_symbol);
    drawPyramid(curr_height);
}


function my_main() {
    slider = document.getElementById('hS');
    console.log("slider is: " + slider);
    slider.addEventListener('input', adjust_slider); 

    symbol = document.getElementsByName("symbol")[0];
    symbol.addEventListener('change', update_symbol);

    // call manually to START things off
    update_symbol(null);  // FIXME:  this is kinda hack-y
}


function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += curr_symbol; 
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

