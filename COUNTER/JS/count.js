let enddate = "11 JULY 2024 03:10 PM"
document.getElementById("enddate").innerText = enddate;
let inputs = document.querySelectorAll("input")
function clock() {
    let end = new Date(enddate)
    let now = new Date()
    let totalsec = (end - now) / 1000
    console.log(totalsec)
    oneday = 3600 / 24

    let remainingdays = Math.floor(totalsec / 3600 / 24);
    let remaininghrs = Math.floor((totalsec / 3600) % 24);
    let remainingmin = Math.floor((totalsec / 60) % 60);
    let remainingsec = Math.floor(totalsec % 60);

    if (remainingsec <0) {
        clearInterval(intervel1)
    }
    else {
        inputs[0].value = remainingdays;
        inputs[1].value = remaininghrs;
        inputs[2].value = remainingmin
        inputs[3].value = remainingsec
    }


}
let intervel1 = setInterval(clock, 1000)
// let clock;

// clock = setInterval(() => {
//     let end = new Date(enddate)
//     let now = new Date()
//     let totalsec = (end - now) / 1000
//     console.log(totalsec)
//     oneday = 3600 / 24


//     let remainingdays = Math.floor(totalsec / 3600 / 24);
//     inputs[0].value = remainingdays;
//     let remaininghrs = Math.floor((totalsec / 3600) % 24);
//     inputs[1].value = remaininghrs;
//     let remainingmin = Math.floor((totalsec / 60) % 60);
//     inputs[2].value = remainingmin
//     let remainingsec = Math.floor(totalsec % 60);
//     inputs[3].value = remainingsec
//     if (remainingsec <= 0) {
//         clearInterval(clock)
//         console.log("hello")
//         alert("Congratulations!")
//     }

// }, 1000);



