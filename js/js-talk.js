var stand1 = document.getElementById('stand-1'),
    stand1Frag = document.querySelector('#stand-1 .fragment'),
    stand2 = document.getElementById('stand-2'),
    stand2Frag = document.querySelector('#stand-2 .fragment'),
    stand3Frag = document.getElementById('stand-3');

Reveal.addEventListener('fragmentshown', function(event) {
    switch(event.fragment){
        case stand1Frag:
            stand1.classList.remove('lowpacity');
            stand2.classList.remove('lowpacity');
            break;
        case stand2Frag:
            stand1.classList.add('lowpacity');
            stand2.classList.remove('lowpacity');
            break;
        case stand3Frag:
            stand1.classList.add('lowpacity');
            stand2.classList.add('lowpacity');
            break;
    }
});
Reveal.addEventListener('fragmenthidden', function(event) {
    switch(event.fragment){
        case stand1Frag:
            break;
        case stand2Frag:
            stand1.classList.remove('lowpacity');
            stand2.classList.remove('lowpacity');
            break;
        case stand3Frag:
            stand1.classList.add('lowpacity');
            stand2.classList.remove('lowpacity');
            break;
    }
});