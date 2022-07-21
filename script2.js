

do{var a = prompt('Введите кол-во сторок: ')
}
while(isNaN(a));
    if(a==''){
    a=5}
    // else if(!isNaN(a)){
    //     a=5
    // }
do{var b = prompt('Введите любой символ : ')
}
while(b=="")
do{var c = prompt('Введите конечный символ: ')
}
while(c=="")

var d=''                                                                                       

for (let index = 0; index < a; index++) {
    d= b+d
    console.log(d+c);
}
