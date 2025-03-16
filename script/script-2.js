document.addEventListener("DOMContentLoaded", function () {
 
    const taskButton1 = document.getElementById("card-btn-2");
    const taskNumberElement1 = document.getElementById("task-number");

    function getInnerTextByID(id) {
        const value = document.getElementById(id).innerText;
        return parseInt(value);
    }

    function setInnerTextByIDandValue(id, value) {
        document.getElementById(id).innerText = value;
    }


    if (taskButton1 && taskNumberElement1) {
        taskButton1.addEventListener("click", function () {
            alert("Board successfully updated");

            let taskNumber = getInnerTextByID("task-number");

            if (taskNumber > 0) {
                taskNumber -= 1;
                setInnerTextByIDandValue("task-number", taskNumber);
            }
        });
    } else {
        console.error("Error!");
    }


    const taskButton2 = document.getElementById("card-btn-2");
    const NumberElement = document.getElementById("number");

    function getInnerTextByID(id) {
        const value = document.getElementById(id).innerText;
        return parseInt(value);
    }

    function setInnerTextByIDandValue(id, value) {
        document.getElementById(id).innerText = value;
    }


    if (taskButton2 && NumberElement) {
        taskButton2.addEventListener("click", function () {
            

            let Number = getInnerTextByID("number");

            if (Number > 0) {
                Number += 1;
                setInnerTextByIDandValue("number",Number);
            }
        });
    } else {
        console.error("Error!");
    }


});

document.getElementById('card-btn-2').addEventListener('click',function(){


    const history = document.getElementById('history');
    const p = document.createElement('p');

    let now = new Date().toLocaleTimeString();

    p.innerText = `You have completed the task "Fix Video Loading Issue" at ${now}`;
    
    history.appendChild(p);

})

document.getElementById('card-btn-2').addEventListener('click', function () {
    this.disabled = true;  
    this.innerText = "Completed";  
    this.style.backgroundColor = "#ccc";  
});