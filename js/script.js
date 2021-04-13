let btnNum = document.getElementsByName('name-num');
let btnOp = document.getElementsByName('name-op');
let btnResult = document.getElementsByName('name-result') [0];
let btnClean = document.getElementsByName('name-clean') [0];

let result = document.getElementById('result');

let actualOp = '';
let backOp = '';
let Op = undefined;


btnNum.forEach((btnAction)=> {
    btnAction.addEventListener('click', ()=> {
        addNum(btnAction.innerText);
    })
});

btnOp.forEach((btnAction)=> {
    btnAction.addEventListener('click', ()=> {
        selectOp(btnAction.innerText);
    })
});

btnResult.addEventListener('click', ()=> {
    calculate();
    refresh();
});

btnClean.addEventListener('click', ()=> {
    clear();
    refresh();
});


function addNum(num) {
    actualOp = actualOp.toString() + num.toString();
    refresh();
}

function refresh() {
    result.value = actualOp;
}

function selectOp(opera) {
    if(actualOp === '') return;
    if(backOp !== '') {
        calculate();
    }
    Op = opera.toString();
    backOp = actualOp;
    actualOp = '';
}

function calculate() {
    let calc;
    let previus = parseFloat(backOp);
    let actual = parseFloat(actualOp);
    if(isNaN(previus) || isNaN(actual)) return;
    switch(Op){
        case '+':
            calc = previus + actual;
            break;
        case '-':
            calc = previus - actual;
            break;
        case 'x':
            calc = previus * actual;
            break;
        case '/':
            calc = previus / actual;
            break;
        default:
            return;
    }
    actualOp = calc;
    backOp = '';
    Op = undefined;
}

function clear() {
    actualOp = '';
    backOp = '';
    Op = undefined;
}