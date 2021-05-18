const { checkNumber } = require('./helper')

const PI = Math.PI
const argvs = process.argv.slice(2)

argvs.forEach(e => {

    try {

        const modified = checkNumber(e)
        const area = (PI * e ** 2).toFixed(2)
        console.log(`Yarıçapını ${modified} girdiğiniz dairenin alanı: ${area}`)

    } catch (e) {

        console.log(e)

    }

})
