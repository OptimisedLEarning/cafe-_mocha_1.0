export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    const about = document.createElement('div');
    about.classList.add('about');

    // About Me Section
    const about_me = document.createElement('div');
    const ime = document.createElement('p');
    const lines = [
        "Hi, I’m Akshay, the chef and heart behind Akshay's Chocolate Haven.",
        "My journey with chocolate began as a childhood fascination and turned into a lifelong passion.",
        "After years of experimenting in the kitchen and sharing my creations with family and friends,",
        "I dreamed of creating a space where others could experience the magic of chocolate the way I do.",
        "Every dish in my restaurant reflects my dedication to flavor, quality, and creativity.",
        "My goal is simple: to create a place where every visitor feels special, every dish feels like art, and every bite tastes like love."
    ];

    lines.forEach((line, index) => {
        const textNode = document.createTextNode(line);
        ime.appendChild(textNode);

        // Add a <br> element after every line except the last
        if (index < lines.length - 1) {
            ime.appendChild(document.createElement('br'));
        }
    });

    about_me.append(ime);

    // About Restaurant Section
    const about_resturant = document.createElement('div');
    const myStory = document.createElement('p');
    const lines2 = [
        "Akshay's Chocolate Haven is more than a restaurant—it’s an experience for chocolate lovers and food enthusiasts alike.",
        "Here, every dish is crafted to indulge your senses and leave you with unforgettable memories.",
        "From the aroma of freshly melted chocolate to the rich, velvety flavors of every bite, our menu is designed to take you on a journey of pure joy.",
        "Whether you’re enjoying a warm, fudgy chocolate tart or a creative twist on classic desserts, Akshay's Chocolate Haven is where passion for food meets a love for chocolate."
    ];

    lines2.forEach((line, index) => {
        const textNode = document.createTextNode(line);
        myStory.appendChild(textNode);

        // Add a <br> element after every line except the last
        if (index < lines2.length - 1) {
            myStory.appendChild(document.createElement('br'));
        }
    });

    about_resturant.append(myStory);

    // Address Section
    const about_adress = document.createElement('div');
    const address = document.createElement('p');
    address.textContent = "003 Don't Follow Me, Chocolate_Will, Only Castle On the Hill";
    about_adress.append(address);

    // Append all sections to the about container
    about.append(about_me, about_resturant, about_adress);

    // Append the about container to the content
    content.appendChild(about);
}
