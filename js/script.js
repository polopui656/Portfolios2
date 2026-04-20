// Điều khiển nút bấm link
const buttonIds = ['btnHome', 'btnAbout', 'btnProject'];
const urls = {
    btnHome: '../html/index.html',
    btnAbout: '../html/about.html',
    btnProject: '../html/project.html'
};

buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {  
        button.addEventListener('click', function () {
            console.log(id + ' button clicked');
            window.location.href = urls[id];
        });
    } else {
        console.error(id + ' not found');
    }
});


// Code Star Animation
const number_of_star = 200;

let random_number = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let createStars = function () {
    let star_rotation = 'move_right';
    for (let i = 0; i < number_of_star; i++) {
        star_rotation = (star_rotation == 'move_right' ? 'move_left' : 'move_right');
        let star_top = random_number(0, document.documentElement.clientHeight);
        let star_left = random_number(0, document.documentElement.clientWidth);
        let star_radius = random_number(1, 5);
        let star_duration = random_number(6, 16);

        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = star_top + 'px';
        star.style.left = star_left + 'px';
        star.style.width = star_radius + 'px';
        star.style.height = star_radius + 'px';
        star.style.animationName = star_rotation;
        star.style.animationDuration = star_duration + 's';

        document.body.appendChild(star);

        /*document.body.innerHTML += "<div class='star' style='top: " + star_top + "px; left: " + star_left + "px; width: " + star_radius + "px; height: " + star_radius + "px; " +
            "animation-name:" + star_rotation + "; animation-duration: " + star_duration + "s;'></div>";*/
    }
};

let existingStars = document.querySelectorAll('.star');
existingStars.forEach(function (star) { star.remove(); });


createStars();