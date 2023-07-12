let total = 3700
function removeElement() {
    let elem = document.querySelector('#container1');
    elem.parentNode.removeChild(elem);
    total-=countx1
    document.getElementById("total").innerText = total
}
function removeElement2() {
    let elem2 = document.querySelector('#container2');
    elem2.parentNode.removeChild(elem2);
    total-=countx2
    document.getElementById("total").innerText = total
}
function removeElement3() {
    let elem3 = document.querySelector('#container3');
    elem3.parentNode.removeChild(elem3);
    total-=countx3
    document.getElementById("total").innerText = total
}
let count1 = 1
let counterxx1 = 2500
let countx1 = 2500
function IncreaseCount1() {
    count1++;
    document.getElementById("increase1").innerText = count1;
    countx1+=counterxx1;
    document.getElementById("multiplier").innerHTML = countx1;
    total+=counterxx1
    document.getElementById("total").innerText = total
}
let count2 = 1
let counterxx2 = 1000
let countx2 = 1000
function IncreaseCount2() {
    count2++;
    document.getElementById("increase2").innerText = count2;
    countx2+=counterxx2;
    document.getElementById("multiplier2").innerHTML = countx2;
    total+=counterxx2
    document.getElementById("total").innerText = total
}   
let count3 = 1
let counterxx3 = 200
let countx3 = 200
function IncreaseCount3() {
    count3++;
    document.getElementById("increase3").innerText = count3;
    countx3+=counterxx3;
    document.getElementById("multiplier3").innerHTML = countx3;
    total+=counterxx3
    document.getElementById("total").innerText = total
}  
let decreaseButton1 = document.getElementById("DecreaseCount1"); 
function DecreaseCount1 () {
    document.getElementById("increase1").textContent = count1;
    if (count1 > 1) {
        count1--;
        document.getElementById("increase1").textContent = count1;
        total-=counterxx1
        document.getElementById("total").innerText = total
    } else {
        document.getElementById("increase1").textContent = 1;
    }
    if (countx1 > 2500) {
        countx1-=counterxx1;
        document.getElementById("multiplier").textContent = countx1;
    } else {
        document.getElementById("multiplier").textContent = countx1;
    }
}
let decreaseButton2 = document.getElementById("DecreaseCount2"); 
function DecreaseCount2 () {
    document.getElementById("increase2").textContent = count2;
    if (count2 > 1){
        count2--;
        document.getElementById("increase2").textContent = count2;
        total-=counterxx2
        document.getElementById("total").innerText = total
    } else {
        document.getElementById("increase2").textContent = 1;
    }
    if (countx2 > 1000) {
        countx2-=counterxx2;
        document.getElementById("multiplier2").textContent = countx2;
    } else {
        document.getElementById("multiplier2").textContent = countx2;
    }
}
let decreaseButton3 = document.getElementById("DecreaseCount3"); 
function DecreaseCount3 () {
    document.getElementById("increase3").textContent = count3;
    if (count3 > 1){
        count3--;
        document.getElementById("increase3").textContent = count3;
        total-=counterxx3
        document.getElementById("total").innerText = total
    } else {
        document.getElementById("increase3").textContent = 1;
    }
    if (countx3 > 200) {
        countx3-=counterxx3;
        document.getElementById("multiplier3").textContent = countx3;
    } else {
        document.getElementById("multiplier3").textContent = countx3;
    }
}
function heart() {
    if (document.getElementById("heartt").style.color == "black"){
        document.getElementById("heartt").style.color = "red";
    } else {
        document.getElementById("heartt").style.color = "black";
    }
}
function heart2() {
    if (document.getElementById("heartt2").style.color == "black"){
        document.getElementById("heartt2").style.color = "red";
    } else {
        document.getElementById("heartt2").style.color = "black";
    }
}
function heart3() {
    if (document.getElementById("heartt3").style.color == "black"){
        document.getElementById("heartt3").style.color = "red";
    } else {
        document.getElementById("heartt3").style.color = "black";
    }
}