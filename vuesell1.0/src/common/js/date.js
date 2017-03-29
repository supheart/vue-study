export function formatDate(date, formatType) {
    if (/(y+)/.test(formatType)) {
        formatType = formatType.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let regObj = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let i in regObj) {
        if (new RegExp(`(${i})`).test(formatType)) {
            let str = regObj[i] + '';
            formatType = formatType.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }
    return formatType;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
