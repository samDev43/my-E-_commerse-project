  let dataElectronics= []
  let dataJewelry = []
  let dataMenCloth = []
  
  let customerProductChose = JSON.parse(localStorage.getItem('customerProductChose')) || [];
  let cost = 0;
  let taxtCost = 0;
// customerProductChose = [];
// saveCustumerProductChose()

function saveCustumerProductChose(){
    localStorage.setItem('customerProductChose', JSON.stringify(customerProductChose))
}

let display_productsNumber = 0;



function displayElectronic(dataElectronicsParm){
  if(document.getElementById('display_productsElectonics')){
    console.log(dataElectronicsParm);
    console.log(dataElectronicsParm);
    display_productsElectonics.innerHTML = '';
  }
  if(dataElectronicsParm.length === 0){
    // display_productsElectonics.innerHTML = 'no Electonics product found'
  }else
  dataElectronicsParm.forEach((product, i)=>{
    let {price,image,title} =product
    // console.log(price,product);
    display_productsElectonics.innerHTML +=  `
    <div class=" border bg-white border-gray-300 border-1 p-[10px] rounded flex flex-col justify-between">
    <div>
      <div class="h-[17rem]" onclick="viewProductIfoElectronics(${i})"> <img class="w-full h-full cursor-pointer" src="${image}" alt=""></div>
      <p class="font-bold my-[7px]">${title}</p>
   <p class="font-bold"> prise: $${price}</p>
      <select class="m-[5px] p-[3px] rounded-lg productCount " name="productCountElectronics-${i}" id="">
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
       <div><button id="addelEctronicsToCartEl"   onclick="addelEctronicsToCart(${i}, 'electronics')" class="my-[30px] w-full m-auto bg-yellow-500 transition duration-400 hover:bg-yellow-600 rounded-lg py-[5px] text-white addToCartBtns">add to cart</button></div>
   </div>
    `
  })
}


async function moreProductElectronics(){

  if(document.getElementById('display_productsElectonics')){
    spinnerEl.classList.remove('hidden')
    document.querySelectorAll('.productHeading').forEach((productHeadings)=>{
      productHeadings.classList.add('hidden')
    })
    // display_productsElectonics.innerHTML = spinnerEl.innerHTML
    try{
    let res = await fetch('https://fakestoreapi.com/products/category/electronics')
    dataElectronics = await res.json()
    // let display_products = document.getElementById('display_products')
    displayElectronic(dataElectronics)
    spinnerEl.classList.add('hidden')
    document.querySelectorAll('.productHeading').forEach((productHeadings)=>{
      productHeadings.classList.remove('hidden')
    })
  }catch(error){
    spinnerEl.classList.add('hidden')
    console.log(error);
  }

  }
  }
  if(moreProductElectronics){
    moreProductElectronics()
  }

