var s = document.querySelectorAll(".drum").length;

for(var i = 0; i < s; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var bad = this.innerHTML;
        sound(bad);
        onClick(bad);
    });
}

document.addEventListener("keydown", function(event){
        sound(event.key);
        onClick(event.key);
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
        var req = document.querySelector("." + number);
        req.classList.add("pressed");

        setTimeout(function(){
                req.classList.remove("pressed");
        }, 100);
}