(function() {

    document.addEventListener('load', init());


    function init() {

        $('#paddleB').css('top', '20px');
        $('#paddleA').css('top', '60px');

        let KEY = {

            UP:     38,
            DOWN:   40,
            W:      87,
            S:      83
        };

        // GLOBAL OBJECT TO STORE
        // ALL THE GLOBAL VARIABLES
        // OF THIS GAME
        var pingpong = {}

        // VECTOR TO STORE THE PRESSED KEYS
        // BY THE PLAYERS
        pingpong.pressedKeys = [];

        $(function() {

            // DEFINE AN INTERVAL OF CALL TO THE
            // GAMELOOP FUNCTION IN EACH 30 MILISECONDS
            pingpong.timer = setInterval( gameloop, 30 );

            // STORE THE STATES OF THE KEYS IN THE PRESSED KEYS ARRAY
            $(document).keydown(function(e) {

                pingpong.pressedKeys[e.which] = true;
            });

            $(document).keyup(function(e) {

                pingpong.pressedKeys[e.which] = false;
            });

            function gameloop() {

                movePaddles();

            }

            function movePaddles() {


                if (pingpong.pressedKeys[KEY.UP]) { 

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleB').css('top', top-5);
                }

                if (pingpong.pressedKeys[KEY.DOWN]) {

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleB').css('top', top+5);
                }

                if (pingpong.pressedKeys[KEY.W]) {

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleA').css('top', top-5);
                }

                if (pingpong.pressedKeys[KEY.S]) {

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleA').css('top', top+5);
                }
            }



        });

        /*
        $(document).keydown(function(e) {

            switch(e.which) {

                case KEY.UP:

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleB').css('top', top-5);

                    break;


                case KEY.DOWN:

                    var top = parseInt($('#paddleB').css('top'));
                    $('#paddleB').css('top', top+5);

                    break;

                case KEY.W:

                    var top = parseInt($('#paddleA').css('top'));
                    $('#paddleA').css('top', top-5);

                    break;

                case KEY.S:

                    var top = parseInt($('#paddleA').css('top'));
                    $('#paddleA').css('top', top+5);
                    
                    break;



            }



        });
        */
        // MESSAGE TO USER
        alert( 'Welcome to the Ping Pong game!' );


        

        // APPLY LABELS TO NUMERIC
        // CODES TO IMPROVE CODE READING
        

        alert( "Init" );



    }






})();



