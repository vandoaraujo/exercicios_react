import React from 'react'

var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 

// ES6
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );
 
celcius //  [ -18, 0, 7, 10, 24, 27, 37, 49 ]



 
 
