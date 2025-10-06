// [] >> list/array object
window.onload = function(){
    var tabs = [...document.getElementsByTagName("td")]
    tabs.forEach(function(cell){
        const exists = cell.innerHTML
        cell.addEventListener("mouseenter", function(){
            var newChild = document.createElement("h2")
            newChild.innerHTML=`${exists} visited`
            this.appendChild(newChild)
        })
        cell.addEventListener("mouseleave", function(){
            this.innerHTML=exists
        })
        cell.addEventListener("click", function(){
            this.remove()
        })
    })
}