 const productList = [
    {
      id: 1,
      productName: "Unleashed",
      productPrice: 24.0,
      quantityAvailable: 100,
      imageURL:
        "https://productimages.hepsiburada.net/l/36/600-800/10531719315506.jpg",
      subImages: [
        "https://static.wixstatic.com/media/107c0e_e10ba2267bb0433da110b1ad68c1ad9a~mv2.jpeg/v1/fill/w_816,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/107c0e_e10ba2267bb0433da110b1ad68c1ad9a~mv2.jpeg",
        ,
        "https://productimages.hepsiburada.net/l/42/600-800/10733441515570.jpg",
      ],
      description:
        "An all-rounder body butter crafted with nourishing cold-pressed nut-butters, carrier oils, and essential oils.",
      scents: [
        "Shea Berry Melon",
        "Summer Rain",
        "Rose Petal",
        "Unleashed",
        "Coolmint",
        "Lavender",
      ],
      keyIngredients: [
        {
          name: "Shea Butter",
          description:
            "Shea butter provides hydration and helps repair damaged skin cells.",
        },
        {
          name: "Mango Butter",
          description: "Improves skin elasticity and promotes rejuvenation.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Deep Nourishment",
          description:
            "Provides deep nourishment and helps maintain optimal moisture for skin and hair.",
        },
      ],
    },
    {
      id: 2,
      productName: "Summer Rain",
      productPrice: 22.0,
      quantityAvailable: 80,
      imageURL:
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
      subImages: [
        "https://productimages.hepsiburada.net/l/36/600-800/10531719315506.jpg",
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
      ],
      description:
        "A refreshing blend of essential oils, perfect for summer hydration.",
      scents: ["Summer Rain", "Shea Berry Melon", "Lavender"],
      keyIngredients: [
        {
          name: "Coconut Oil",
          description: "Locks in moisture for all-day hydration.",
        },
        {
          name: "Almond Oil",
          description: "Rich in vitamins that improve skin texture.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Soothing Hydration",
          description: "Provides a cooling effect and calms irritated skin.",
        },
      ],
    },
    {
      id: 3,
      productName: "Lavender Bliss",
      productPrice: 26.0,
      quantityAvailable: 120,
      imageURL:
        "https://productimages.hepsiburada.net/l/37/1000/10550756540466.jpg",
      subImages: [
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
      ],
      description:
        "A calming lavender scent perfect for relaxing and soothing your skin.",
      scents: ["Lavender", "Rose Petal", "Coolmint"],
      keyIngredients: [
        {
          name: "Lavender Oil",
          description: "Reduces stress and promotes relaxation.",
        },
        {
          name: "Jojoba Oil",
          description: "Helps control excess oil and balances skin moisture.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Calming Effect",
          description:
            "Relieves stress and provides gentle hydration to the skin.",
        },
      ],
    },
    {
      id: 4,
      productName: "Shea Berry Melon",
      productPrice: 25.0,
      quantityAvailable: 90,
      imageURL:
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
        "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
      ],
      description:
        "A fruity and fresh body butter enriched with natural extracts for a rejuvenating experience.",
      scents: ["Shea Berry Melon", "Lavender", "Summer Rain"],
      keyIngredients: [
        {
          name: "Berry Extract",
          description: "Packed with antioxidants that promote skin health.",
        },
        {
          name: "Melon Oil",
          description: "Moisturizes and improves skin elasticity.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Skin Rejuvenation",
          description: "Promotes skin cell regeneration and improves elasticity.",
        },
      ],
    },
    {
      id: 5,
      productName: "Coolmint",
      productPrice: 23.0,
      quantityAvailable: 110,
      imageURL:
        "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
        "https://productimages.hepsiburada.net/s/22/500/9953271382066.jpg",
      ],
      description:
        "A minty fresh body butter that provides a refreshing cooling sensation to your skin.",
      scents: ["Coolmint", "Lavender", "Shea Berry Melon"],
      keyIngredients: [
        {
          name: "Peppermint Oil",
          description: "Provides a cooling sensation and soothes irritated skin.",
        },
        {
          name: "Tea Tree Oil",
          description: "Fights acne and promotes clearer skin.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Cooling Sensation",
          description:
            "Cools the skin and provides relief from irritation and inflammation.",
        },
      ],
    },
    {
      id: 6,
      productName: "Rose Petal",
      productPrice: 28.0,
      quantityAvailable: 75,
      imageURL:
        "https://productimages.hepsiburada.net/l/42/600-800/10733441515570.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/s/22/1500/9949777100850.jpg",
        "https://productimages.hepsiburada.net/s/38/1500/10583086202930.jpg",
      ],
      description:
        "Infused with rose petals and essential oils for luxurious hydration.",
      scents: ["Rose Petal", "Lavender", "Unleashed"],
      keyIngredients: [
        {
          name: "Rose Oil",
          description: "Softens skin and improves its texture.",
        },
        {
          name: "Grapeseed Oil",
          description: "Rich in antioxidants and promotes skin health.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Luxurious Hydration",
          description: "Leaves skin feeling soft, smooth, and nourished.",
        },
      ],
    },
    {
      id: 7,
      productName: "Citrus Splash",
      productPrice: 24.0,
      quantityAvailable: 130,
      imageURL:
        "https://productimages.hepsiburada.net/s/3/1500/9593922158642.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/s/21/1500/9933056540722.jpg",
        "https://productimages.hepsiburada.net/s/22/1500/9949777100850.jpg",
      ],
      description: "A zesty citrus blend that energizes and refreshes your skin.",
      scents: ["Citrus Splash", "Summer Rain", "Coolmint"],
      keyIngredients: [
        {
          name: "Orange Oil",
          description: "Brightens skin and reduces blemishes.",
        },
        {
          name: "Lemon Oil",
          description: "Energizes the skin and promotes a glowing complexion.",
        },
      ],
    //   benefitsAndUse…
    }]




