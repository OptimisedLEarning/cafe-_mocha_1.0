// home.js
export const home  = "Hello, Odinite!";



export default  function loadHome() {
    const content = document.getElementById('content');

        content.innerHTML = '';
  
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
  
    const heading = document.createElement('h1');
    heading.textContent = "Café_Moca - The Chocolatte Bar";
    
    const description = document.createElement('p');


    const textLines = [
        "Café_Moca has the most indulgent chocolate creations!",
        "The rich aroma of cocoa and the cozy ambiance make you feel like you're in a chocolate lover's paradise.",
        "From velvety hot chocolate to decadent desserts, every bite feels like a warm hug for your soul.",
        "This is exactly the kind of place that leaves you craving more, a spot where every visit feels like a celebration of sweetness and comfort.",
        "Café_Moca café — where chocolate dreams come true!"
      ];

      textLines.forEach((line, index) => {
        const textNode = document.createTextNode(line);
        description.appendChild(textNode);
      
        // Add a <br> element after every line except the last
        if (index < textLines.length - 1) {
          description.appendChild(document.createElement('br'));
        }
      });
    

      
      const location = document.createElement('p');
      location.textContent="Castle:0000_Choclate_Height , Street: Forest_Drive, tate: Loved_Heart"

    homeDiv.append(heading, description,location);
    content.appendChild(homeDiv);
  }
  
