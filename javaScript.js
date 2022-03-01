const clicked = () => {

    const inputvalue = document.getElementById("search-box").value ;
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    fetch(url)
    .then(res => res.json())
    .then(data => allPhone(data.data));
    console.log(inputvalue)
}
clicked ()
const allPhone = phone =>{
    phone.forEach(phone => {
        console.log(phone)
    })
} 