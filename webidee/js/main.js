var interaction = new Interact({
    target: 'EMBED-1',
    className: 'fadeRight',
    offset: 20,
    mobile: true,
    reset: true
})

var interaction = new Interact({
    target: 'EMBED-2',
    className: 'fadeLeft',
    offset: 20,
    mobile: true,
    reset: true
})

var interaction = new Interact({
    target: 'EMBED-3',
    className: 'fadeRight',
    offset: 20,
    mobile: true,
    reset: true
})

var interaction = new Interact({
    target: 'text-1',
    className: 'fadeIn',
    mobile: true,
    offset: 20,
    reset: true
});


function button(element) {
    element.style = 'background-color: rgba(0, 0, 0, 0.1); border: solid 2.3px black; font-size: larger; '
}

function buttonout(element){
    element.style = 'background-color: normal; '
}

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}

var interaction = new Interact({
    target: 'h3',
    className: 'flipX',
    mobile: true,
    offset: 20,
    reset: true
});

