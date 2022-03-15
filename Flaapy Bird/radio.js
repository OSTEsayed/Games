var forme = document.getElementById("changer");
var x= document.querySelector('input[name="radis"]:checked');
var resultat = document.getElementById("Reposn");

resultat.innerHTML = x.value; 

forme.onchange= function(){
    x= document.querySelector('input[name="radis"]:checked');
    resultat.innerHTML = x.value; 
}

