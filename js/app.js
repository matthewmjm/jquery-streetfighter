/* Rules
- hide everyting before you show anything
- for binary actions the second action is always to return to the default state
- when the page loads we can target the container directly; on mouse evenets we have to target the parent container first and then the child; for key events we target directly at the document level
- before starting any animation make sure that any other animation is finished first
- we stop any sound before we start playing another one
*/

$(document).ready(function () {

    // when the page loads
    $('.ryu-action').hide();
    $('.ryu-still').show();


    //when the mouse hovers over the guy
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
    //mouse hovers of the guy
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });


    //when the mouse click the guy throws the thing
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
            'left': '300px'
        }, 500, function () {
            $(this).stop();
            $(this).hide();
            $(this).css('left', '-212px');
        });
    });
    //when the is not clicked
    $('.ryu').mouseup(function () {
        $('.ryu-throwing').hide();
        $('.ryu-still').show();
    });


    //press the X key so the guy strikes the pose and music plays
    $(document).keydown(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
            playCool();
        }
    });
    //release the X key the guy goes to ready pose and music stops
    $(document).keyup(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });
});

var hadoukenSound = false;

function playHadouken() {
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }
}

var coolSound = false;

function playCool() {
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}
