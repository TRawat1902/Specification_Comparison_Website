

fetch('https://dummyjson.com/products').then((data)=>{
        return data.json();
    }).then(data=>{
       




        for (var i = 0; i < 10; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${data.products[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${data.products[i].title}</option>
    `;

}
    })











function item1(a) {
    
    var select2 = document.getElementById("select2").value;

    fetch('https://dummyjson.com/products').then((data)=>{
        return data.json();
    }).then((data)=>{
       


if (a != select2) 
    {

        document.getElementById("img1").src = data.products[a].images[0]
        document.getElementById("price1").innerHTML = "$ " + data.products[a].price
        document.getElementById("desc1").innerHTML = data.products[a].description
        document.getElementById("brand1").innerHTML = data.products[a].brand
       

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""

    }


}
    )


}

function item2(a) {
    
    var select1 = document.getElementById("select1").value;
    

fetch('https://dummyjson.com/products').then((data)=>{
        return data.json();
    }).then((data)=>
    {
       


if (a != select1) 
    {
        document.getElementById("img2").src = data.products[a].images[0]
        document.getElementById("price2").innerHTML = "$ " + data.products[a].price
        document.getElementById("desc2").innerHTML = data.products[a].description
        document.getElementById("brand2").innerHTML = data.products[a].brand
    } 
    else 
    {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }

}
    )

}




function darkMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
      }
      function lightMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
      }


    









