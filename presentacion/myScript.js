var stateVideo = false,  stateVideo2 = false,  stateVideo3 = false;

$(document).ready(function() {
    controlVideoPlay();
});

function controlVideoPlay(){
    $('#video').click(function () {
        if(!stateVideo){
            playVid('video');
            stateVideo = true;
        }else{
            pauseVid('video');
            stateVideo = false;
        }
    })

    $('#video2').click(function () {
        if(!stateVideo2){
            playVid('video2');
            stateVideo2 = true;
        }else{
            pauseVid('video2');
            stateVideo2 = false;
        }
    })

    $('#video3').click(function () {
        if(!stateVideo3){
            playVid('video3');
            stateVideo3 = true;
        }else{
            pauseVid('video3');
            stateVideo3 = false;
        }
    })
}


function next() {
    stateVideo = false;
    pauseVid('video')
    stateVideo2 = false;
    pauseVid('video2')
    stateVideo3 = false;
    pauseVid('video3')
    if ($('.up').attr('id')!=1){
        $(".up").fadeOut("slow").slideUp("slow");
        var idUp =  Number($('.up').attr('id')) - 1;
        var newId = '#' + Number(idUp);
        if(idUp>0){
            $('.up').removeClass('up');
            $(newId).addClass('up');
        }
    }
}
function back() {
    stateVideo = false;
    pauseVid('video')
    stateVideo2 = false;
    pauseVid('video2')
    stateVideo3 = false;
    pauseVid('video3')
    var idUp =  Number($('.up').attr('id')) + 1;
    console.log(idUp)
    var newId = '#' + Number(idUp);
    if(idUp<=8){
        $('.up').removeClass('up');
        $(newId).addClass('up');
        $(".up").fadeIn("slow").slideDown("slow");
    }
}



var vid = '';

function playVid(miVideo) {
    vid = document.getElementById(miVideo)
    vid.play();
}

function pauseVid(miVideo) {
    vid = document.getElementById(miVideo)
    vid.pause();
}