function displayJewelery(dataJewelryParam){
 if(document.getElementById('display_productsJewelery)')){
  display_productsJewelery.innerHTML = '';
 }
  if(dataJewelryParam.length == 0){
    display_productsJewelery.innerHTML = 'no jewelery product found'
  }else{
    dataJewelryParam.forEach((product, i)=>{
      let {price,image,title} =product
      display_productsJewelery.innerHTML +=  `
      <div class="border bg-white border-gray-300 border-1 p-[10px] rounded flex flex-col justify-between">
      <div>
        <div class="h-[17rem]" onclick="viewProductIfoJewelery(${i})"> <img class="w-full h-full cursor-pointer " src="${image}" alt=""></div>
        <p class="font-bold my-[7px]">${title}</p>
     <p class="font-bold"> prise: $${price}</p>
        <select class="m-[5px] p-[3px] rounded-lg productCount " name="productCountJewelery-${i}" id="">
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
         <div><button id="addeljeweleryToCartEl"  onclick="addJeweleryToCart(${i}, 'jewelery')" class="my-[30px] w-full m-auto bg-yellow-500 transition duration-400 hover:bg-yellow-600 rounded-lg py-[5px] text-white addToCartBtns">add to cart</button></div>
     </div>
      `
    })
    
  }
}
async function moreProductJewelery(){

  if(document.getElementById('display_productsJewelery')){
    
    try{
      spinnerEl.classList.remove('hidden')
      let res = await fetch('https://fakestoreapi.com/products/category/jewelery')
      dataJewelry = await res.json()
      spinnerEl.classList.add('hidden')
    displayJewelery(dataJewelry)
  }catch(error){
    console.log(error);
    display_error.innerHTML=`
    <div class="w-full h-[50rem] flex justify-center items-center" >
    <div class="container mx-auto px-4 py-6">
        <!-- Error Message (hidden by default) -->
        <div id="error-message" class=" bg-red-700 border border-red-400 text-red-100 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Oops!</strong>
          <span class="block sm:inline">Something went wrong. Please try again later.</span>
          <p> ${error}</p>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-8 w-8 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1 1 0 001.415 0l.086-.086a1 1 0 000-1.415l-4.243-4.243 4.243-4.243a1 1 0 000-1.415l-.086-.086a1 1 0 00-1.415 0L10 8.586 5.757 4.343a1 1 0 00-1.415 0l-.086.086a1 1 0 000 1.415l4.243 4.243-4.243 4.243a1 1 0 000 1.415l.086.086a1 1 0 001.415 0L10 12.414l4.243 4.243z"/></svg>
          </span>
        </div>
      </div>
</div>
    `
  }

  }
}
if(moreProductJewelery){
  moreProductJewelery() 

}
function displayMensProduct(dataMenClothParam){
  display_productMenCloth.innerHTML='';
  if(dataMenClothParam.length ===0){
    display_productMenCloth.innerHTML = "no men's cloth found"
  }else{
    dataMenClothParam.forEach((product, i)=>{
      let {price,image,title} =product
      console.log();
      // console.log(price,product);
      display_productMenCloth.innerHTML +=  `
      <div class=" border bg-white border-gray-300 border-1 p-[10px] rounded flex flex-col justify-between">
      <div>
        <div class="h-[17rem]" onclick="viewProductIfoMenCloth(${i})"> <img class="w-full h-full cursor-pointer" src="${image}" alt=""></div>
        <p class="font-bold my-[7px]">${title}</p>
     <p class="font-bold"> prise: $${price}</p>
        <select class="m-[5px] p-[3px] rounded-lg productCount " name="productCountMenCloth-${i}" id="">
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
         <div><button id="addMenClothToCartEl" onclick="addMenClothToCart(${i}, 'MenCloth')" class="my-[30px] w-full transition duration-400 m-auto bg-yellow-500 hover:bg-yellow-600 rounded-lg py-[5px] text-white addToCartBtns">add to cart</button></div>
     </div>
      `
    
    })
    
  }

}
async function moreProductMenCloth(){
  if(document.getElementById('display_productMenCloth')){
    spinnerEl.classList.remove('hidden')
    try{
    let res = await fetch("https://fakestoreapi.com/products/category/men's clothing")
    spinnerEl.classList.add('hidden')
    dataMenCloth = await res.json()
    // let display_products = document.getElementById('display_products')
    displayMensProduct(dataMenCloth)
  }catch(error){
    console.log(error);
  }

  }
}
if(moreProductMenCloth){
  moreProductMenCloth()
}

function addelEctronicsToCart(i) {
  const selectedCount = document.querySelector(`select[name="productCountElectronics-${i}"]`).value;
  let actualProduct = dataElectronics[i];
  let matchingProduct= customerProductChose.find(matchingProductObject=> matchingProductObject.id === actualProduct.id)
  if(matchingProduct){
        matchingProduct.quantity += Number(selectedCount);
        saveCustumerProductChose()
  
    }else{
      actualProduct.quantity = Number(selectedCount);
      actualProduct.cartId = `cart-${i}`;
      actualProduct.chosenProductImg = actualProduct.imageURL
        customerProductChose.push(actualProduct);
        saveCustumerProductChose()

    }
    $.toast({
      heading: 'Added to Cart',
      text: `Added ${selectedCount} of ${actualProduct.title} to your cart.`,
      icon: 'success',
      position: 'top-right',
      hideAfter: 3000,
      stack: false
  });
// console.log(chosenProduct);
countProduct()
}


function addJeweleryToCart(i) {
  const selectedCount = document.querySelector(`select[name="productCountJewelery-${i}"]`).value;
  console.log(customerProductChose);
  let actualProduct = dataJewelry[i];
  console.log(actualProduct);
  let matchingProduct= customerProductChose.find(matchingProductObject=> matchingProductObject.id === actualProduct.id)
  console.log(matchingProduct);
  if(matchingProduct){
      console.log(selectedCount);
        matchingProduct.quantity += Number(selectedCount);
        console.log(matchingProduct.quantity)
        saveCustumerProductChose()
  
    }else{
      actualProduct.quantity = Number(selectedCount);
      actualProduct.cartId = `cart-${i}`;
      actualProduct.chosenProductImg = actualProduct.imageURL
        customerProductChose.push(actualProduct);
        saveCustumerProductChose()

    }
    $.toast({
      heading: 'Added to Cart',
      text: `Added ${selectedCount} of ${actualProduct.title} to your cart.`,
      icon: 'success',
      position: 'top-right',
      hideAfter: 3000,
      stack: false
  });
// console.log(chosenProduct);
countProduct()
}


