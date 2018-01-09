'use strict';

module.exports = function ( event ) {
    var eventCode;

    if ( event.keyCode === 0 ) {
        return;
    }

    eventCode = event.keydown;

    if ( event.ctrlKey )  {
        eventCode += 'c';
    }

    if ( event.altKey )   {
        eventCode += 'a';
    }

    if ( event.shiftKey ) {
        eventCode += 's';
    }

    return eventCode;
}
