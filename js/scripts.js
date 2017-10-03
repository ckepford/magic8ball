// target your button and assign an ask function that outputs a random image to your page
let inputBox;

document.querySelector('.input-box').focus();
document.querySelector('.input-box').select();

document.querySelector(".input-box")
    .addEventListener("keyup", function (event) {
    event.preventDefault();
        if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});

function ask() {
  let num = Math.ceil(Math.random() * 20);
    var img = document.getElementById('images');
    var imgPath = 'img/magic8ball_' + num + '.png';
    img.setAttribute('src', imgPath);
    resetInput();
}

function resetInput() {
    document.querySelector(".input-box").value = '';
}



// clear input box after ask button is pressed or enter pressed
// make enter button activate ask function
// require text in input box to activate ask function
// make curser appear in box on page load