let products =[
    {
        image:'images/6-piece-white-dinner-plate-set.jpg',
        description:'',
        price:''
    },
    {
        image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        description:'',
        price:''
    },
    {
        image:'images/athletic-cotton-socks-6-pairs.jpg',
        description:'',
        price:''
    },
    {
        image:'images/backpack.jpg',
        description:'',
        price:''
    },
    {
        image:'images/bathroom-rug.jpg',
        description:'',
        price:''
    },
    {
        image:'images/blackout-curtains-black.jpg',
        description:'',
        price:''
    },
    {
        image:'images/coffeemaker-with-glass-carafe-black.jpg',
        description:'',
        price:''
    },
    {
        image:'images/countertop-blender-64-oz.jpg',
        description:'',
        price:''
    },
    {
        image:'images/double-elongated-twist-french-wire-earrings.webp',
        description:'',
        price:''
    },
    {
        image:'images/electric-glass-and-steel-hot-water-kettle.webp',
        description:'',
        price:''
    },
    {
        image:'images/men-chino-pants-beige.jpg',
        description:'',
        price:''
    },
    {
        image:'images/men-cozy-fleece-zip-up-hoodie-red.jpg',
        description:'',
        price:''
    },
    
];

let custumerProductChose = JSON.parse(localStorage.getItem('custumerProductChose')) || [];

function saveCustumerProductChose(){
    localStorage.setItem('custumerProductChose', JSON.stringify(custumerProductChose))
}

let display_productsNumber = 0;

// console.log(document.getElementById('display_products'))

function displayProduct(){

   if( document.getElementById('display_products')){
    let display_products = document.getElementById('display_products')
    display_products.innerHTML = '';
    productList.forEach((product, i)=>{
        display_products.innerHTML +=  `
        <div class="border  border-gray-300 border-1 p-[10px] rounded flex flex-col justify-between">
        <div>
          <div class="h-[17rem]"> <img class="w-full h-full" src="${product.imageURL}" alt=""></div>
          <p class="font-bold my-[7px]">${product.description}</p>
       <p class="font-bold"> prise: $${product.productPrice}</p>
          <select class="m-[5px] p-[3px] rounded-lg productCount " name="productCount-${i}" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
        </div>
           <div><button   onclick="addToCart(${i})" class="my-[30px] w-full m-auto bg-yellow-600 rounded-lg py-[5px] text-white addToCartBtns">add to cart</button></div>
       </div>
        `
    })
   }
}
displayProduct()

