// storage >> list of patients(json)
let myPatients = [
    {
        "name": "Moorthi",
        "age":52,
        "height":187,
        "weight": 75,
        "gender":"male"
    },
    {
        "name": "Nandhini",
        "age":25,
        "height":175,
        "weight": 65,
        "gender":"female"
    },
    {
        "name": "Kumar",
        "age":28,
        "height":180,
        "weight": 70,
        "gender":"male" 
    },
    {
        "name": "Ragavi",
        "age":30,
        "height":178,
        "weight": 68,
        "gender":"female"
    }
]


// CRUD
window.onload = function(){
    // Create
    document.getElementById("register").addEventListener('click',function(){
        var name = document.getElementById("name");
        var age = document.getElementById("age");
        var height = document.getElementById("height");
        var weight = document.getElementById("weight");
        var gender = document.getElementById("gender");
        var patient = {
            "name": name.value,
            "age": age.value,
            "height": height.value,
            "weight": weight.value,
            "gender":gender.value
        }
        myPatients.push(patient);
        alert("Patient Registered Successfully")
        name.value="";age.value="",height.value="";weight.value="";
    })
    document.getElementById("view").addEventListener('dblclick',function(){
        var root = document.getElementById("patients");
        root.innerHTML = ""
    })
    // Read
    document.getElementById("view").addEventListener('click',function(){
        var root = document.getElementById("patients");
        myPatients.forEach(function(patient){
            console.log(patient.name)
            var box = document.createElement("div");
            box.innerHTML = "<h3>"+patient.name+"</h3><h3>"+
            patient.gender+"</h3>";
            // style properties
            box.style.display="inline-block";
            box.style.width="300px";
            box.style.height="fit-content";
            box.style.border= "2px solid black";
            box.style.borderRadius="10px";
            box.style.margin="10px";
            box.style.padding="10px";
            box.style.boxShadow="5px 5px 5px grey";
            box.style.backgroundColor="lightyellow";
            root.appendChild(box);
        })
    })
}