function addMenClothToCart(i) {
  const selectedCount = document.querySelector(`select[name="productCountMenCloth-${i}"]`).value;
  console.log(customerProductChose);

  let actualProduct = dataMenCloth[i];
  console.log(actualProduct);
  let matchingProduct= customerProductChose.find(matchingProductObject=> matchingProductObject.id === actualProduct.id)
  console.log(matchingProduct);
  if(matchingProduct){
      console.log(selectedCount);
        matchingProduct.quantity += Number(selectedCount);
        console.log(matchingProduct.quantity)
        saveCustumerProductChose()
  
    }else{
      actualProduct.quantity = Number(selectedCount);
      actualProduct.cartId = `cart-${i}`;
      actualProduct.chosenProductImg = actualProduct.imageURL
        customerProductChose.push(actualProduct);
        saveCustumerProductChose()

    }
    $.toast({
      heading: 'Added to Cart',
      text: `Added ${selectedCount} of ${actualProduct.title} to your cart.`,
      icon: 'success',
      position: 'top-right',
      hideAfter: 3000,
      stack: false
  });
// console.log(chosenProduct);
countProduct()
}

 
moveToCartDisplay=()=>{
    window.location.href = 'https://samdev43.github.io/my-E-_commerse-project/cart.html';
    // window.location.href = 'http://127.0.0.1:5500/cart.html'

}


