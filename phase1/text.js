window.onload = function(){
    var personName = document.getElementsByTagName("h1")[0]
    personName.addEventListener("mouseenter", function(){
        this.innerHTML = `<ul><li>razaksrmd@gmail.com</li><li>www.linkedin.com/in/razakmohamedshahulhameed</li></ul>`
    })
    personName.addEventListener("mouseleave", function(){
        this.innerHTML = `Razak Mohamed S`
    })
}
    