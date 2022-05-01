// "use strict";

$(function () {
    // fixed header

    $(window).scroll(function () {
        var height = $(window).scrollTop(); /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 50) { $('header').addClass('header-fixed'); } else { /*Если меньше 100px удаляем класс для header*/
            $('header').removeClass('header-fixed');
        }
    });


    // custom select

    $(".custom-select").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });

    // custom select

    // added active class in form input
    $(".focus-field").focus(function () {
        $(this).parent().addClass('active');
    }).keyup(function (e) {
        // Скрытие лэйбла если в инпуте больше 10 символов


        if ($(this).val().length >= 10) {
            $(this).parent().addClass('hiddenLabel');

        } else {
            $(this).parent().removeClass('hiddenLabel');
        }
        console.log($(this).val());
    });


    $('.focus-field').blur(function () {
        if ($(this).val() === '' || $(this).val() === undefined) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });

    // searchpage input clear
    $("#local-search").focus(function () {
        $(this).parent().addClass("active");
        $('.clear').addClass('show');
    });

    $("#local-search").blur(function () {
        $('.clear').removeClass('show');
    });

    $(".clear").click(function () {
        $('.local-search__Input').val('');
        $(this).removeClass('show');
    });
    // searchpage input clear

    $('#local-search').blur(function () {
        if ($(this).val() === '' || $(this).val() === undefined) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
            $(this).next().addClass('show');
        }
    });


    // filter-btn__resp
    $("#filter-btn__resp").click(function () {
        $('#filter-bar').addClass("open");
        $('body').addClass("block-scroll");
    });
    $("#close-filter").click(function () {
        $('#filter-bar').removeClass("open");
        $('body').removeClass("block-scroll");
    });
    // filter-btn__resp

    // burger - btn
    $(".burger-btn").on("click", function () {
        $('.header').addClass("mobile-nav");
        $('body').addClass("block-scroll");
        if ($('#filter-bar').hasClass('open')) {
            $('#filter-bar').removeClass('open');
        }
    });
    // burger - btn


    // close navigation
    $(".close-mob__nav ").on("click", function () {
        $('.header').removeClass("mobile-nav");
        $('body').removeClass("block-scroll");
    });
    // close navigation

    // sort functioin
    $("#sortBtnResp").on("click", function () {
        $('.sort-btn_inner').addClass("active-sort");
    });

    $(document).on('mouseup touchstart', function (e) {
        var sort = $('#sort-btn_inner');
        if (!sort.is(e.target) && sort.has(e.target).length === 0) {
            $('#sort-btn_inner').removeClass('active-sort');
        }
    });
    // sort functioin

    // messengersPopup scrypt
    $('.messengersPopup .messengersBtn').on('click ontouchstart', function () {
        $('.messengersPopup .messengersWrap').stop().fadeToggle();
    });

    $(document).on('mouseup touchstart', function (e) {
        var el = $('.messengersPopup');
        if (!el.is(e.target) && el.has(e.target).length === 0) {
            $('.messengersPopup .messengersWrap').fadeOut();
        }
    });
    // messengersPopup scrypt




});


// Sliders-----------------------------------------------------------

const swiperDirectionInfo = new Swiper('.direction-info', {
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 6,

        },

    }
});

const swiperDirection = new Swiper('.direction', {
    breakpoints: {

        320: {
            slidesPerView: 1.1,
            spaceBetween: 6,

        },

    }
});
swiperDirection.controller.control = swiperDirectionInfo;
swiperDirectionInfo.controller.control = swiperDirection;


const swiperSuare = new Swiper('.square', {
    breakpoints: {

        320: {
            slidesPerView: 1.2,
            spaceBetween: 6,

        },
        767: {
            slidesPerView: 2.5,

        },

        1200: {
            slidesPerView: 3.5,
            spaceBetween: 15,

        },

    }
});

const swiperLarge = new Swiper('.swiper-large', {
    centeredSlides: true,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 30,

        },

    },

    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span class="decor-line"></span> ' + '<span class="' + totalClass + '"></span>';
        }
    },

});

const swiperAddit = new Swiper('.swiper-addit', {
    loop: true,
    breakpoints: {

        320: {
            slidesPerView: 2.5,
            spaceBetween: 10,

        },
        767: {
            slidesPerView: 3.5,
            spaceBetween: 20,

        },
        1000: {
            slidesPerView: 4.5,
            spaceBetween: 20,

        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 16,

        },

    },


});


