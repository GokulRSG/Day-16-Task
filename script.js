let timecount = document.getElementById("timecount");
console.log(timecount);

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    setTimeout(()=>{
                                        setTimeout(()=>{
                                            timecount.innerText = "Indian Independence Day";
                                        },1000);
                                        timecount.innerText = "1";
                                    },1000);
                                    timecount.innerText = "2";
                                },1000);
                                timecount.innerText = "3";
                            },1000);
                            timecount.innerText = "4";
                        },1000);
                        timecount.innerText = "5";
                    },1000);
                    timecount.innerText = "6";
                }, 1000);
                timecount.innerText = "7";
            }, 1000);
            timecount.innerText = "8";
        }, 1000);
        timecount.innerText = "9";
    }, 1000);
    timecount.innerText = "10";
}, 1000);