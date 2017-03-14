function adjust_slider(event) {
    // console.log("event = " + event.type);    
    slider = document.getElementById('hS');
    // console.log("slider val = " + slider.value);
    slider_label = document.getElementsByName("curr_height")[0];
    console.log("slider label = " + slider_label);
    slider_label.textContent = slider.value; 
}

function my_main() {
    slider = document.getElementById('hS');
    console.log("slider is: " + slider);
    slider.addEventListener('input', adjust_slider); 
}