function displayCartFunc(){
  if(document.getElementById('displayCart')){
    let displayCart= document.getElementById('displayCart')
    displayCart.innerHTML = '';
    // customerProductChose = [];
    if(customerProductChose.length > 0){
      customerProductChose.forEach((cartProduct, i)=>{
          let {id, productName, price, description, image, title, scents, keyIngredients} = cartProduct;
          // console.log(subImages)
            displayCart.innerHTML +=`
            <div class="shadow-lg  bg-orange-400 border text-white  border-[1px] rounded-lg overflow-hidden p-[20px] m-[10px]">
            <div>
                <div class=" flex gap-[20px] items-start">
                     <div class="w-[80px]">
                       <img src="${image}" alt="">
                     </div>
                     <div>
                         <p class="font-bold sm:text-sm">${title}</p>
                         <p>$${price}</p>
                         <div class="flex items-center sm:text-sm  gap-[10px]"><p  id="quantity_${i}">quantity: ${cartProduct.quantity}</p> <button class="hover:text-green-600"
                          onclick="showUpdateBTN(${i})">Update</button> <button  class=" hover:text-red-600 " onclick=" delFunc(${i})">Delete</button>
                           <button id="removeIncANDecBTN_${i}" onclick="removeIncANDecBTNFUNC(${i})" class="hidden">Done</button></div>
                         <div  id="UpdateBTN_${i}"  class="hidden flex items-center mt-[20px]">
                               <button class="p-2 shadow-lg  transition duration-1000  hover:bg-gray-500 hover:text-white w-[30%] bg-white rounded-lg  text-black mx-[10px]" onclick="decreaseQuantityFunc(${i})">-</button>
                               <button class="p-2 shadow-lg transition duration-1000  hover:bg-gray-500 hover:text-white w-[30%] bg-white rounded-lg  text-black mx-[10px]" onclick="increaseQuantityFunc(${i})">+</button>
                           </div>
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
          

    }else{
      displayCart.innerHTML =`<p class="text-white font-bold text-2xl">No product added yet</p>`
    }
    
  }
    
}


countProduct()
displayCartFunc()

delFunc=(i)=>{
  customerProductChose.splice(i,1)
    saveCustumerProductChose()
    displayCartFunc()
    countProduct()
    checkPrice()
}

if(document.getElementById('searchINP')){

  searchINP.addEventListener('input', (()=>{
   searchElectronicsProduct = dataElectronics.filter((check => check.title.toLocaleLowerCase().includes(searchINP.value.toLocaleLowerCase())));
   searchdataJewelryProduct = dataJewelry.filter((check => check.title.toLocaleLowerCase().includes(searchINP.value.toLocaleLowerCase())));
   searchdataMenClothProduct = dataMenCloth.filter((check => check.title.toLocaleLowerCase().includes(searchINP.value.toLocaleLowerCase())));
    if(document.getElementById('display_productsElectonics')){
      displayElectronic(searchElectronicsProduct)
    }
    if(document.getElementById('display_productsJewelery')){
      displayJewelery(searchdataJewelryProduct)
    }  
    if(document.getElementById('display_productMenCloth')){
      displayMensProduct(searchdataMenClothProduct)
    }
   console.log(searchElectronicsProduct, searchdataJewelryProduct ,searchdataMenClothProduct);
  }))
}

function showUpdateBTN(index){
  let updateBtn = document.getElementById(`UpdateBTN_${index}`);
  document.getElementById(`removeIncANDecBTN_${index}`).classList.toggle('hidden');
  if (updateBtn) {
    updateBtn.classList.toggle('hidden'); 
  }
}

function removeIncANDecBTNFUNC(index){
  document.getElementById(`UpdateBTN_${index}`).classList.add('hidden')
  document.getElementById(`removeIncANDecBTN_${index}`).classList.add('hidden');
}

function increaseQuantityFunc(index){
  customerProductChose[index].quantity+=1
  document.getElementById(`quantity_${index}`).innerHTML =`quantity: ${customerProductChose[index].quantity}`
  countProduct()
  checkPrice()

  saveCustumerProductChose();
}

function decreaseQuantityFunc(index){
  if(customerProductChose[index].quantity > 1){
    customerProductChose[index].quantity-=1
     document.getElementById(`quantity_${index}`).innerHTML =`quantity: ${customerProductChose[index].quantity}`
     checkPrice()
     countProduct()
     
     saveCustumerProductChose();
  }
}
if(document.querySelector('.toHomePage1')){
    document.querySelector('.toHomePage1').addEventListener('click', ()=>{
        window.location.href= 'http://samdev43.github.io/my-E-_commerse-project/index.html'
        // window.location.href= 'http://127.0.0.1:5500/index.html'
    })
}

function countProduct(){
  if( document.querySelector('.display_productsnumb')){
    document.querySelector('.display_productsnumb').innerHTML = customerProductChose.length 
    
  }
  if(document.getElementById('CheckoutItems')){
    document.getElementById('CheckoutItems').innerHTML = `Checkout (${customerProductChose.length } items)`
  }

  if(document.getElementById('CheckoutItemsUpdate')){
    document.getElementById('CheckoutItemsUpdate').innerHTML = `Checkout (${customerProductChose.length } items)`
  }

  checkPrice()
  // console.log(document.querySelector('.display_productsnumb').innerHTML);
}

function checkPrice() {
  if (document.getElementById('totalItem')) {
    // Reset cost and taxtCost
    cost = 0;
    taxtCost = 0;

    customerProductChose.forEach((customerProductChoseo) => {
      cost += customerProductChoseo.price * customerProductChoseo.quantity;
    });

    taxtCost = cost + (cost * 10) / 100;

    document.getElementById('totalItem').innerHTML = `<p>items(${customerProductChose.length}):</p><p>$${cost.toFixed(2)}</p>`;
    document.getElementById('priceBefTask').innerHTML = `<p>Total before tax:</p><p>$${cost.toFixed(2)}</p>`;
    document.getElementById('priceAftTask').innerHTML = `<p>Estimated tax (10%):</p><p>$${((cost * 10) / 100).toFixed(2)}</p>`;
    document.getElementById('finalAmount').innerHTML = `<p>Order total:</p><p>$${taxtCost.toFixed(2)}</p>`;
  }
}

checkPrice();

function viewProductIfoElectronics(i){
  // moreProductElectronics()
  console.log(i);
   console.log(dataElectronics);
   localStorage.setItem('checkOutProduct', JSON.stringify(dataElectronics[i]))
   location.href = `http://samdev43.github.io/my-E-_commerse-project/prduct_discription.html`              
  //  location.href=`http://127.0.0.1:5500/prduct_addToCarttUpdatediscription.html`
  
}

function viewProductIfoJewelery(i){
  // moreProductJewelery()
  console.log(i);
   console.log(dataJewelry);
   localStorage.setItem('checkOutProduct', JSON.stringify(dataJewelry[i]))
   location.href = `http://samdev43.github.io/my-E-_commerse-project/prduct_discription.html`              
  //  location.href=`http://127.0.0.1:5500/prduct_discription.html`
  
}

function viewProductIfoMenCloth(i){
  // moreProductMenCloth()
   console.log(dataMenCloth);
   localStorage.setItem('checkOutProduct', JSON.stringify(dataMenCloth[i]))
   location.href = `http://samdev43.github.io/my-E-_commerse-project/prduct_discription.html`              
  //  location.href=`http://127.0.0.1:5500/prduct_discription.html`
  
}


function displayCheckOutProduct(){
  let product = JSON.parse(localStorage.getItem('checkOutProduct'))  || []
if( document.getElementById('product-detail')){

  document.getElementById('product-detail').innerHTML = `
  <div class="mt-[70px] p-6 bg-violet-950 text-white rounded-lg shadow-lg max-w-lg mx-auto">
  <h1 class="text-2xl font-bold te-800 mb-4">${product.title}</h1>

  <div class="flex justify-center mb-4">
       <img class="w-64 h-64 object-cover rounded-lg" src="${product.image}" alt="${product.productName}">
  </div>

  <p class="text-gray-200 mb-4">${product.description}</p>

  <div class="flex justify-between items-center mb-4">
     <p class="text-lg font-semibold text-gray-300">Price: $${product.price}</p>
     <p class="text-sm text-gray-200">Available: ${product.rating.count}</p>
  </div>

  <div class="mb-6">
     <h3 class="text-xl font-bold text-gray-300 mb-2">product rating:</h3>
     <div class="list-disc list-inside text-gray-100 space-y-1">
        <li class="pl-2">${product.rating.rate}</li>
     </div>
     
  </div>
   description
   <div id="addToCarttUpdateEl" class="hidden flex items-center gap-[20px] my-[20px]">
      <div class="flex gap-[4px]"> quantity:<p id="updateQuality">1</p></div>
      <button  class="transition duration-1000  hover:bg-gray-500 hover:text-white p-2 shadow-lg  w-[30%] bg-white rounded-lg  text-black mx-[10px]" onclick="decreaseQuantityFuncaddToCartt()">-</button>
      <button class="transition duration-1000  hover:bg-gray-500 hover:text-white p-2 shadow-lg  w-[30%] bg-white rounded-lg  text-black mx-[10px]" onclick="increaseQuantityFuncaddToCartt()">+</button>
   </div>
   <button onclick="addToCarttUpdate()"
   class=" mb-[10px] w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-400">
   update
</button>

  <button onclick="addToCartt()"
     class=" w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-400">
     Add to Cart
  </button>
</div>
`;
// localStorage.removeItem('checkOutProduct')
}
}

displayCheckOutProduct()


function  increaseQuantityFuncaddToCartt(){
  let productt = JSON.parse(localStorage.getItem('checkOutProduct'));
  let matchingProduct = customerProductChose.find(product=> product.description === productt.description)
  let quantity =1;
  if(matchingProduct){
    console.log(matchingProduct.quantity);
    quantity = ++matchingProduct.quantity
    console.log(quantity);

  console.log(quantity);
  }else{
    productt.quantity=1
    customerProductChose.push(productt)
    increaseQuantityFuncaddToCartt()
    console.log(customerProductChose);
    // quantity = productt.quantity + Number(document.getElementById('updateQuality').innerHTML)
    // console.log(productt);
  }
 document.getElementById('updateQuality').innerHTML = quantity
 countProduct()
 saveCustumerProductChose();
}
if(document.getElementById('updateQuality')){
  decreaseQuantityFuncaddToCartt()
}
function decreaseQuantityFuncaddToCartt() {
  let productt = JSON.parse(localStorage.getItem('checkOutProduct'));
  let matchingProduct = customerProductChose.find(product=> product.description === productt.description)

  let quantity = 1
  if(matchingProduct){
    if(matchingProduct.quantity > 1){
      console.log(matchingProduct.quantity);
      console.log( matchingProduct.quantity);
      quantity = --matchingProduct.quantity
     console.log(quantity);
      document.getElementById('updateQuality').innerHTML =  matchingProduct.quantity
      console.log(quantity);
      countProduct() 
    }
  }else{
    productt.quantity=1
    customerProductChose.push(productt)
    decreaseQuantityFuncaddToCartt()
   
    console.log(quantity);
  }
  saveCustumerProductChose();
}

function addToCarttUpdate(){
  let productt = JSON.parse(localStorage.getItem('checkOutProduct'));
  let addToCarttUpdateEl = document.getElementById('addToCarttUpdateEl')
  addToCarttUpdateEl.classList.toggle('hidden')
  console.log(productt);
}

function addToCartt(){
  let productt = JSON.parse(localStorage.getItem('checkOutProduct'));
  let matchingProduct = customerProductChose.find(product => product.id === productt.id)
  console.log(customerProductChose);
  if(matchingProduct){
    console.log(matchingProduct);
    console.log(matchingProduct.quantity ?matchingProduct.quantity :1);
    matchingProduct.quantity =  Number(document.getElementById('updateQuality').innerHTML)
    console.log((matchingProduct.quantity,Number(document.getElementById('updateQuality').innerHTML)));
    countProduct() 
    
  }else{
    productt.quantity = 1
    console.log(productt.quantity);
    customerProductChose.push(productt)
    console.log(customerProductChose);
    countProduct() 
  }
    saveCustumerProductChose();
  location.href= `http://samdev43.github.io/my-E-_commerse-project/index.html`
  // location.href=`http://127.0.0.1:5500/index.html`
  
   }

   if(document.getElementById('toHomePage2')){

   toHomePage2.addEventListener('click', (()=>{
    location.href = `http://samdev43.github.io/my-E-_commerse-project/index.html`
    // location.href = `http://127.0.0.1:5500/index.html`
   }))

   toCartPage2.addEventListener('click', (()=>{
    location.href = `http://samdev43.github.io/my-E-_commerse-project/cart.html`
    // location.href = `http://127.0.0.1:5500/cart.html`
   }))
   }

   function feedBackFunc(){
    document.getElementById('feedBackPop').classList.remove('hidden')
   }

if(document.getElementById('CancelRequest')){

document.getElementById('CancelRequest').addEventListener('click', (()=>{
  document.getElementById('feedBackPop').classList.add('hidden')

}))
}
if(document.getElementById('confirmRequest')){

document.getElementById('confirmRequest').addEventListener('click', (()=>{
  document.getElementById('feedBackPop').classList.add('hidden')
  document.getElementById('feedBackMessage').innerHTML =`
    
  <h2 class="text-xl font-semibold text-gray-800 mb-4">Congratulation</h2>
  <p class="text-gray-600 mb-6">Congratulation you have successfully purchace this product </p>
  <p>you are charge $${taxtCost.toFixed(0)} for this product </p>
  `
  document.getElementById('ConfirmfeedBackPop').classList.remove('hidden')
  setTimeout(()=>{
    timerOut()
    location.href='https://samdev43.github.io/my-E-_commerse-project/index.html'
    // location.href='http://127.0.0.1:5500/index.html'
    customerProductChose=[]
    saveCustumerProductChose()
  },3000)

}))
}

function timerOut() {
  document.getElementById('ConfirmfeedBackPop').classList.add('hidden')
}

if(document.getElementById('dropdownButton')){

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  // Toggle dropdown on button click
  dropdownButton.addEventListener('click', function () {
      dropdownMenu.classList.toggle('hidden');
  });

  // Close the dropdown if clicked outside
  window.addEventListener('click', function (e) {
      if (!dropdownButton.contains(e.target)) {
          dropdownMenu.classList.add('hidden');
      }
  });
});
}

// if(document.getElementById('navigateToAll')){
  let navigateToAll = document.getElementById('navigateToAll')
  let navigateToAlElectonics = document.getElementById('navigateToAlElectonics')
  let navigateToAlMen = document.getElementById('navigateToAlMens')
  let navigateToJewelery= document.getElementById('navigateToJewelery')
 if(navigateToAll){
  navigateToAll.addEventListener('click',(()=>{
    location.href='https://samdev43.github.io/my-E-_commerse-project/index.html'
    // location.href='http://127.0.0.1:5500/index.html'
}))
 }
 if(navigateToAlMen){
  navigateToAlMen.addEventListener('click', function(){
     location.href='https://samdev43.github.io/my-E-_commerse-project/mens_Product.html'
    // location.href=`http://127.0.0.1:5500/men's_Product.html`
  })
 }
 if(navigateToAlElectonics){
  navigateToAlElectonics.addEventListener('click',(()=>{
    console.log('electronics');
     location.href='https://samdev43.github.io/my-E-_commerse-project/electronics.html'
    // location.href=`http://127.0.0.1:5500/electronics.html`
  }))
 }
  if(navigateToJewelery){
    navigateToJewelery.addEventListener('click',(()=>{
      console.log('jewelery');
       location.href='https://samdev43.github.io/my-E-_commerse-project/Jewelery-product.html'
      // location.href=`http://127.0.0.1:5500/Jewelery-product.html`
    }))
  }
// }