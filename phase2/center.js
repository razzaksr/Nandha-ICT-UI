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

    // validation functions

    // name validation
    this.document.getElementById("name").addEventListener('blur',function(){
        var entered = this.value
        try{
            if(!(/^[A-Za-z ]{3,}$/).test(entered))
                throw "Invalid Name"
            document.getElementById("err-name").innerHTML=""
        }catch(err){
            document.getElementById("err-name").innerHTML=err
        }
    })

    // age validation
    this.document.getElementById("age").addEventListener('blur',function(){
        var entered = this.value
        try{
            if(!(/^[0-9]{1,2}$/).test(entered))
                throw "Invalid Age"
            document.getElementById("err-age").innerHTML=""
        }catch(err){
            document.getElementById("err-age").innerHTML=err
        }
    })

    // height validation
    this.document.getElementById("height").addEventListener('blur',function(){
        var entered = this.value
        try{
            if(!(/^[0-9]{1,3}$/).test(entered))
                throw "Invalid height"
            document.getElementById("err-height").innerHTML=""
        }catch(err){
            document.getElementById("err-height").innerHTML=err
        }
    })

    // height validation
    document.getElementById("weight").addEventListener('blur',function(){
        var entered = this.value
        try{
            if(!(/^[0-9]{1,3}$/).test(entered))
                throw "Invalid weight"
            document.getElementById("err-weight").innerHTML=""
        }catch(err){
            document.getElementById("err-weight").innerHTML=err
        }
    })

    document.getElementById("gender").addEventListener('blur',function(){
        try{
            if(document.getElementById("gender").value==="any")
                throw "Invalid Gender"
            document.getElementById("err-gender").innerHTML=""
        }catch(err){
            document.getElementById("err-gender").innerHTML=err
        }
    })






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
        // decide whether need to add new entry or update
        var position = myPatients.findIndex(function(obj){
            return obj.name === name.value
        })
        if(position!==-1){
            myPatients[position]=patient
            alert(`${name.value} has updated`)
        }else{
            myPatients.push(patient);
            alert("Patient Registered Successfully")
        }
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
            box.innerHTML = `<h3>${patient.name}</h3><h3>${patient.gender}</h3><button onclick=opens('${patient.name}')>Edit</button><button onclick=erase('${patient.name}')>Delete</button>`;
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
function opens(patName){
    console.log(patName)
    var found = myPatients.find(function(obj){
        return obj.name===patName
    })
    console.log('found'+JSON.stringify(found))
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var gender = document.getElementById("gender");
    name.value = found.name
    name.setAttribute("readonly",true)
    age.value=found.age
    height.value=found.height
    weight.value=found.weight
    gender.value=found.gender
}
function erase(patName){
    myPatients = myPatients.filter(function(obj){
        return obj.name!==patName
    })
    alert(`${patName} has been deleted from hospital records`)
}


