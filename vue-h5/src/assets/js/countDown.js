let countDown = function (eTime, cb) {
    const n1000 = 1000;
    const n24 = 24;
    const n60 = 60;
    let times = {};

    let curTime = new Date().getTime();
    let endTime = eTime * n1000;
    let addZero = function (num) {
        const n10 = 10;
        return num < n10 ? `0${num}` : num;
    };
    let setTime = function (offset) {
        if (offset <= 0) {
            cb && cb();
            times = {};
            return;
        }
        let days = Math.floor(offset / (n24 * n60 * n60 * n1000));
        let l1 = offset % (n24 * n60 * n60 * n1000);
        let l2 = l1 % (n60 * n60 * n1000);
        let l3 = l2 % (n60 * n1000);

        times = {
            days: addZero(days),
            hours: addZero(Math.floor(l1 / (n60 * n60 * n1000))),
            minutes: addZero(Math.floor(l2 / (n60 * n1000))),
            seconds: addZero(Math.floor(l3 / n1000)),
        };
    };
    let getOffset = function (t1, t2) {
        return t2 - t1;
    };
    setTime(getOffset(curTime, endTime));
    return {
        days: times.days,
        hours: times.hours,
        minutes: times.minutes,
        seconds: times.seconds,
    };
};

export default countDown;
