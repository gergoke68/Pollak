var options = ["Válasszon csapatot","One", "Two","Three"];

function Csere(sId) {
   var sel = document.getElementById(sId);
   var sindex = sel.selectedIndex;
   for (let index = 0; index < options.length; index++) {
    if(sindex != index ){   
        var op = document.createElement("option");       
        op.setAttribute("value",index+1);  
        op.innerText = options[index];
        }
        var masodik = document.getElementById("masodik");         
        masodik.appendChild(op);
   }
   
}