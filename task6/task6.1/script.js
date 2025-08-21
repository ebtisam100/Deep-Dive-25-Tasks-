let container = document.getElementById("productsContainer")

fetch("https://fakestoreapi.com/products")
.then(function (res)
    {return res.json()})
.then( function (products){
    products.forEach( function (item){
        let card = document.createElement("div")
        card.id="card"

        let img = document.createElement("img")
        img.src = item.image

        let t = document.createElement("h3")
        t.innerHTML = item.title

        let c = document.createElement("p")
        c.innerHTML = item.category

        let pr = document.createElement("div")
        pr.id = "p-r"

        let p = document.createElement("p")
        p.innerHTML = item.price + " $"

        let r = document.createElement("p")
        r.innerHTML = "Rating: " + item.rating.rate

        pr.appendChild(p)
        pr.appendChild(r)

        let btn = document.createElement("button")
        btn.id="button"
        btn.innerHTML = "Show Details"
        btn.addEventListener("click",
            function()
                {alert(item.description)})

        card.appendChild(img)
        card.appendChild(t)
        card.appendChild(c)
        card.appendChild(pr)
        card.appendChild(btn)
        container.appendChild(card)
    })
})
