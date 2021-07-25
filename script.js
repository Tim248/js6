let UserName = prompt('Введите свое имя ')
let UserBirthYear = +prompt('Введите год рождения ')
let CurrentYear = +prompt('Введите нынешний год ')

function UserInfo(CurrentYear, UserBirthYear) {
    let Age = CurrentYear -  UserBirthYear;
    return Age
}
alert(UserName + ', ' + ' Ваш возраст ' + UserInfo(CurrentYear, UserBirthYear))