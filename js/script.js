const logInButton = document.getElementById("login-button")
logInButton.addEventListener('click' , function(){
    var logInForm = document.getElementById("login-from");
    logInForm.style.display = 'none';
    var bankingArea = document.getElementById("banking-area");
    bankingArea.style.display = 'block';
})
// ?deposit button event handelar 
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener('click', function (){
    const depositIput = document.getElementById("deposit-input").value;

    const depositNumberr = withdrawNumber ('deposit-input');
    depositAction ('deposit-current-amount', depositNumberr );
    depositAction ('total-curnt-blance', depositNumberr );

    document.getElementById("deposit-input").value = "";
})
// diposit and blance add function 
function depositAction (id, depositAmount){
    const depositCurrentAmount = document.getElementById(id).innerText;
    const deposiToldAmount  = parseFloat(depositCurrentAmount);
    const totalDepositAmount = depositAmount + deposiToldAmount ;
    document.getElementById(id).innerText = totalDepositAmount;
}
// withdraw input
var withdrawbtn = document.getElementById('withdraw-button');
withdrawbtn.addEventListener('click', function(){
    var withdrawNumberr = withdrawNumber ('withdraw-input');

    depositAction ('pre-withdraw', withdrawNumberr )
    document.getElementById('withdraw-input').value = "";
    depositAction ('total-curnt-blance', -1 * withdrawNumberr );

})

function withdrawNumber(id){
    var withdrawInput = document.getElementById(id).value;
    var withdrawInputAmount = parseFloat(withdrawInput);
    return withdrawInputAmount;
}


