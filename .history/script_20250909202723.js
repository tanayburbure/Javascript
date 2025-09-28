function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
counter()();
counter()();
counter()();
counter()();
counter()();
// var sent = counter();
// sent(); 
// sent(); 
// sent(); 

