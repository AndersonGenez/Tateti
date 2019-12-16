
                var bandera = false;     //Indica si el juego ya inició
                var turno = 0;          //Determina el turno
                var tab = new Array(); //Array de botones
                var vel = 250;


                    window.onload = function(){

                        tab[0] = document.getElementById("b0");
                        tab[1] = document.getElementById("b1");
                        tab[2] = document.getElementById("b2");
                        tab[3] = document.getElementById("b3");
                        tab[4] = document.getElementById("b4");
                        tab[5] = document.getElementById("b5");
                        tab[6] = document.getElementById("b6");
                        tab[7] = document.getElementById("b7");
                        tab[8] = document.getElementById("b8");
                   for (var i=0; i<9; i++){

                        tab[i].className = "botonInicial";
                   } 
                        var iniciar = document.getElementById("Iniciar");
                /*checar*/iniciar.addEventListener("click",Comenzar);
                function Comenzar(){
                    bandera = true;
                    var Jugador1 = document.getElementById("Jugador1");
                    var Jugador2 = document.getElementById("Jugador2");
                        if (Jugador1.value==""){
                            alert("falta el nombre del jugador 1");
                            Jugador1.focus();
                        } 
                    else {
                        if (Jugador2.value==""){
                        alert("falta el nombre del jugador 2");
                        Jugador2.focus();
                        } 
                            else {
                                        for (var i=0; i<9; i++){ 
                                            tab[i].className = "botonInicial";
                                            tab[i].value = "I";
                                        }
                                    turno = 1;
                                        document.getElementById("turnoJugador").innerHTML =
                                        "Adelante " + Jugador1.value;
            }
        }
    }   
}
                    function colocar (boton) {
                        if (bandera == true){
                            if (turno == 1 && boton.value == "I"){
                                turno = 2;
                                document.getElementById("turnoJugador").innerHTML =
                                "Adelante " + Jugador2.value;
                                boton.value = "X";
                                boton.className = "botonJugador1";
                            
                            } else{
                                if (turno == 2 && boton.value == "I"){
                                    turno = 1;
                                document.getElementById("turnoJugador").innerHTML =
                                "Adelante " + Jugador1.value;
                                boton.value = "O";
                                boton.className = "botonJugador2";
                                }
                            }
                        }
                          function empate (){   
                                if (bandera == true){
                                    if (
                                    tab[0].value !="I" &&
                                    tab[1].value !="I" &&
                                    tab[2].value !="I" &&
                                    tab[3].value !="I" &&
                                    tab[4].value !="I" &&
                                    tab[5].value !="I" &&
                                    tab[6].value !="I" &&
                                    tab[7].value !="I" &&
                                    tab[8].value !="I" 
                                        ){
                                            setTimeout(() => {
                                                alert('Empate')
                                            }, vel);
                                            bandera = false;                                    
                                        }
        }
                          }
                        revisar();

                        empate();

    }
                        

                    function revisar (){
                        if ((tab[0].value =="X" && tab[1].value =="X" && tab[2].value =="X")
                        ||  (tab[3].value =="X" && tab[4].value =="X" && tab[5].value =="X")
                        ||  (tab[6].value =="X" && tab[7].value =="X" && tab[8].value =="X") //3
                        ||  (tab[0].value =="X" && tab[3].value =="X" && tab[6].value =="X")
                        ||  (tab[1].value =="X" && tab[4].value =="X" && tab[7].value =="X")
                        ||  (tab[2].value =="X" && tab[5].value =="X" && tab[8].value =="X") //6
                        ||  (tab[0].value =="X" && tab[4].value =="X" && tab[8].value =="X")
                        ||  (tab[2].value =="X" && tab[4].value =="X" && tab[6].value =="X")
                        ){
                            setTimeout(() => {
                            ganador(Jugador1.value);
                          }, vel);
                            bandera = false;
                        } 
                        
							
                        if ((tab[0].value =="O" && tab[1].value =="O" && tab[2].value =="O")
                        ||  (tab[3].value =="O" && tab[4].value =="O" && tab[5].value =="O")
                        ||  (tab[6].value =="O" && tab[7].value =="O" && tab[8].value =="O") //3
                        ||  (tab[0].value =="O" && tab[3].value =="O" && tab[6].value =="O")
                        ||  (tab[1].value =="O" && tab[4].value =="O" && tab[7].value =="O")
                        ||  (tab[2].value =="O" && tab[5].value =="O" && tab[8].value =="O") //6
                        ||  (tab[0].value =="O" && tab[4].value =="O" && tab[8].value =="O")
                        ||  (tab[2].value =="O" && tab[4].value =="O" && tab[6].value =="O")
                        ){
                            
                          setTimeout(() => {
                            ganador(Jugador2.value);
                          }, vel);
                            
                            bandera = false;                         
                     
                        } 
                        function ganador (win){
                            alert("Ha ganado " + win);
                        }
                    }
