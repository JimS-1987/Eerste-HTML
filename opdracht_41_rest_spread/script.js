const sum = function (...numbers) {

    return numbers.reduce((number, value) => {
        return number + value;

    })

}

console.log(sum(4, 5, 6, 7, 10, 12))

const spread = function (x, y, z) {
    return x + y + z;

};
const nums = [1, 2, 3];

console.log(sum(...nums))
