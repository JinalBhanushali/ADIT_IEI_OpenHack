const second = 1000;
const minute = second * 60;
const hour   = minute * 60;
const day    = hour * 24;

window.onload = () => {
    countdown();
};

countdown = () => {
    const event    = new Date("Feb 16, 2021 00:00:00").getTime();
    const current  = new Date().getTime();
    const timeDiff = event - current;

    if (timeDiff > 0) {
        const d = Math.floor(timeDiff / day).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false, });
        const h = Math.floor((timeDiff % day) / hour).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false, });
        const m = Math.floor((timeDiff % hour) / minute).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false, });
        const s = Math.floor((timeDiff % minute) / second).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false, });

        document.getElementById("day").innerHTML    = `<div>${d}<\div>`;
        document.getElementById("hour").innerHTML   = `<div>${h}<\div>`;
        document.getElementById("minute").innerHTML = `<div>${m}<\div>`;
        document.getElementById("second").innerHTML = `<div>${s}<\div>`;
        
        const root = document.querySelector(":root");
        if (Math.floor((timeDiff % minute) / second) % 2 == 0) {
            root.style.setProperty("--pseudo-text", "rgba(255, 255, 255)");
        } else {
            root.style.setProperty("--pseudo-text", "rgba(255, 255, 255, 0.4)");
        }

        setTimeout(() => {
            countdown();
        }, 1000);
    } else {
        document.getElementById("day").innerHTML    = `<div>00<\div>`;
        document.getElementById("hour").innerHTML   = `<div>00<\div>`;
        document.getElementById("minute").innerHTML = `<div>00<\div>`;
        document.getElementById("second").innerHTML = `<div>00<\div>`;
    }
};