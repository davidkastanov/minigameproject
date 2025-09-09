document.getElementById("checkButton").addEventListener("click", function () {
    const input = document.getElementById("heroInput").value.trim();
    const year = Number(input);
    const resultText = document.getElementById("result");


    resultText.textContent = "";


    if (!input || isNaN(year) || year <= 0) {
        resultText.textContent = "Будь ласка, введіть дійсний рік!";
        resultText.style.color = "red";
        return;
    }


    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;


    if (isLeap) {
        resultText.textContent = "Ви народилися у високосний рік!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Ви народилися не у високосний рік!";
        resultText.style.color = "red";
    }


    document.getElementById("heroInput").value = "";
});
