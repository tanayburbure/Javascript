function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
counter();