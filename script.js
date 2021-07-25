let userName = prompt('Введите свое имя ')
let userBirthYear = +prompt('Введите год рождения ')
let currentYear = +prompt('Введите нынешний год ')

function userInfo(currentYear, userBirthYear) {
    let age = currentYear -  userBirthYear;
    return age
}
alert(userName + ', ' + ' Ваш возраст ' + userInfo(currentYear, userBirthYear))