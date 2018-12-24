'use strict'
var i=0;

function addCell() {
    var container = document.getElementById("fraction");
    var Den = document.getElementsByClassName("empty-cell").length + 1;
    var cell = document.createElement("li");
    
    container.appendChild(cell);
    cell.classList.add("empty-cell");  
    
    if (Den >=1 && Den <10){
        document.getElementById("add-cell").disabled = false;
        document.getElementById("remove-cell").disabled = false;
        document.getElementById("pint-cell").disabled = false;
        document.getElementById("clear-cell").disabled = false;
    }
    else {
        document.getElementById("add-cell").disabled = true;
    }   
}


function removeCell() {
    var cell = document.getElementById("fraction"); 
    var Den = document.getElementsByClassName("empty-cell").length -1;
    cell.removeChild(cell.lastChild); 
    
   
    if (Den >1){
        document.getElementById("remove-cell").disabled = false;
        document.getElementById("add-cell").disabled = false;
    }
        
    else {
        document.getElementById("remove-cell").disabled = true;
    }
}  

function pintCell() {
    var numCell = document.getElementsByTagName("li").length;
            
    if (i >= 0 && i <numCell && i <10) {
        document.getElementById("pint-cell").disabled = false;
        document.getElementById("clear-cell").disabled = false;

        var cellPint = document.getElementsByTagName("li")[i];
        cellPint.classList.add("full-cell"); 
        i=i+1;
    }
    else {
        document.getElementById("pint-cell").disabled = true;
        
    }    
}

function clearCell() {
    
    var numCell = document.getElementsByTagName("li").length;
    
        
    if (i <=numCell && i >0) {
        document.getElementById("pint-cell").disabled = false;
        var cellPint = document.getElementsByTagName("li")[i-1];
        cellPint.classList.remove("full-cell"); 
        i=i-1;
    }
    else {
        document.getElementById("pint-cell").disabled = false;
        document.getElementById("clear-cell").disabled = true;
        console.log("entro en el else del clear");
    }
    
}

function randFraction() {
    var num = 0;
    var den = 0;
    do {
        num = Math.floor(Math.random()*(9-1)+1);
        den = Math.floor(Math.random()*(10-2)+2);

    } while(num>=den) 
    var numString = num.toString();
    var denString = den.toString();
    document.getElementById("numData").innerHTML = numString;
    document.getElementById("denData").innerHTML = denString;
    document.getElementById("validate-fraction").disabled = false;

}

function validate() {
    //debugger;
    var num = parseInt(document.getElementById("numData").textContent);
    
    var den = parseInt(document.getElementById("denData").textContent);
       
    var drawNum = document.getElementsByClassName("full-cell").length;
    
    var drawDen = document.getElementsByTagName("li").length;  
    console.log("otro click")
    
    if (num==drawNum && den==drawDen) {
        var big = document.getElementsByTagName("li");
        var i =0;          
       
        for  ( i = 0; i < big.length; i++) {
            big[i].classList.add("bigSize"); 
          }   
    }
    else {
        var big = document.getElementsByTagName("li");
        var i=0;          
       
        for (i = 0; i < big.length; i++) {
            big[i].classList.add("wrong"); 
          }  

    }
}

