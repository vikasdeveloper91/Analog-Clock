setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hrotation = 30*h + m/2;
    let mrotation = 6*m;
    let srotation = 6*s;

    hour.style.transform=`rotate(${hrotation}deg)`
    mins.style.transform=`rotate(${mrotation}deg)`
    secs.style.transform=`rotate(${srotation}deg)`

    
}, 1000);