const swiperVideo = new Swiper('.swiper-video', {
    loop: true,
    breakpoints: {

        320: {
            width: 320,
            spaceBetween: 10,
            slidesPerView: 'auto',
        },
        470: {
            width: 347,
            spaceBetween: 16,
        }
    }
});

const swiperVacancy = new Swiper('.swiper-vacancy', {
    loop: true,
    breakpoints: {

        320: {
            slidesPerView: 1.7,
            spaceBetween: 10,

        },
        600: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 28,

        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 35,

        },

    }
});

const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {

        320: {
            width: 235,
        },
        470: {
            width: 255,
        }
    }
});


// tabs
var jsTriggers = document.querySelectorAll('.js-tab-trigger');
jsTriggers.forEach(function (item, i) {
    item.addEventListener('mouseenter', function () {
        var tabName = this.dataset.tab,
            tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

        document.querySelectorAll('.js-tab-content.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        document.querySelectorAll('.js-tab-trigger.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        tabContent.classList.add('active');
        this.classList.add('active');
    });
})
// tabs

// pop up search

let popupBg = document.querySelector('#popup__bg'); // Фон попап окна
let popup = document.querySelector('#popup-inner'); // Само окно
let openPopupButtons = document.querySelectorAll('#open-search'); // Кнопки для показа окна
let closePopupButton = document.querySelector('#close-search'); // Кнопка для скрытия окна
let hiddenNav = document.querySelector('.nav'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        hiddenNav.classList.add('hidden'); // Добавляем класс hidden для навигации
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    hiddenNav.classList.remove('hidden'); // Убираем класс hidden с навигации
    document.querySelector(".input-search").value = ""; //очищаем инпут
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        hiddenNav.classList.remove('hidden'); // Убираем класс hidden с навигации
        document.querySelector(".input-search").value = "";
    }
});

// pop up search



// pop up form large
let formBg = document.querySelector('#formBg');
let formInner = document.querySelector('#formInner');
let formBtn = document.querySelector('#formBtn');
let closeForm = document.querySelector('#closeForm');

// Вешаем обработчик события на кнопку вызова формы
if (formBtn !== null) {
    formBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        formBg.classList.add('open'); // Добавляем класс 'active' для фона
        formInner.classList.add('open'); // И для самого окна
    });
}


// Вешаем обработчик события на кнопку закрытия формы
closeForm.addEventListener('click', () => { // Вешаем обработчик на крестик
    formBg.classList.remove('open'); // Убираем активный класс с фона
    formInner.classList.remove('open'); // И с окна
});

// Ловим клик на фон
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === formBg) { // Если цель клика - фон, то:
        formBg.classList.remove('open'); // Убираем активный класс с фона
        formInner.classList.remove('open'); // И с окна
    }
});
// pop up form large

//popup small
let formBgSmall = document.querySelector('#formBgSmall');
let formInnerSmall = document.querySelector('#formInnerSmall');
let closeSmall = document.querySelectorAll('#closeSmall');
let openSmall = document.querySelectorAll('#openSmall');

if (openSmall !== null) {

    openSmall.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            formBgSmall.classList.add('open'); // Добавляем класс 'active' для фона
            formInnerSmall.classList.add('open'); // И для самого окна
        });

    });


}

closeSmall.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        formBgSmall.classList.remove('open'); // Убираем активный класс с фона
        formInnerSmall.classList.remove('open'); // И с окна
    })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === formBgSmall) { // Если цель клика - фон, то:
        formBgSmall.classList.remove('open'); // Убираем активный класс с фона
        formInnerSmall.classList.remove('open'); // И с окна
    }
});
//popup small


//popup thanks
let thanksBg = document.querySelector('#thanksBg');
let thanksInner = document.querySelector('#thanksInner');
let closeThanks = document.querySelectorAll('#closeThanks');

closeThanks.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        thanksBg.classList.remove('open'); // Убираем активный класс с фона
        thanksInner.classList.remove('open'); // И с окна
    })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === thanksBg) { // Если цель клика - фон, то:
        thanksBg.classList.remove('open'); // Убираем активный класс с фона
        thanksInner.classList.remove('open'); // И с окна
    }
});
// //popup thanks


