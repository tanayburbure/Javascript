function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
    return counter;
}

var sent = counter();
sent(); 
sent(); 
sent(); 

