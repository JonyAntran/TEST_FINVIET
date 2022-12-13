
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.results[0];
    displayUser(user)

    // console.log(user);


}
function displayUser(user) {
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const imge = document.getElementById('imge');
    name.innerText = `${user.name.title} ${user.name.firts} ${user.name.last}`
    gender.innerText = `${user.gender} `

    email.innerText = `${user.email}`
    phone.innerText = `${user.phone}`
    location.innerText = `${user.location.country} `

    imge.setAttribute('src', `${user.picture.large}`)



}


getRandomUser();