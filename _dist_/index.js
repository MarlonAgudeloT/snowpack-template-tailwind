// Because img is a relative route
// The url is necessary because the route is relative
 const baseUrl ="https://platzi-avo.vercel.app"
 //Renderingin an div with an id app into index.html
 const appNode = document.querySelector('#app');
 //web api
 async function fetchData() {
   const response = await fetch(`${baseUrl}/api/avo`),
   data = await response.json(),
   allItems = [];
 
   data.data.forEach((item) => {
     // create image
     const image = document.createElement("img");
     // Read the image from a relative route
        image.src = `${baseUrl}${item.image}`;
     // create title
     const title = document.createElement("h2");
        title.textContent = item.name;
     // create price
     const price = document.createElement("div");
        price.textContent = item.price;

     const container = document.createElement("div");
     container.append(image, title, price);
 
     allItems.push(container);
   });
 
   appNode.append(...allItems)
 }
 
 fetchData();