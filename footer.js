document.addEventListener("DOMContentLoaded", function() {
    // Create footer element
    const footer = document.createElement("footer");

    // Create the "if_youre_reading_this_i_love_you.html" link with the image
    const link = document.createElement("a");
    link.href = "if_youre_reading_this_i_love_you.html";
    link.style.textAlign = "right";

    const img = document.createElement("img");
    // Use forward slashes for the src attribute
    img.src = "assets/deadpool-icon.png";
    img.style.width = "100px";
    img.style.float = "right";
    img.style.padding = "10px";
    img.alt = "Deadpool";

    link.appendChild(img);
    footer.appendChild(link);

    // Create navigation container
    const nav = document.createElement("nav");
    nav.className = "footer_nav";

    // Create Home link
    const homeLink = document.createElement("a");
    homeLink.className = "footer_nav";
    homeLink.href = "index.html";
    homeLink.textContent = "Home";
    nav.appendChild(homeLink);

    // Create a line break
    nav.appendChild(document.createElement("br"));

    // Create "Back to Top" link
    const backToTopLink = document.createElement("a");
    backToTopLink.className = "footer_nav";
    backToTopLink.href = "#top";
    backToTopLink.textContent = "Back to Top";
    nav.appendChild(backToTopLink);

    footer.appendChild(nav);

    // Append the footer to the body
    document.body.appendChild(footer);
});