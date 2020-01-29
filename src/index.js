const btNum = [
        document.getElementById('b0'),
        document.getElementById('b1'),
        document.getElementById('b2'),
        document.getElementById('b3'),
        document.getElementById('b4'),
        document.getElementById('b5'),
        document.getElementById('b6'),
        document.getElementById('b7'),
        document.getElementById('b8'),
        document.getElementById('b9'),
    ],
    bd = document.getElementById('bd'),
    bu = document.getElementById('bu'),
    bm = document.getElementById('bm'),
    bt = document.getElementById('bt'),
    br = document.getElementById('br'),
    bs = document.getElementById('bs'),
    disp = document.getElementById('disp');;

let oper, newS = false,
    s1;

btNum.forEach((btn) => {
    btn.addEventListener('click', () => {
        if ((newS) || (disp.value === '0')) {
            disp.value = btn.innerText;
            newS = false;
        } else {
            disp.value += btn.innerText;
        }
    });
});

bd.addEventListener('click', () => {
    if (s1 === undefined) {
        s1 = disp.value;
        oper = 'd';
        newS = true;
        //console.log('/');
    } else {
        ravno();
    }
});

bs.addEventListener('click', () => {
    if (s1 === undefined) {
        s1 = disp.value;
        oper = 's';
        newS = true;
        //console.log('+');
    } else {
        ravno();
    }
});

bm.addEventListener('click', () => {
    if (s1 === undefined) {
        s1 = disp.value;
        oper = 'm';
        newS = true;
        //console.log('-');
    } else {
        ravno();
    }
});

bu.addEventListener('click', () => {
    if (s1 === undefined) {
        s1 = disp.value;
        oper = 'u';
        newS = true;
        //console.log('*');
    } else {
        ravno();
    }
});

function ravno() {
    //console.log('oper: ', oper);
    switch (oper) {

        case 'd':
            disp.value = s1 / disp.value;
            break;
        case 's':
            disp.value = +s1 + +disp.value;
            break;
        case 'm':
            disp.value = +s1 - +disp.value;
            break;
        case 'u':
            disp.value = +s1 * +disp.value;
            break;
    }
    newS = true;
    oper = false;
    s1 = undefined;

};

br.addEventListener('click', ravno);

bt.addEventListener('click', () => {
    if ((newS) || (disp.value === '0') || (disp.value === '')) {
        disp.value = '0.';
        newS = false;
    } else {
        disp.value += '.';
    }
});