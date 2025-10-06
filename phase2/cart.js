// empty basket
let basket = ['fried chicken','mushroom pulav']

window.onload = function(){
    document.getElementById("add").addEventListener('click',function(){
        var entered = document.getElementsByName("dish")[0]
        basket.push(entered.value)
        alert(`${entered.value} has been added into basket`)
        entered.value=""
    })
    document.getElementById("modify").addEventListener("click",function(){
        var entered = document.getElementsByName("dish")[0]
        var newDish = prompt(`tell us what you wish to replace over ${entered.value}`) 
        for(var index = 0; index < basket.length; index++){
            // find whether the entered item exists, then replace it
            if(basket[index]===entered.value){
                basket[index]=newDish
                alert(`${entered.value} has been replaced basket by ${newDish}`)
                entered.value=""
                return
            }
        }
    })
    document.getElementById("delete").addEventListener("click",function(){
        var entered = document.getElementsByName("dish")[0]
        basket = basket.filter(function(val){
            return val!==entered.value
        })
        alert(`${entered.value} has been removed from basket`)
        entered.value=""
    })
    document.getElementById("see").addEventListener("mouseleave",function(){
        var root = document.getElementById("all")
        root.innerHTML=""
    })
    document.getElementById("see").addEventListener("mouseenter",function(){
        var root = document.getElementById("all")
        basket.map(function(val){
            var box = document.createElement("div")
            box.style.border="2px"
            box.style.borderStyle="solid"
            box.style.borderRadius="20px"
            box.style.boxShadow="5px 5px 5px grey"
            box.style.padding="5px"
            box.style.margin="5px"
            box.innerHTML=val
            root.appendChild(box)
        })
    })
}