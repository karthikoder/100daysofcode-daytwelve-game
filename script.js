var z=0;
var timeleft ;
var downloadTimer;
	var score=0;
	 var x = document.getElementsByClassName("block")
	 function next(x)
	 {
	 	c=parseInt(x);
	 	if(z==c)
	 	{
	 		start();
	 		score=score+1;
	 		document.getElementById("value").innerHTML=score;
	  	}
	  	else
	  	{
	  		alert("you lost the game and your score is "+score);
	  		score=0;
			  document.getElementById("value").innerHTML=score;
			  clearInterval(downloadTimer);
			  restart();
	  	}


	 }
	function start()
{
  	var y=Math.floor(Math.random() * 20);
  for (var i = 0; i < 20; i++)
   {
    if (i==y)
    {
    	x[i].style.backgroundColor = "#F5EFED";
    	x[i].style.cursor = "pointer";
    	z=i;
    }
    else
    {
    	x[i].style.backgroundColor = "#2292A4";
    }
   }
   document.getElementById("btn").style.display="none"
   document.getElementById("button").style.display="initial";
}
function restart()
{
	
	document.getElementById("button").style.display="none";
	 document.getElementById("btn").style.display="initial";
	 alert("restarted the game your score is "+score);
	 score=0;
	document.getElementById("value").innerHTML=score;
	for (var i = 0; i < 20; i++)
  {
    	x[i].style.backgroundColor = "#2292A4";
  }
}
function timer() 
{
	timeleft = 10;
	downloadTimer = setInterval(function(){
	  if(timeleft <= -1){
		clearInterval(downloadTimer);
		restart()
	  }
	  document.getElementById("h").innerHTML =" remaining time: " +(timeleft);
	  timeleft -= 1;
	}, 1000);
}
function main()
{
	start()
	timer()
}