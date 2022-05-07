let addBtn=document.getElementById('addBtn'); //select only those element from document(html) where id is addBtn

addBtn.addEventListener("click", function(){ 
    sessionStorage.clear() //clear the session storage data
    let addName=document.getElementById('addName'); //select those element which has id is addName i.e elemet is <input> tag, document means html
    let addCollege=document.getElementById('addCollege');
    let addLocation=document.getElementById('addLocation');
    let id=sessionStorage.getItem("id"); // created session storage for store data (also give name to session storage is id)
    if(id==null){
        idObj=[]; //idObj is database, here we use array for store data
    }
    else
    {
        idObj=JSON.parse(id); //convert string into json format
    }
    let myObj={ //table creted
        name:addName.value, //save data name,college,location are column name
        college:addCollege.value,
        location:addLocation.value
    }
    idObj.push(myObj);  //push user enter data into session storage 
    sessionStorage.setItem("id", JSON.stringify(idObj));//store data, stringfy convert json data into string format
    addName.value="";  //after store the data , feild is clear
    addCollege.value="";
    addLocation.value="";
    showId(); // card show here(data is display from the sessionStorage on webpage)
})

function showId(){
    let id=sessionStorage.getItem("id");
    if(id==null){
        idObj=[]; //{name,collegename,location}
    }
    else
    {
        idObj=JSON.parse(id); //convert string into json format
    }
    let html=""; 
    idObj.forEach(function(element){ //fetch data from session storage and display
        //html=html+`.....`;
        html+=`
        Name:${element.name}
        <br><br>
        College name:${element.college}
        <br><br>
        Location:${element.location} `; //element.location means from list select only location by using element {name,clgname,location}  here element act as index of array
    });
    let idStudent=document.getElementById("idStudent"); 
    if(idObj.length!=0){
        idStudent.innerHTML=html; // display data which save in html..
    }
}

//image upload here
const image=document.getElementById('imgDisplayed'); 
const imageTwo=document.getElementById('imgDisp');
function loadImage(event){
    image.src=URL.createObjectURL(event.target.files[0]); //convert image into object, after that show on the targeted location
    imageTwo.src=URL.createObjectURL(event.target.files[0]);
}