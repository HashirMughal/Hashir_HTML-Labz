//fizzbuzz
//divisible by 3 = fizz
//divisible by 5 = buzz
//divisible by both = fizzbuzz
//not divisible by both = input
for(let i = 3; i<=45; i++ ){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i,'FIZZBUZZ');
    }
    else if(i % 3 == 0){
        console.log(i,'fizz')
    }
    else if(i % 5 == 0){
        console.log(i,'buzz')
    }
    else{
        console.log(i,'Not Divisible by both');
    }
}