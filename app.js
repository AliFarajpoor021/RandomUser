let $ = document
let userNameTitle = $.querySelector(".user-name-title")
let userProfileImage = $.querySelector(".user-profile-image")
let userNameSpan = $.querySelector(".li-span-name")
let userLastNameSpan = $.querySelector(".li-span-last-name")
let userAgeSpan = $.querySelector(".li-span-age")
let profileToShow = $.querySelector(".container-profile-box-show")
let firstText = $.querySelector(".first-text")
let secondText = $.querySelector(".second-text")
let mailSelectBtn = $.querySelector(".mail")
let mapSelectBtn = $.querySelector(".map")
let phoneSelectBtn = $.querySelector(".phone")
let lockSelectBtn = $.querySelector(".lock")
let generatButton = $.querySelector(".generat-btn")
let emailAddress
let Address
let phoneNumber
let password
let generateUser = () => {
    fetch("https://randomuser.me/api")
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                return new Error(":((")
            }
        })
        .then((data) => {
            userNameTitle.innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`
            userProfileImage.src = `${data.results[0].picture.large}`
            userNameSpan.innerHTML = `${data.results[0].name.first}`
            userLastNameSpan.innerHTML = `${data.results[0].name.last}`
            userAgeSpan.innerHTML = `${data.results[0].dob.age}`
            emailAddress = `${data.results[0].email}`
            let activedButton = $.querySelector(".active")
            activedButton.classList.remove("active")
            mailSelectBtn.classList.add("active")
            firstText.innerHTML = "My Email Address is:"
            secondText.innerHTML = emailAddress
            let bgc = mailSelectBtn.getAttribute("style");
            profileToShow.setAttribute("style", bgc);
            Address = `${data.results[0].location.country} ${data.results[0].location.city} `
            phoneNumber = `${data.results[0].cell} `
            password = `${data.results[0].login.password} `
            console.log(data.results[0]);
        })
}
let mailInformation = () => {
    let activedButton = $.querySelector(".active")
    activedButton.classList.remove("active")
    mailSelectBtn.classList.add("active")
    firstText.innerHTML = "My Email Address is:"
    secondText.innerHTML = emailAddress
    let bgc = mailSelectBtn.getAttribute("style");
    profileToShow.setAttribute("style", bgc)
}
let mapInformation = () => {
    let activedButton = $.querySelector(".active")
    activedButton.classList.remove("active")
    mapSelectBtn.classList.add("active")
    firstText.innerHTML = "My Address is:"
    secondText.innerHTML = Address
    let bgc = mapSelectBtn.getAttribute("style");
    profileToShow.setAttribute("style", bgc)
}
let phoneInformation = () => {
    let activedButton = $.querySelector(".active")
    activedButton.classList.remove("active")
    phoneSelectBtn.classList.add("active")
    firstText.innerHTML = "My phone number is: "
    secondText.innerHTML = phoneNumber
    let bgc = phoneSelectBtn.getAttribute("style");
    profileToShow.setAttribute("style", bgc)
}
let lockInformation = () => {
    let activedButton = $.querySelector(".active")
    activedButton.classList.remove("active")
    lockSelectBtn.classList.add("active")
    firstText.innerHTML = "My password is: "
    secondText.innerHTML = password
    let bgc = lockSelectBtn.getAttribute("style");
    profileToShow.setAttribute("style", bgc)
}
window.addEventListener("load", function () {
    generateUser()
})
mailSelectBtn.addEventListener("click", mailInformation)
mapSelectBtn.addEventListener("click", mapInformation)
lockSelectBtn.addEventListener("click", lockInformation)
phoneSelectBtn.addEventListener("click", phoneInformation)
generatButton.addEventListener("click", generateUser)