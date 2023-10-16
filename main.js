// function print(a, s, d, f, g){
//     console.log(a);
//     console.log(s);
//     console.log(d);
//     console.log(f);
//     console.log(g);
// }

// print(12,23,2,24,24)


let clac = function(a,b,c){
    if(c=="+"){
        return a+b;
    }else if(c=="-"){
        return a-b;
    }else if(c=="/"){
        return a/b
    }else if(c=="*"){
        return a*b
    }else{
        return "bizda bunday amal hali qo'shilmagan"
    }
}

console.log(clac(1,23,"*"));