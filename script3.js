function convertDollar(){
    
    let cButton1 = document.querySelector('#cButton1');
    let input1 = document.querySelector('#input1');
    let usd = newvalue1(input1);
    
    document.getElementById('value1').innerHTML = `${usd} USD`
}

function newvalue1(selection1){
       let value1 = selection1.value * 1.29; 
    if(selection1.value >= 0){
       return value1; 
    } 
}

cButton1.addEventListener('click', convertDollar);




function convertEuro(){
    
    let cButton2 = document.querySelector('#cButton2');
    let input2 = document.querySelector('#input2');
    let euro = newvalue2(input2);
    
    document.getElementById('value2').innerHTML = `${euro} Euro`
}

function newvalue2(selection2){
       let value2 = selection2.value * 1.13; 
    if(selection2.value >= 0){
       return value2; 
    } 
}

cButton2.addEventListener('click', convertEuro);




function convertPeso(){
    
    let cButton3 = document.querySelector('#cButton3');
    let input3 = document.querySelector('#input3');
    let peso = newvalue3(input3);
    
    document.getElementById('value3').innerHTML = `${peso} Peso`
}

function newvalue3(selection3){
       let value3 = selection3.value * 24.58; 
    if(selection3.value >= 0){
       return value3; 
    } 
}

cButton3.addEventListener('click', convertPeso);




function convertBaht(){
    
    let cButton4 = document.querySelector('#cButton4');
    let input4 = document.querySelector('#input4');
    let baht = newvalue4(input4);
    
    document.getElementById('value4').innerHTML = `${baht} Baht`
}

function newvalue4(selection4){
       let value4 = selection4.value * 40.92; 
    if(selection4.value >= 0){
       return value4; 
    } 
}

cButton4.addEventListener('click', convertBaht);




function convertDirham(){
    
    let cButton5 = document.querySelector('#cButton5');
    let input5 = document.querySelector('#input5');
    let dirham = newvalue5(input5);
    
    document.getElementById('value5').innerHTML = `${dirham} Dirham`
}

function newvalue5(selection5){
       let value5 = selection5.value * 4.73; 
    if(selection5.value >= 0){
       return value5; 
    } 
}

cButton5.addEventListener('click', convertDirham);





