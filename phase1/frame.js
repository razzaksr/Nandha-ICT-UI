window.onload = function(){
    this.document.getElementsByTagName("button")[0].addEventListener("click", function(){
        document.getElementById("viewpoint").src = "text.html"
        this.style.backgroundColor = "red"
        this.style.color = "white"
    })
    this.document.getElementsByTagName("button")[1].addEventListener("click", function(){
        document.getElementById("viewpoint").src = "task.html"
    })
    this.document.getElementsByTagName("button")[2].addEventListener("click", function(){
        document.getElementById("viewpoint").src = "Baleno.html"
    })
}