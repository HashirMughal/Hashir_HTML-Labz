//fizzbuzz
//divisible by 3 = fizz
//divisible by 5 = buzz
//divisible by both = fizzbuzz
//not divisible by both = input
let 1=5;
if(i % 3 == 0 && i % 5 == 0){
    console.log(i,'FIZZBUZZ');
}else if(i % 3 == 0){
    console.log('FIZZ');
}else if(i % 5 == 0){
    console.log(i,'BUZZ');
}else if(i % 3 != 0 && i % 5 != 0){
    console.log(i);
}
else{
    console.log('not a number');
}
