    document.addEventListener("DOMContentLoaded", function () {
        // Create header container that includes header content and nav menu
        function buildHeader() {
            // Create the header section
            const headerDiv = document.createElement("div");
            headerDiv.className = "header";
            headerDiv.style.display = "flex";
            headerDiv.style.justifyContent = "space-between";
            headerDiv.style.alignItems = "center";

            // Create header main (image and text)
            const headerMain = document.createElement("div");
            headerMain.className = "header-main";

            // Create anchor wrapping the image
            const linkElem = document.createElement("a");
            linkElem.href = "if_youre_reading_this_i_love_you.html";

            // Create the image element
            const image = document.createElement("img");
            image.src = "assets\\deadpool-icon.png";
            image.alt = "Hoot_64 Logo Deadpool";
            linkElem.appendChild(image);
            headerMain.appendChild(linkElem);

            // Create header text area with breaks and titles
            const headerText = document.createElement("div");
            headerText.className = "header-text";
            headerText.innerHTML = "<br/><h1>Welcome to Goodness.fun!</h1><br/><h2>Where we take a journey through time and technology and have fun doing it.</h2><br/>";
            headerMain.appendChild(headerText);

            headerDiv.appendChild(headerMain);

            // Create the social media list
            const socialMedia = document.createElement("div");
            socialMedia.className = "social-media";
            socialMedia.style.textAlign = "right";
            const ul = document.createElement("ul");
            ul.style.listStyle = "none";
            ul.style.margin = "0";
            ul.style.padding = "0";
          

            const socials = [
                { href: "https://www.youtube.com/@hoot_645", label: "YouTube" },
                { href: "https://www.github.com/hoot3464", label: "GitHub" },
                { href: "https://steamcommunity.com/profiles/76561199512431802/", label: "Steam" },
                
            ];

            socials.forEach(function (social) {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = social.href;
                a.target = "_blank";
                a.textContent = social.label;
                li.appendChild(a);
                ul.appendChild(li);
            });

            socialMedia.appendChild(ul);
            headerDiv.appendChild(socialMedia);

            // Append header to the top of the body
            document.body.prepend(headerDiv);

            // Create the navigation menu
            const navDiv = document.createElement("div");
            navDiv.className = "nav";
            navDiv.style.display = "flex";
            navDiv.style.alignItems = "center";
            navDiv.style.gap = "10px";

            const links = [
                { href: "index.html", label: "Home" },
                { href: "aboutme.html", label: "About Me" },
                { href: "xg_hub.html", label: "Extreme G Hub" },
                { href: "codehome.html", label: "Codehome" },
                { href: "gallery.html", label: "Image Gallery" },
            ];

            links.forEach(function (linkData, index) {
                const link = document.createElement("a");
                link.href = linkData.href;
                link.textContent = linkData.label;
                navDiv.appendChild(link);

                // Add a separator if it's not the last link
                if (index < links.length - 1) {
                    const separator = document.createElement("span");
                    separator.style.borderLeft = "1px solid #ccc";
                    separator.style.height = "40px";
                    navDiv.appendChild(separator);
                }
            });

            // Place the nav element after the header
            headerDiv.insertAdjacentElement("afterend", navDiv);
        }

        buildHeader();
    });
