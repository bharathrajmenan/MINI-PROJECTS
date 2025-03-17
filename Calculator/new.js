function displayval(val){
 document.getElementById("textarea").value +=val;   
}

function deleteval(){
  document.getElementById("textarea").value ="";  
}

function eva(){
    document.getElementById("textarea").value = eval(document.getElementById("textarea").value);
}

function lastdel(){
    let gary=document.getElementById("textarea").value;
    document.getElementById("textarea").value=gary.slice(0,-1);
}