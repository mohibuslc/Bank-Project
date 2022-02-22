

const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function(){

    const loginArea = document.getElementById('login-area');

    loginArea.style.display="none";

    const tranArea = document.getElementById('transcation-area');

    tranArea.style.display = "block";

    


});

const addDeposit = document.getElementById("addDeposit");

addDeposit.addEventListener("click", function(){


    const deposit = document.getElementById('inputDeposit').value;
    const depositNumber = parseFloat(deposit);
   
    const currentDeposit = document.getElementById('currentDeposit').innerText ;

    const currentDepositNumber = parseFloat(currentDeposit);

    const totalNumber = depositNumber + currentDepositNumber;

   
    document.getElementById("currentDeposit").innerText = totalNumber;

    const newBalance = document.getElementById('newBalance').innerText;

    const newBalanceNumber = parseFloat(newBalance);

    const totalBalance = depositNumber + newBalanceNumber ; 

    document.getElementById('newBalance').innerText = totalBalance;

    document.getElementById('inputDeposit').value ="";


})

