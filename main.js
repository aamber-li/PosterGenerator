//Fletcher Notes
//let myCanv = document.getElementById(‘defaultCanvas0’); 
//myCanv.style.visibility = “hidden”; ------> this is vanillya javascript toggle hidden and visible tie it with event;


var nameNum;
var ageTotal;

function smallWindow(){
    var window = document.getElementById("formPopup");
    window.classList.add("show");
    
}

function overlap(){
    //var z = document.getElementsByClassName("popupWindow").style.zIndex;
    //var z =document.getElementsByClassName("popupWindow");
    //parseint()z=z+2;
    var z = document.getElementById("formPopup").style.zIndex;
    z= parseInt(z,10);
    console.log(z);
    //z = parseInt('z',10);
    //console.log(z);
    z=z+5;
    
    document.getElementById("formPopup").style.zIndex = z;
    console.log(z);
    //console.log(z);
}


function exit(){
    var window = document.getElementById("formPopup");
    window.classList.remove("show");
}

function addData(){
    var nameInput = document.getElementById("name").value;
    nameNum = nameInput.length;
    alert(nameNum);

}