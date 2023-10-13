const logInButton = document.getElementById("login-button")
logInButton.addEventListener('click', function(){
    var logInForm = document.getElementById("login-from");
    logInForm.style.display = 'none';
    var bankingArea = document.getElementById("banking-area");
    bankingArea.style.display = 'block';
})
// ?deposit button event handelar 
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener('click', function (){
    const depositIput = document.getElementById("deposit-input").value;
    const depositAmount = parseFloat(depositIput);

    depositAction ('deposit-current-amount', depositAmount );

    depositAction ('total-curnt-blance', depositAmount );

    document.getElementById("deposit-input").value = "";
})
function depositAction (id, depositAmount){
    const depositCurrentAmount = document.getElementById(id).innerText;
    const deposiToldAmount  = parseFloat(depositCurrentAmount);
    const totalDepositAmount = depositAmount + deposiToldAmount ;
    document.getElementById(id).innerText = totalDepositAmount;
}
