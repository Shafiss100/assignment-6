const clicked = () => {

    const inputvalue = document.getElementById("search-box").value ;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputvalue}`
    fetch(url)
    .then(res => res.json())
    .then(data => allPhone(data.data));
}


const allPhone = phone =>{
    document.getElementById("search-box").value = "";
    document.getElementById("card-list").innerHTML= "";
    document.getElementById("details").innerHTML = "";
    phone.forEach(phone => {
        const card = document.getElementById("card-list");
        const div = document.createElement("div");
        

        div.innerHTML = `
        <div>
            <div class="card " style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p>Phone Name : ${phone.phone_name}</p>
                           
                <p>Slug : ${phone.slug}</p>
                              
                <a href="#" onclick="details('${phone.slug}')" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        `
        card.appendChild(div);
    })
}




const details = (details) => {
    document.getElementById("details").innerHTML = "";
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detailsCard(data.data))
}




const detailsCard = details => {
    const detailsContainer = document.getElementById("details");
    const div = document.createElement("div");
    console.log(details);
    div.innerHTML = `
    <div>
    <div class="card " style="width: 18rem;">
        <img src="${details.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <p>Brand : ${details.brand}</p>
            
            <p>Name : ${details.name} </p>

            <p>Relese date : ${details.releaseDate} </p>

            <p>Chipset :  ${details.mainFeatures.chipSet}</p>

            <p>Display size :  ${details.mainFeatures.displaySize}</p>

            <p>Memory :  ${details.mainFeatures.memory}</p>

            <p>Storage :  ${details.mainFeatures.storage}</p>

        </div>
    </div>
</div>
    `;
    detailsContainer.appendChild(div);
}