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


function Counter(){
    var count = 0;
    this.increment= function(){
        count++;
        console.log(count);
    }
    this.decrement= function(){
        count--;
        console.log(count);
    }
}

var sent = new Counter();
sent.increment();
sent.increment();
sent.decrement();
sent.decrement();
sent.decrement();
sent.decrement();
sent.decrement();