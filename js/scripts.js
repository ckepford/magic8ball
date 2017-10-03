// target your button and assign an ask function that outputs a random image to your page


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

// function inputRequired() {
//     document.querySelector(".input-box").required = true;
// }


// figure out how to require text in input box to activate ask function
