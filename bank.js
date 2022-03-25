    // login button event handler
        const loginBtn = document.getElementById('login').addEventListener('click',function(){
        const loginArea = document.getElementById("login-area").style.display = "none";
        const transactionArea = document.getElementById("transaction-area").style.display = "block";
    })

        // deposit button event handler

        const depositBtn = document.getElementById("addDeposit").addEventListener("click", function(){
        const depositNumber = getInputNumber("depositAmount");
        if(depositNumber > 0){
            updateSpanText("currentDeposit", depositNumber);
        }else{
            alert("- Number cannot be given");
        }
        
        updateSpanText("currentBalance", depositNumber); 
    })
        // Add withDraw Button handle 

        const WithdrawBtn = document.getElementById("addWithdraw").addEventListener("click", function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        if(withdrawNumber > 0){
            updateSpanText("currentWithdraw", withdrawNumber);
        }else{
            alert("- Number cannot be given");
        }
        updateSpanText("currentBalance", -1* withdrawNumber);
    });
       
    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const Number = parseFloat(Amount);
        document.getElementById(id).value = '';
        return Number;
    }

    function updateSpanText(id, addedNumber){{
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = addedNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        
    }};

    // End