let product_items = document.getElementById("product_row");

window.fetch("../server/products/index.get.json").then((res) =>
  res.json().then((datas, i) => {
    console.log(datas);
    let product_datas = [];
    for (let product_cat of datas) {
        console.log(product_cat);
        product_datas += `
            <div class="card">
            <h1>${product_cat.name}</h1>
                <img src="${product_cat.imageURL}" alt="Denim Jeans" style="width:100%;height: 311px;">
                <p class="description">${product_cat.description}</p>
                 <p class="price"> MRP of ${product_cat.price}</p>
                 <p><button>Buy Now</button></p>
            </div>
            `;
        product_items.innerHTML = product_datas;
      
    }
  })
);
