import  image_1 from "./image/Tripple_Chocolate cheeseckae.PNG";
import image_2 from "./image/tote.PNG"


export default function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
  
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
  
    
    
    const item1 = document.createElement('div');
    
    const i1heading  = document.createElement("h3");
    i1heading.textContent="Triple Chocolate Cheesecake";
    
    const img1 =document.createElement("img");
    img1.src = image_1; 
   
    const p1= document.createElement("p");
    p1.textContent = "From the crust to the ganache, it is three layers of pure chocolate indulgence.It’s the kind of dessert that Valentine’s Day was made for."
  
    const i1foot  = document.createElement("h4");
    i1foot.textContent="price $40";

    item1.append(i1heading,img1,p1,i1foot);
  


    const item2 = document.createElement('div');
    
    const i2heading  = document.createElement("h3");
    i2heading.textContent="Chocolate Ganache Torte";
    
    const img2 =document.createElement("img");
    img2.src = image_2; 
   
    const p2= document.createElement("p");
    p2.textContent = " This torte is pure chocolate to its core with a filling that resembles the richest of chocolate truffles."
  
    const i2foot  = document.createElement("h4");
    i2foot.textContent="price $35";

    item2.append(i2heading,img2,p2,i2foot);
  
    menuDiv.append(item1, item2);
    content.appendChild(menuDiv);



  }
  