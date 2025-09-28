// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var sent = counter();
// sent(); 
// sent(); 
// sent(); 

// var sent2 = counter();
// sent2(); 
// sent2(); 


function counter(){
    var count = 0;
    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
}