// 404 page bg

function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
}


// Cache gradient

if (document.getElementById('canvas')) {

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight),
        hue = 217,
        stars = [],
        count = 0,
        maxStars = 1400;

    var canvas2 = document.createElement("canvas"),
        ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, "#fff");
    gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
    }

    var Star = function () {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 50000;
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    };

    Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
            canvas2,
            x - this.radius / 2,
            y - this.radius / 2,
            this.radius,
            this.radius
        );
        this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 1)";
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = "lighter";
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        }

        window.requestAnimationFrame(animation);
    }

    animation();
}
// 404 page bg


//bg telegram subscrible

if (document.getElementById('space')) {

    window.requestAnimFrame = (function () { return window.requestAnimationFrame })();
    var canvas = document.getElementById("space");
    var c = canvas.getContext("2d");

    var numStars = 1900;
    var radius = '0.' + Math.floor(Math.random() * 9) + 1;
    var focalLength = canvas.width * 2;
    var warp = 0;
    var centerX, centerY;

    var stars = [], star;
    var i;

    var animate = true;

    initializeStars();

    function executeFrame() {

        if (animate)
            requestAnimFrame(executeFrame);
        moveStars();
        drawStars();
    }

    function initializeStars() {
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;

        stars = [];
        for (i = 0; i < numStars; i++) {
            star = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                o: '0.' + Math.floor(Math.random() * 99) + 1
            };
            stars.push(star);
        }
    }

    function moveStars() {
        for (i = 0; i < numStars; i++) {
            star = stars[i];
            star.z--;

            if (star.z <= 0) {
                star.z = canvas.width;
            }
        }
    }

    function drawStars() {
        var pixelX, pixelY, pixelRadius;

        // Resize to the screen
        if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeStars();
        }
        if (warp == 0) {
            c.fillStyle = "rgba(0,10,20,1)";
            c.fillRect(0, 0, canvas.width, canvas.height);
        }
        c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
        for (i = 0; i < numStars; i++) {
            star = stars[i];

            pixelX = (star.x - centerX) * (focalLength / star.z);
            pixelX += centerX;
            pixelY = (star.y - centerY) * (focalLength / star.z);
            pixelY += centerY;
            pixelRadius = 1 * (focalLength / star.z);

            c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
            c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
        }
    }

    document.getElementById('warp').addEventListener("click", function (e) {
        e.preventDefault();
        window.warp = window.warp == 1 ? 0 : 1;
        window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
        executeFrame();
    });

    executeFrame();

}

// copy url scrypt
let copyUrlBtn = document.querySelector('#copyUrlBtn');

if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', () => {
        let tempInput = document.createElement('textarea');

        tempInput.style.fontSize = '12pt';
        tempInput.style.border = '0';
        tempInput.style.padding = '0';
        tempInput.style.margin = '0';
        tempInput.style.position = 'absolute';
        tempInput.style.left = '-9999px';
        tempInput.setAttribute('readonly', '');

        tempInput.value = window.location.href;

        copyUrlBtn.parentNode.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);

        document.execCommand('copy');

        tempInput.parentNode.removeChild(tempInput);
    });
}
// copy url scrypt


// particles-js
particlesJS.load('particles-js', 'assets/particlesjs-config.json');
// particles-js


// Number masked js
var phoneSelector = document.querySelector('.mask-phone__js');
var maskModel = {
    mask: '+38 (000)000-00-00',
    // lazy: false,
    // placeholderChar: '38'
};
var mask = IMask(phoneSelector, maskModel);




var phoneSelectorSmall = document.querySelector('.mask-phone__js-small');
var maskModelSmall = {
    mask: '+38 (000)000-00-00',
    // lazy: false,
    // placeholderChar: '38'
};
var maskSmall = IMask(phoneSelectorSmall, maskModelSmall);
// Number masked js


var phoneSelectorContacts = document.querySelector('.mask-phone__js-contacts');
var maskModelContacts = {
    mask: '+38 (000)000-00-00',
    // lazy: false,
    // placeholderChar: '='
};
var maskContacts = IMask(phoneSelectorContacts, maskModelContacts);
// Number masked js
