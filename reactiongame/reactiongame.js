function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
    }
    
    
    var clickedTime; var createdTime; var reactionTime;
    
    
    function timerReset() {
        
        var timeSet=Math.random(); 
        timeSet=timeSet*5000;
    
        setTimeout(function() {
        
        if (Math.random()>0.5) {
            document.getElementById("box").style.borderRadius="100px";
        } else {
            document.getElementById("box").style.borderRadius="0";
        }
        
        var top=Math.random();
        
        top=top*350;
        
        var left=Math.random();
        
        left=left*800;
        
        document.getElementById("box").style.top=top+"px";
        document.getElementById("box").style.left=left+"px";
        document.getElementById("box").style.display="block";
        document.getElementById("box").style.background=getRandomColor();
        console.log(top+" top value");
        console.log(left+" left value");
        console.log("it has been "+timeSet+" milliseconds.");
        createdTime=Date.now();
    
        }, timeSet);       //this needs to be random value between 0 and 5000
    
    }
    
    document.getElementById("box").onclick=function() {
            
            clickedTime=Date.now();
            
            reactionTime=(clickedTime-createdTime)/1000;
            
            document.getElementById("time").innerHTML=reactionTime+" seconds."; 
            
            this.style.display="none";      //this will call whatever was specified above
            timerReset();
        }
    
    timerReset();