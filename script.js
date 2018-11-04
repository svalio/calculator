$(document).ready(function () {   
    var calc = $('.calculator');
    var calcDisplay = calc.find('.display');
    var calcKeys = calc.find('.key');
    var calcButton = calc.find('.button');
    var calcClear = calc.find('.clear');
    var calcEqual = calc.find('.equal');
    var calcSpace = calc.find('.backspace');

    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    calcSpace.on('click', function () { 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});