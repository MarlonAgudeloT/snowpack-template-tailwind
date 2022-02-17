// Because img is a relative route
// The url is necessary because the route is relative
 const baseUrl ="https://platzi-avo.vercel.app"
 //Renderingin an div with an id app into index.html
 const appNode = document.querySelector('#app');
 
 //Intl api for internationalize the price
 const formatPrice = (price) =>{

   const newPrice = new window.Intl.NumberFormat("en-EN", {
      style: "currency",
      currency:"USD",
   }).format(price);

   return newPrice;

 };

 //web api
 async function fetchData() {
   const response = await fetch(`${baseUrl}/api/avo`),
   data = await response.json(),
   allItems = [];
 
   data.data.forEach((item) => {
     // create image
     const image = document.createElement("img");
     // Tailwind css
     image.className = 
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
     // Read the image from a relative route
        image.src = `${baseUrl}${item.image}`;
        
     // create title
     const title = document.createElement("h2");
     
        title.className = 
        "text-xl text-green-600" ;
        title.textContent = item.name;

     // create price
     const price = document.createElement("div");
     price.textContent = formatPrice(item.price);

     price.className = "text-gray-600";

     const priceAndTitle = document.createElement("div");
     priceAndTitle.className = 
     " text-center md:text-left";
     priceAndTitle.append(title, price);

     const card = document.createElement("div");

     card.className = 
     "md:flex grid-rows-2 bg-white rounded-lg p-6 hover:bg-gray-300";
      
     card.append(image, priceAndTitle);

     allItems.push(card);

   });
 
   appNode.append(...allItems)
 }
 
 fetchData();