
function verif(){

    const psw = document.querySelector("#psw").value;
    const psw1 = document.querySelector("#psw1").value;
    console.log(psw,psw1);
    const check = document.querySelector("#check");
    if (psw != psw1 )
    check.textContent="Password No match"; 
    check.style.backgroundColor =  "transparant";
    check.style.boxShadow =  "5px 5px 25px rgba(255,255,255,0.8)";
    check.style.border = "1px solid red";


}
