exports.checkNumber = function (val) {

    const modifiedVal = parseFloat(val)
    if ( ! (modifiedVal == val)) {
        throw 'Lütfen sadece sayısal değer giriniz.'
    }
    return modifiedVal

}