function showProduckCount(){}

function addToCart(i) {
    // console.log(document.querySelector(`select[name="productCount-${i}"]`));
    const selectedCount = document.querySelector(`select[name="productCount-${i}"]`).value;
    
    

    let chosenProduct = {...productList[i]}

    console.log( chosenProduct);

    let matchingProduct= custumerProductChose.find(matchingProductObject=> matchingProductObject.imageURL === chosenProduct.imageURL)
    if(matchingProduct){
        matchingProduct.quantity += Number(selectedCount);
        console.log(matchingProduct.quantity)
        saveCustumerProductChose()
  
    }else{
        chosenProduct.quantity = Number(selectedCount);
        chosenProduct.cartId = `cart-${i}`;
        chosenProduct.chosenProductImg = chosenProduct.imageURL
        custumerProductChose.push(chosenProduct);
        console.log(chosenProduct.quantity);
        saveCustumerProductChose()

    }
console.log(chosenProduct);
countProduct()
}

 
moveToCartDisplay=()=>{
    window.location.href = 'https://samDev43.github.io/CheckoOut/cart.html';

}


function displayCartFunc(){
    let displayCart= document.getElementById('displayCart')
    displayCart.innerHTML = '';
    custumerProductChose.forEach((cartProduct, i)=>{
        let {id, productName, productPrice, quantityAvailable, imageURL, subImages, scents, keyIngredients} = cartProduct;
        let [wer] = scents
        let [mmm, yoy] = keyIngredients
        let {name, description} = mmm
        // let [name, description]= keyIngredients[0]
          displayCart.innerHTML +=`
          <div class="shadow-lg  border border-gray-300  border-[1px] rounded-lg overflow-hidden p-[20px] m-[10px] w">
          <div>
              <div class=" flex gap-[20px] items-start">
                   <div class="w-[80px]">
                     <img src="${imageURL}" alt="">
                   </div>
                   <div>
                       <p class="font-bold ">${description}</p>
                       <p>$${productPrice}</p>
                       <div class="flex items-center gap-[10px]"><p>Quantity: ${cartProduct.quantity}</p> <button>Update</button> <button  class=" hover:text-red-600 " onclick=" delFunc(${i})">Delete</button></div>
                   </div>
              </div>
            <div>
                  
            </div>
          </div>
        </div>
          `
          saveCustumerProductChose()
          checkPrice()
        })
    
}


countProduct()
displayCartFunc()

delFunc=(i)=>{
    custumerProductChose.splice(i,1)
    saveCustumerProductChose()
    displayCartFunc()
    countProduct()
    checkPrice()
}
if(document.querySelector('.toHomePage1')){
    document.querySelector('.toHomePage1').addEventListener('click', ()=>{
        window.location.href= 'http://127.0.0.1:5500/index.html'
    })
}

function countProduct(){
  if( document.querySelector('.display_productsnumb')){
    document.querySelector('.display_productsnumb').innerHTML = custumerProductChose.length 
    
  }
  if(document.getElementById('CheckoutItems')){
    document.getElementById('CheckoutItems').innerHTML = `Checkout (${custumerProductChose.length } items)`
  }
  // checkPrice()
  // console.log(document.querySelector('.display_productsnumb').innerHTML);
}

function checkPrice(){
  cost=0
  console.log(custumerProductChose);
  console.log();
  custumerProductChose.forEach((custumerProductChose)=>{4
    console.log(custumerProductChose.quantity);
    cost += custumerProductChose.productPrice*custumerProductChose.quantity
    console.log();
  })
  console.log(cost);
  let taxtCost=cost + (cost*10)/100
  console.log(taxtCost);
  document.getElementById('totalItem').innerHTML=`<p>items(${custumerProductChose.length }):</p><p>$${cost}</p>`
  document.getElementById('priceBefTask').innerHTML=`<p>Total before tax:</p><p>$${cost}</p>`
  document.getElementById('priceAftTask').innerHTML=`<p>Estimated tax (10%):</p><p>$${(cost*10)/100}</p>`
  document.getElementById('finalAmount').innerHTML=`<p>Order total:</p><p>$${taxtCost}</p>`
}

checkPrice()