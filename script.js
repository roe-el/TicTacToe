$(document).ready(function() {
    'use strict';
    console.log(player1XO+ " " + player2XO);
    var $btns = '.top-left-btn,.top-middle-btn,.top-right-btn,.middle-left-btn,.middle-middle-btn,.middle-right-btn,.bottom-left-btn,.bottom-middle-btn,.bottom-right-btn';
    var player1XO, player2XO, $topValues, $middleValues, $bottomValues, $leftValues, $middleVerticalValues, $rightValues, $acrossRight, $acrossLeft = null;

    var $values = ['.top-left-btn', '.top-middle-btn', '.top-right-btn', '.middle-left-btn', '.middle-middle-btn', '.middle-right-btn', '.bottom-left-btn', '.bottom-middle-btn', '.bottom-right-btn'];
    var random = 0;
    var win = false;
    var count = 0;
    $('.new_game').on('click', function() {
        player1XO = 'X';
        player2XO = 'O';
        $($btns).text('');
    })
    
    $($btns).on('click', function() {
        if (player1XO === null || player2XO === null) {
            alert('Choose a mark!');
            return;
        }
        $(this).text(player1XO);
        

        checkForWin();

        if (win === false) {
            computerMove();
        }
        win = false;
    })


    function checkForWin() {
        $topValues = $('.top-left-btn,.top-middle-btn,.top-right-btn').text();
        $middleValues = $('.middle-left-btn,.middle-middle-btn,.middle-right-btn').text();
        $bottomValues = $('.bottom-left-btn,.bottom-middle-btn,.bottom-right-btn').text();
        $leftValues = $('.top-left-btn,.middle-left-btn,.bottom-left-btn').text();
        $middleVerticalValues = $('.top-middle-btn,.middle-middle-btn,.bottom-middle-btn').text();
        $rightValues = $('.top-right-btn,.middle-right-btn,.bottom-right-btn').text();
        $acrossLeft = $('.top-left-btn,.middle-middle-btn,.bottom-right-btn').text();
        $acrossRight = $('.top-right-btn,.middle-middle-btn,.bottom-left-btn').text();
        if ($acrossRight === 'XXX' || $acrossLeft === 'XXX' || $topValues === 'XXX' || $middleValues === 'XXX' || $bottomValues === 'XXX' || $rightValues === 'XXX' || $middleVerticalValues === 'XXX' || $leftValues === 'XXX') {
            win = true;
            count = 0;
            setTimeout(function() {
                alert('Good job human :)');
                $($btns).text('');
            }, 500);

            return;
        } else if ($acrossRight === 'OOO' || $acrossLeft === 'OOO' || $topValues === 'OOO' || $middleValues === 'OOO' || $bottomValues === 'OOO' || $rightValues === 'OOO' || $middleVerticalValues === 'OOO' || $leftValues === 'OOO') {
            win = true;
            count = 0;
            setTimeout(function() {
                alert('Maybe next time human.');
                $($btns).text('');
            }, 500);

            return;
        }
    }

    function computerMove() {
        if (count < 5 && win === false) {
            console.log('Count:' + count);
            random = getRandomIntInclusive(8);
            if ($($values[random]).text() === '') {
                if (player1XO === 'O') {
                    $($values[random]).text('X');
                } else $($values[random]).text('O');
            } else { computerMove(); }
            checkForWin();
        } else {
            alert('Tie');
            count = 0;
            $($btns).text('');
        }
        return;
    }

    function getRandomIntInclusive(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * (max)); //The maximum is inclusive and the minimum is inclusive 
    }
});
