/* <![CDATA[ */
(function (document, window) {
    var a, c = document.createElement("script"), f = window.frameElement;

    c.id = "CleverCoreLoader65781";
    c.src = "https://scripts.cleverwebserver.com/23858677653016224382409b6a36acaf.js";

    c.async = !0;
    c.type = "text/javascript";
    c.setAttribute("data-target", window.name || (f && f.getAttribute("id")));
    c.setAttribute("data-callback", "put-your-callback-function-here");
    c.setAttribute("data-callback-url-click", "put-your-click-macro-here");
    c.setAttribute("data-callback-url-view", "put-your-view-macro-here");

    try {
        a = parent.document.getElementsByTagName("script")[0] || document.getElementsByTagName("script")[0];
    } catch (e) {
        a = !1;
    }

    a || (a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]);
    a.parentNode.insertBefore(c, a);
})(document, window);
/* ]]> */