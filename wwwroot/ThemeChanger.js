var themeChanger = {
    changeCss: function () {
        var telerikDefaultTheme = "https://blazor.cdn.telerik.com/blazor/7.0.0/kendo-theme-default/swatches/default-main.css";
        var auraPortalTheme = "css/aura-portal.css";
        var oldLink = document.getElementById("TelerikThemeLink");

        // Check if oldLink exists, if not create initial link
        if (!oldLink) {
            oldLink = document.createElement("link");
            oldLink.setAttribute("id", "TelerikThemeLink");
            oldLink.setAttribute("rel", "stylesheet");
            oldLink.setAttribute("type", "text/css");
            oldLink.setAttribute("href", auraPortalTheme);
            document.getElementsByTagName("head")[0].appendChild(oldLink);
        }

        // Simple toggle between themes
        var newTheme = (oldLink.getAttribute("href") === telerikDefaultTheme)
            ? auraPortalTheme
            : telerikDefaultTheme;

        // Only create new link if theme is actually changing
        if (newTheme !== oldLink.getAttribute("href")) {
            var newLink = document.createElement("link");
            newLink.setAttribute("id", "TelerikThemeLink");
            newLink.setAttribute("rel", "stylesheet");
            newLink.setAttribute("type", "text/css");
            newLink.setAttribute("href", newTheme);

            newLink.onload = () => {
                oldLink.parentElement.removeChild(oldLink);
            };

            document.getElementsByTagName("head")[0].appendChild(newLink);
        }
    }
};

// Export for use in module context
if (typeof module !== 'undefined' && module.exports) {
    module.exports = themeChanger;
}