function validate(){
    let isValid = true
    var panData = document.getElementById("pan").value
    var emailData = document.getElementById("email").value
    var passData = document.getElementById("pass").value
    document.getElementById("err-pan").innerHTML=""
    document.getElementById("err-email").innerHTML=""
    document.getElementById("err-pass").innerHTML=""
    try{
        if(!(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).test(panData))
            throw {messege:"Invalid PAN Number",code:"err-pan"}
        if(!(/[a-z]{2,}@[a-z]{2,}\.[a-z]{2,}/).test(emailData))
            throw {messege:"Invalid Email",code:"err-email"}
        if(!(/^(?=.*[@#$!&])[A-Za-z0-9@#$!&]{8,}$/).test(passData))
            throw {messege:"Invalid Password",code:"err-pass"}
    }catch(err){
        isValid=false
        document.getElementById(err.code).innerHTML=err.messege
    }
    return isValid
}