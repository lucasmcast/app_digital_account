/**
 * format the number in money format
 * 
 * @param {Integer} amount 
 * @param {Integer} decimalCount 
 * @param {String} decimal 
 * @param {String} thousands 
 */
export const formatMoney = (amount, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

/**
 * Return title Case string
 * @param {String} str 
 */
export const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


export const formatStringDate = (date) => {
    try {
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()

        let stringDay = '';
        let stringMonth = '';

        if (day < 10) {
            stringDay = `0${day.toString()}`
        } else {
            stringDay = day.toString()
        }
        if (month < 10) {
            stringMonth = `0${month.toString()}`
        } else {
            stringMonth = month.toString()
        }

        let dateString = `${year.toString()}-${stringMonth}-${stringDay}`

        return dateString

    } catch (e) {
        throw new Error("Paramentro não é do tipo Date()")
    }

}

export const getMonthString = (dateString) => {
    let dateArray = dateString.split("-")

    return dateArray[1]
}
