var themeChanger = {
    firstRender: function () {
        // Fix the media query string - remove spaces
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
            themeChanger.changeCss(true);
        });

        // Initialize theme based on system preference
        this.changeCss(true);
    },
    changeCss: function (auto) {
        var darkTheme = "https://blazor.cdn.telerik.com/blazor/7.0.0/kendo-theme-default/swatches/default-main.css";
        var dayTheme = "css/aura-portal.css?ver=1";
        var oldLink = document.getElementById("TelerikThemeLink");

        // Check if oldLink exists, if not create initial link
        if (!oldLink) {
            oldLink = document.createElement("link");
            oldLink.setAttribute("id", "TelerikThemeLink");
            oldLink.setAttribute("rel", "stylesheet");
            oldLink.setAttribute("type", "text/css");
            oldLink.setAttribute("href", dayTheme);
            document.getElementsByTagName("head")[0].appendChild(oldLink);
        }

        var newTheme;
        if (auto) {
            // Fix the media query string - remove spaces
            newTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches)
                ? darkTheme
                : dayTheme;
        } else {
            newTheme = (oldLink.getAttribute("href") === darkTheme)
                ? dayTheme
                : darkTheme;
        }

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