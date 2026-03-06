// WhatsApp floating button with ICON image instead of text

window.addEventListener("load", function() {

    // Find our script tag
    var allScripts = document.getElementsByTagName("script");
    var ourScript = allScripts[allScripts.length - 1];

    // Read attributes or use defaults
    var phone     = ourScript.getAttribute("data-phone")   || "212600000000";
    var message   = ourScript.getAttribute("data-message") || "Bonjour, je vous contacte depuis votre site.";
    var buttonText = ourScript.getAttribute("data-text")   || "Contactez-nous"; // optional now

    phone = phone.replace(/[^0-9]/g, "");

    var whatsappLink = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    // Create the button
    var btn = document.createElement("a");
    btn.href = whatsappLink;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";

    // Styles for the round green container
    btn.style.position = "fixed";
    btn.style.bottom = "25px";
    btn.style.right = "25px";
    btn.style.zIndex = "99999";
    btn.style.width = "65px";
    btn.style.height = "65px";
    btn.style.backgroundColor = "#25D366";
    btn.style.borderRadius = "50%";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
    btn.style.textDecoration = "none";

    // Hover effect
    btn.onmouseenter = function() { btn.style.transform = "scale(1.08)"; };
    btn.onmouseleave = function() { btn.style.transform = "scale(1)"; };

    // Create the icon image inside the button
    var icon = document.createElement("img");
    icon.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"; // Official WhatsApp SVG (looks great, sharp)
    icon.alt = "WhatsApp";
    icon.style.width = "40px";          // size of the icon inside the circle
    icon.style.height = "40px";

    btn.appendChild(icon);

    // Optional: add small text below icon if you want (uncomment if needed)
    // var textEl = document.createElement("div");
    // textEl.innerText = buttonText;
    // textEl.style.fontSize = "11px";
    // textEl.style.color = "white";
    // textEl.style.marginTop = "2px";
    // textEl.style.fontFamily = "Arial, sans-serif";
    // btn.appendChild(textEl);

    document.body.appendChild(btn);

});