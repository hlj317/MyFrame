import {parse} from './httpurl';
const params = parse().params;

export const isSupportCopy = document.queryCommandSupported && document.queryCommandSupported('copy');

export const getFormatDate = (timestamp) => {
    if (!timestamp) {
        return '';
    }
    const format = (num) => (num >= 10 ? num : `0${num}`);

    const date = new Date(+timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year}-${month}-${day} ${format(hour)}:${format(minute)}:${format(second)}`;
};
export const getFormatPrice = (price) => {
    price = String(price);
    return price.replace(/\d\d$/, (patt) => `.${patt}`);
};
