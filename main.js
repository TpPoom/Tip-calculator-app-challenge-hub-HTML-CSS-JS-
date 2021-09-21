const inputBill = document.getElementById("billId");
const inputBillError = document.querySelector(".billErrorC")
const inputTipBtn = document.querySelectorAll("#selectTipId");
const inputTipCustom = document.querySelector("#selectTipIdCustom");
const inputPeople = document.querySelector("#peopleId");
const inputPeopleError = document.querySelector(".peopleErrorC")
const outputTipAmount = document.getElementById("tipAmountNumId");
const outputTotal = document.getElementById("totalNumId");
const result = document.querySelector(".result");
const resetBtn = document.getElementById("resetId");

inputTipBtn.forEach(btn => {
    btn.addEventListener('click', tip);
})

function tip(event) {
    inputTipBtn.forEach(btn => {
        btn.classList.remove('selectTipBtnC-active');
        inputTipCustom.value = "";
        inputTipCustom.classList.remove('selectTipCustomC-active');

        if (event.target.value == btn.value) {
            btn.classList.add('selectTipBtnC-active');
            tipValue = btn.value;
        }
    })
    output();
}

function customFocus() {
    inputTipBtn.forEach(btn => {
        btn.classList.remove('selectTipBtnC-active');
    })
}

function tipCustomValue() {
    if (inputTipCustom.value !== "") {
        tipValue = inputTipCustom.value;
        inputTipCustom.classList.add('selectTipCustomC-active');
    } else if (inputTipCustom.value == "") {
        inputTipBtn.forEach(btn => {
            btn.classList.remove('selectTipCustomC-active');
            inputTipCustom.value = "";
            inputTipCustom.classList.remove('selectTipCustomC-active');
        })
    }
    output();
}

function output() {
    if (inputBill.value == 0 && inputBill.value !== "") {
        inputBill.classList.add('errorInput-active');
        inputBillError.classList.add('billErrorC-active');
    } else {
        inputBill.classList.remove('errorInput-active');
        inputBillError.classList.remove('billErrorC-active');
    }

    if (inputPeople.value == 0 && inputPeople.value !== "") {
        inputPeople.classList.add('errorInput-active');
        inputPeopleError.classList.add('peopleErrorC-active');
    } else {
        inputPeople.classList.remove('errorInput-active');
        inputPeopleError.classList.remove('peopleErrorC-active');
    }


    if (inputBill.value != 0 && inputBill.value !== "" && inputPeople.value != 0 && inputPeople.value !== "" && typeof tipValue !== "undefined") {
        var tipAmount = (inputBill.value * (tipValue / 100)) / inputPeople.value;
        outputTipAmount.innerHTML = "$" + tipAmount.toFixed(2);

        var total = (inputBill.value * ((tipValue / 100) + 1)) / inputPeople.value;
        outputTotal.innerHTML = "$" + total.toFixed(2);

        resetBtn.disabled = false;
    } else {
        outputTipAmount.innerHTML = "$0.00";
        outputTotal.innerHTML = "$0.00";

        resetBtn.disabled = true;
    }
    if (window.matchMedia("(min-width: 376px)").matches) {
        if (7 < outputTipAmount.innerHTML.length) {
            let y = outputTipAmount.innerHTML.length;
            let x = 420 + ((y - 7) * 30);
            result.style.width = x + "px";
        } else {
            result.style.width = "420px";
        }
    }

    if (resetBtn.disabled == false) {
        resetBtn.classList.add('resetBtn-active');
    } else {
        resetBtn.classList.remove('resetBtn-active');
    }
}

function reset() {
    inputBill.value = "";
    inputPeople.value = "";
    inputTipCustom.value = "";
    inputTipBtn.forEach(btn => {
        btn.classList.remove('selectTipBtnC-active');
    })
    output();
}

