window.onload = function()
{


//Dimensiones del canvas
var dimensiones =
	{
		w:760,
		h:500
	}
	
var cont=0;
var cont2=0;
var puntuacion=0;
bolas_posx=[80,360,640];
var eliminar=[];
bola_tenis_x=[460]

  var posCan=[310,560,100]; 


bola_tenis=
    [{
        x       :640,
        y       :460,
        ancho   :40,
        alto    :40
    }
    ]




var canx=posCan[0]; 



bolas=
    [
        {
            x       :80,
            y       :0,
            ancho   :40,
            alto    :40
        },
        {
            x       :360,
            y       :0,
            ancho   :40,
            alto    :40

        },
        {
            x       :640,
            y       :0,
            ancho   :40,
            alto    :40
        }
    ];








var canvas = nom_div("canvas");
var bola_0 = nom_div("bola_0");
var bola_1 = nom_div("bola_1");
var bola_2 = nom_div("bola_2");
var ctx = canvas.getContext("2d");
//Dibuja el cañon
    var can=nom_div("can");
    ctx.drawImage(can,dimensiones.w/2 - 70,dimensiones.h-110,128,128);
    

	




var myVar = setInterval(myTimer, 1000);
function myTimer() {


for (var i = 0; i < bolas.length; i++)
 {
    ctx.clearRect(bolas[i].x, bolas[i].y, bolas[i].ancho, bolas[i].alto);
    bolas[i].y+=15;
    ctx.drawImage(bola_1,bolas[i].x, bolas[i].y, bolas[i].ancho, bolas[i].alto);
};

cont++;

if(cont==5)
{
 
 for (var i = 0; i < bolas_posx.length; i++) {

       var b= 
       {
            x       :bolas_posx[i],
            y       :0,
            ancho   :40,
            alto    :40
       }

       bolas.push(b);
     
 }

 cont=0;
}

validar();


}


function validar () {


  
     
        

     if(((bolas[1].x >= (bola_tenis[0].x)-10) && (bolas[1].x <= (bola_tenis[0].x)+10 ))||((bolas[1].y>=bola_tenis[0].y-10) && (bolas[1].y<=bola_tenis[0].y+10)))
        {
                        puntuacion++;
                        console.log("Vas a perder"+puntuacion)
                        bolas.splice(2, 1);

        }

               if (puntuacion==5) 
               {
                console.log("Perdio");
                location.reload();
                
               }     
                 
                  
}	








 $(document).keypress(function(event)
{


if(event.keyCode===97)
        {


               
                if(canx===posCan[0])
                {
                    ctx.clearRect(0, 0, 760, 500);
                    ctx.drawImage(can,posCan[2],dimensiones.h-110,128,128);
                    canx=posCan[2];
                    
                }       
                if(canx===posCan[1])
                {
                    ctx.clearRect(0, 0, 760, 500);
                    ctx.drawImage(can,posCan[0],dimensiones.h-110,128,128);
                    canx=posCan[0];
                   
                }  
}


   if(event.keyCode===100)
        {

                if(canx === posCan[0])
                {
                    ctx.clearRect(0, 0, 760, 500);
                    canx=posCan[1]
                    ctx.drawImage(can,posCan[1],dimensiones.h-110,128,128);
                   
                }
                if(canx === posCan[2])
                {
                    ctx.clearRect(0, 0, 760, 500);
                    canx=posCan[0]
                    ctx.drawImage(can,posCan[0],dimensiones.h-110,128,128);   
                   
                }
}



        if(event.keyCode===32)
        {
            
       var c= {
        x       :640,
        y       :465,
        ancho   :40,
        alto    :40
    };


    bola_tenis.push(c);

    var canyon = setInterval(canyon, 500);
    function canyon() 
    {
             
                   for (var i = 0; i < bola_tenis.length; i++) 
                    {
                        ctx.clearRect(canx+45, bola_tenis[i].y-110, bola_tenis[i].ancho, bola_tenis[i].alto);
                        bola_tenis[i].y-=15;
                        ctx.drawImage(bola_2,canx+45, bola_tenis[i].y-110, bola_tenis[i].ancho, bola_tenis[i].alto);
                    }

                   
                                   
    }; 
}
   
        event.keyCode = 0;
        event.returnValue = false;
        event.cancelBubble = true; });


function nom_div(id)
{
	return document.getElementById(id);
}




};