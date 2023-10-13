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
    const depositAmount = parseFloat(depositIput);

    depositAction ('deposit-current-amount', depositAmount );

    depositAction ('total-curnt-blance', depositAmount );

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
    var withdrawInput = document.getElementById('withdraw-input').value;
    var withdrawInputAmount = parseFloat(withdrawInput);
// withdraw add
    var preWithdraw = document.getElementById('pre-withdraw').innerText;
    var preWithdrawAmount = parseFloat(preWithdraw);
    var currentWithdrawAmount = withdrawInputAmount + preWithdrawAmount;
    document.getElementById('pre-withdraw').innerText = currentWithdrawAmount;

    document.getElementById('withdraw-input').value = "";

// remove withdraw amount from total blance
    var totalBlnc = document.getElementById('total-curnt-blance').innerText;
    var total = parseFloat(totalBlnc)
    var mainBlance = total - withdrawInputAmount;
    document.getElementById('total-curnt-blance').innerText = mainBlance;
})


