

do {
    var a = +prompt('Введите число');
    var b= +prompt("Введите степь которую хотите расчитать: ");
}while(a!=0 && b!=0 && isNaN(a) && isNaN(b)) {
    alert('Степень числа '+a+' равна ' +Math.pow(a, b))
}


// a = !isNaN(a) ? a :10

// let b = 2 < 4 ? '2 больше 4' : 'не верно'


