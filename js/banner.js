let product_items = document.getElementById("product_row");

window.fetch("server/categories/index.get.json").then((res) =>
  res.json().then((datas,i) => {
      console.log(datas)
    let sortedInput = datas.slice().sort((a, b) => a.order - b.order);
      console.log(sortedInput);
    let product_datas = [];
    for (let product_cat of sortedInput) {
        if(product_cat.enabled){
           
            console.log(product_cat);
            product_datas += `
            <div class="card" ">
            <div class="card_side1">
            <img src="${product_cat.imageUrl}" class="card-img-top">
            </div>
            <div class='card_side2'>
            <h5 class="card-title">${product_cat.name}</h5>
            <p class="card-text">${product_cat.description}</p>
            <button type="button" class="btn btn-primary">Explore ${product_cat.key}</button>
            </div>
          </div>
          <hr/>
            `;
            product_items.innerHTML = product_datas;
        }
     
    }
  })
);
