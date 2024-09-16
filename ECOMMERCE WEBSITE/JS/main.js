let products = [
   {Image: "images/pexels-godisable-jacob-226636-1308324.jpg", Name: "stiletto heels", Price: 2000,CODE: "C200"},
   {Image: "images/pexels-jose-martin-segura-benites-1422456152-27204280.jpg", Name: "stiletto heels", Price: 2000,CODE: "C200"},
   {Image: "images/pexels-withoguz-27077914.jpg", Name: "canvas", Price: 2000,CODE: "C200"},
   {Image: "images/Shallow Cut Square-Toe Mary Janes Pumps BLACK-US 8 _ EU 38 2_3 _ UK 5_5 _ CN 39.jpeg",Name: "square heels",Price: 1200,CODE: "M400"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "spoon heels",Price: 2000,CODE: "F101"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg", Name: "wedged heels",Price: 5000,CODE: "D201"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "commas heels",Price: 5000,CODE: "B202"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "fantasty heels",Price:3000,CODE: "P505"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "cone heels",Price:4200,CODE: "S606"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "platform wedge",Price: 100,CODE: "O303"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "mule heels",Price:200,CODE: "G404"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "kitten heels",Price: 300,CODE: "W707"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "mary jane platform",Price:1200,CODE: "B808"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "timberland",Price: 1000,CODE: "A909"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "knee boot",Price: 5000,CODE: "M1010"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "scandal boot",Price: 5000,CODE: "B1111"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "pump",Price:4000 ,CODE: "A290"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "biker boot",Price:5000 ,CODE: "C778"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "princess shoes",Price:6000 ,CODE: "D237"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "cuff boots",Price:7000 ,CODE: "E838"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "prada",Price:8000 ,CODE: "F894"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "nude heel",Price:9000 ,CODE: "G973"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "cros",Price:10000 ,CODE: "H132"},
   {Image: "images/Heels _ Premium Satin Diamante Bow Heels _ MissPap.jpeg",Name: "frye boots",Price:11000 ,CODE: "I423"}
  
]


function displayProducts() {
   for (let i = 0; i < products.length; i++) {
       let product = products[i];
       let productDiv = document.getElementById(`product${i + 1}`)
       productDiv.innerHTML = `
           <img src="${product.Image}"
           alt="${product.Name}">
           <p>${product.Name}</p>
           <p>price: ${product.Price}</p>
           <a href="#" class="View-button" onclick="window.open('/checkout.html?${product.CODE}', '_blank');">View</a>
       `
   }
}

displayProducts()