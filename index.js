$("button").on("keydown", function(event){
    sound(event.key);
    onClick(event.key);
});

$("button").click(function(){
    var nuu = $(this).html();
    sound(nuu);
    onClick(nuu);
});

function sound(raj){
    switch(raj){
            case 'w': var audio = new Audio('./sounds/tom-1.mp3');
                    audio.play();
                    break;
            case 'a': var audio = new Audio('./sounds/tom-2.mp3');
                    audio.play();
                    break;
            case 's': var audio = new Audio('./sounds/tom-3.mp3');
                    audio.play();
                    break;
            case 'd': var audio = new Audio('./sounds/tom-4.mp3');
                    audio.play();
                    break;
            case 'j': var audio = new Audio('./sounds/crash.mp3');
                    audio.play();
                    break;
            case 'k': var audio = new Audio('./sounds/kick-bass.mp3');
                    audio.play();
                    break;
            case 'l': var audio = new Audio('./sounds/snare.mp3');
                    audio.play();
                    break;
        }
}

function onClick(number){
    $("." + number).addClass("pressed");

    setTimeout(function(){
        $("." + number).removeClass("pressed");
    }, 100);
}
