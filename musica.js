var stateClass = true;


var reproduzir = function(){
    const audio = document.querySelector('audio')

    if (pegaEstado() == true) {
        guardaEstado(false);
        audio.play()
        MusicDuration(250,'i++')
        document.getElementById('pause').src="Images/pause.png"
        
    } else {
        guardaEstado(true);
        audio.pause()
        document.getElementById('pause').src="Images/play.png"
        MusicDuration('play')
        
    }
}

function pegaEstado() {
    return stateClass;
}

function guardaEstado(teste) {
    stateClass = teste;
}


   





