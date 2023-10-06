var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(b) {
    var a = 0;
    return function() {
        return a < b.length ? {
            done: !1,
            value: b[a++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(b) {
    return {
        next: $jscomp.arrayIteratorImpl(b)
    }
}
;
$jscomp.makeIterator = function(b) {
    var a = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    return a ? a.call(b) : $jscomp.arrayIterator(b)
}
;
FeatureToggles = function() {
    var b = []
      , a = document.querySelector('meta[name\x3d"enabled-toggles-set"]');
    a && (a = a.getAttribute("content")) && (b = a.split(","));
    return {
        isEnabled: function(a) {
            return a ? b.includes(a.toLowerCase()) : !1
        }
    }
}();
!function(b) {
    var a;
    if ("function" == typeof define && define.amd && (define(b),
    a = !0),
    "object" == typeof exports && (module.exports = b(),
    a = !0),
    !a) {
        var e = window.Cookies
          , c = window.Cookies = b();
        c.noConflict = function() {
            return window.Cookies = e,
            c
        }
    }
}(function() {
    function b() {
        for (var a = 0, e = {}; a < arguments.length; a++) {
            var b = arguments[a], d;
            for (d in b)
                e[d] = b[d]
        }
        return e
    }
    return function c(e) {
        function d() {}
        function g(c, f, g) {
            if ("undefined" != typeof document) {
                "number" == typeof (g = b({
                    path: "/"
                }, d.defaults, g)).expires && (g.expires = new Date(1 * new Date + 864E5 * g.expires));
                g.expires = g.expires ? g.expires.toUTCString() : "";
                try {
                    var h = JSON.stringify(f);
                    /^[\{\[]/.test(h) && (f = h)
                } catch (p) {}
                f = e.write ? e.write(f, c) : encodeURIComponent(String(f)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                c = encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                h = "";
                for (var r in g)
                    g[r] && (h += "; " + r,
                    !0 !== g[r] && (h += "\x3d" + g[r].split(";")[0]));
                return document.cookie = c + "\x3d" + f + h
            }
        }
        function l(b, f) {
            if ("undefined" != typeof document) {
                for (var c = {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0; h < d.length; h++) {
                    var g = d[h].split("\x3d")
                      , l = g.slice(1).join("\x3d");
                    f || '"' !== l.charAt(0) || (l = l.slice(1, -1));
                    try {
                        var n = g[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                        if (l = (e.read || e)(l, n) || l.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent),
                        f)
                            try {
                                l = JSON.parse(l)
                            } catch (w) {}
                        if (c[n] = l,
                        b === n)
                            break
                    } catch (w) {}
                }
                return b ? c[b] : c
            }
        }
        return d.set = g,
        d.get = function(b) {
            return l(b, !1)
        }
        ,
        d.getJSON = function(b) {
            return l(b, !0)
        }
        ,
        d.remove = function(e, f) {
            g(e, "", b(f, {
                expires: -1
            }))
        }
        ,
        d.defaults = {},
        d.withConverter = c,
        d
    }(function() {})
});
(function() {
    var b = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
    };
    window.queryParameter = function(a) {
        a = (new RegExp("[?\x26]" + a + "\x3d([^\x26#]*)")).exec(window.location.href);
        return null == a ? null : decodeURI(a[1]) || 0
    }
    ;
    window.Expediagroup || (window.Expediagroup = {});
    window.Expediagroup.Marketing || (window.Expediagroup.Marketing = {});
    window.Expediagroup.Marketing.Document = {
        ready: function(a) {
            "loading" != document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)
        }
    };
    window.Expediagroup.Marketing.Utils = {
        getSiteName: function() {
            return document.querySelector("html").dataset.siteName
        },
        isIE: function() {
            return !!document.documentMode
        },
        isEdge: function() {
            return !this.isIE() && !!window.StyleMedia
        },
        getClosestNode: function(a, b) {
            if (b.matches("." + a))
                return b;
            b = b.parentNode;
            do {
                if (b.matches("." + a))
                    return b;
                b = b.parentElement || b.parentNode
            } while (null !== b && 1 === b.nodeType)
        },
        getNextElementSibling: function() {
            return this.nextElementSibling
        },
        setNextElementSibling: function(a) {
            this.nextElementSibling = a
        },
        isLiveOrPreview: function() {
            var a = Cookies.get("cq-editor-layer.page");
            return a ? "Preview" == a ? !0 : window.location.href.match(/\?wcmmode=disabled/) : !0
        },
        waitUntil: function(a, b) {
            var c = setInterval(function() {
                a() && (clearInterval(c),
                b())
            }, 100)
        }
    };
    window.Expediagroup.Marketing.HeaderUtils = {
        addOrRemoveClass: function(a, b) {
            a = a.classList;
            a.contains(b) ? a.remove(b) : a.add(b)
        },
        expandSubMenu: function(a) {
            a = a.querySelector(".mega-menu-item-sub-menu-background");
            this.addOrRemoveClass(a, "show-sub-menu")
        },
        animateImages: function(a) {
            var e = function(a) {
                for (var c in b)
                    if (void 0 !== a.style[c])
                        return b[c]
            };
            a.querySelectorAll(".cardtile, .card").forEach(function(a, b) {
                setTimeout(function() {
                    a.classList.add("animate-cardtile");
                    a.addEventListener(e(a), function(a) {
                        (a = a.target.querySelector(".cmp-image__image--is-loading")) && a.dispatchEvent(new CustomEvent("cmp-image-redraw"))
                    })
                }, 250 * b)
            })
        },
        closeSubMenuWindow: function(a) {
            a = (void 0 == a ? document : a).querySelector(".show-sub-menu");
            if (null != a) {
                a = window.Expediagroup.Marketing.Utils.getClosestNode("mega-menu-item_content", a);
                if (a.matches(".more-button-el")) {
                    var b = document.querySelector(".more-container");
                    a.classList.remove("more-button-el");
                    var c = window.Expediagroup.Marketing.Utils.getNextElementSibling();
                    null != c ? b.insertBefore(a, c) : b.appendChild(a)
                }
                this.addOrRemoveClass(a, "active-link");
                this.expandSubMenu(a)
            }
        }
    };
    window.Expediagroup.Marketing.InteractionPortTools = {
        detectInteractionPortShowAnswer: function(a, b) {
            if (b) {
                var c = b.parentNode;
                null != window.Expediagroup.Marketing.Utils.getClosestNode(a, c) && null != b.querySelector(".show-answer") && c.classList.add("full-width")
            }
        },
        insertAfter: function(a, b, c) {
            c = c.nextSibling;
            null == c ? a.appendChild(b) : a.insertBefore(b, c)
        },
        changeInteractionPortPosition: function(a, b, c, d, g, l) {
            var e = d.parentNode;
            if (window.innerWidth < a) {
                if (null == e)
                    return;
                var f = window.Expediagroup.Marketing.Utils.getClosestNode(b, e);
                if (null == f)
                    return;
                window.Expediagroup.Marketing.InteractionPortTools.insertAfter(f.parentNode, e, f);
                e.classList.add("margin-b")
            }
            window.innerWidth > a && null == c.querySelector(".interaction-port") && (e.classList.remove("margin-b"),
            window.Expediagroup.Marketing.InteractionPortTools.insertAfter(g, e, l),
            window.Expediagroup.Marketing.InteractionPortTools.detectInteractionPortShowAnswer(b, d))
        }
    };
    window.Expediagroup.Marketing.onInit = function(a) {
        document.addEventListener("marketing-reinitialization", a);
        a()
    }
    ;
    window.Expediagroup.Marketing.reinitialize = function() {
        document.dispatchEvent(new CustomEvent("marketing-reinitialization"))
    }
    ;
    window.Expediagroup.Marketing.Document.ready(function() {
        window.Expediagroup.Marketing.reinitialize()
    });
    window.Expediagroup.Marketing.initializeElementOnce = function(a, b) {
        "undefined" === typeof a || null === a || a.getAttribute("data-initialized") || (a.setAttribute("data-initialized", !0),
        b(a))
    }
    ;
    document.addEventListener("scroll", function(a) {
        a = new CustomEvent("pageScroll",a);
        document.dispatchEvent(a)
    })
}
)();
var cachedLibs = {};
function loadClientLib(b) {
    var a = "/etc.clientlibs/" + b + ".min.css";
    if (document.createStyleSheet)
        document.createStyleSheet(a);
    else {
        var e = document.createElement("link");
        e.rel = "preload stylesheet";
        e.type = "text/css";
        e.as = "style";
        e.href = a;
        document.querySelector("head").appendChild(e)
    }
    var c = "/etc.clientlibs/" + b + ".min.js";
    cachedLibs[c] ? console.log("## lib already cached", c) : (b = document.createElement("script"),
    b.async = !0,
    b.onload = b.onreadystatechange = function() {
        cachedLibs[c] = !0
    }
    ,
    b.onerror = function(a) {
        console.error("Error loading:", c)
    }
    ,
    b.src = c,
    a = document.getElementsByTagName("script")[0],
    a.parentNode.insertBefore(b, a))
}
window.Expediagroup.Marketing.Utils.loadClientLib = loadClientLib;
window.Expediagroup.Marketing.Document.ready(function() {
    var b = [].slice.call(document.querySelectorAll("[data-lazy-clientlibs]"))
      , a = !1
      , e = function() {
        !1 === a && (a = !0,
        setTimeout(function() {
            b.forEach(function(a) {
                a.getBoundingClientRect().top <= window.innerHeight && 0 <= a.getBoundingClientRect().bottom && "none" !== getComputedStyle(a).display && (a.dataset.lazyClientlibs.split(",").forEach(function(a) {
                    loadClientLib(a)
                }),
                b = b.filter(function(b) {
                    return b !== a
                }),
                0 === b.length && (document.removeEventListener("pageScroll", e),
                window.removeEventListener("resize", e),
                window.removeEventListener("orientationchange", e)))
            });
            a = !1
        }, 200))
    };
    document.addEventListener("pageScroll", e);
    window.addEventListener("resize", e);
    window.addEventListener("orientationchange", e);
    e()
});
(function() {
    window.Expediagroup.Marketing.Utils.loadExperienceFragments = function() {
        var b = []
          , a = !1
          , e = document.querySelector('meta[name\x3d"environment"]');
        e && (a = "authoring" == e.getAttribute("content"));
        var c = window.location.pathname
          , d = function(b) {
            var e = b.dataset.path
              , f = "live-copies";
            -1 != c.indexOf("/source/") ? f = "source" : -1 != c.indexOf("/language-masters/") && (f = "language-masters");
            e = e.replace("\x3ccontentGroup\x3e", f);
            var d = document.querySelector('meta[name\x3d"calculated-lang"]')
              , g = "en";
            d && d.getAttribute("content") && (g = d.getAttribute("content"));
            d = e.replace("/en/", "/" + g + "/");
            "source" === f && (d = e.replace("/en/", "/"));
            e = a ? "?wcmmode\x3ddisabled" : "";
            f = new XMLHttpRequest;
            f.onload = function() {
                b.innerHTML = this.responseText;
                window.Expediagroup.Marketing.reinitialize()
            }
            ;
            f.open("get", d + ".content.html" + e, !0);
            f.send();
            b.dataset.lazyLoaded = !0
        }
          , g = function(a) {
            for (var c = b.length - 1; 0 <= c; c--) {
                var f = b[c];
                if (a || f.getBoundingClientRect().top - 500 <= window.innerHeight && 0 <= f.getBoundingClientRect().bottom + 500 && "none" !== getComputedStyle(f).display)
                    d(f),
                    f.dataset.lazyLoaded = !0,
                    b.splice(c, 1)
            }
        };
        document.addEventListener("pageScroll", function() {
            return g()
        });
        window.addEventListener("resize", function() {
            return g()
        });
        window.addEventListener("orientationchange", function() {
            return g()
        });
        (function(a) {
            document.querySelectorAll(".personalized").forEach(function(c) {
                var f = c.dataset.lazy;
                a && (c.dataset.lazyLoaded = !1);
                var e = c.dataset.lazyLoaded;
                f && !e && b.push(c);
                f || d(c)
            });
            g()
        }
        )();
        setTimeout(function() {
            g(!0)
        }, 1500)
    }
}
)();
window.Expediagroup.Marketing.Document.ready(function() {
    var b = document.createElement("a")
      , a = document.querySelector(".responsivegrid")
      , e = a.querySelector(".responsivegrid.aem-GridColumn");
    b.href = "#content";
    b.innerHTML = "Skip to content";
    b.classList.add("skip");
    a.insertBefore(b, a.firstChild);
    "undefined" !== typeof e && null !== e && e.setAttribute("id", "content");
    b.addEventListener("click", function() {
        var a = document.querySelector("#content");
        if ("undefined" !== typeof a && null !== a) {
            a.setAttribute("tabindex", -1);
            var b = function() {
                a.removeAttribute("tabindex");
                a.focus()
            };
            a.addEventListener("blur", b);
            a.addEventListener("focusout", b)
        }
    })
});
function getLocalized(b) {
    return b
}
var s7sdk_i18n = s7sdk_i18n || {
    localizedTexts: {}
};
s7sdk_i18n.localizedText = {
    CloseButton: {
        TOOLTIP: getLocalized("Close")
    },
    ZoomResetButton: {
        TOOLTIP: getLocalized("Reset Zoom")
    },
    ZoomInButton: {
        TOOLTIP: getLocalized("Zoom In")
    },
    ZoomOutButton: {
        TOOLTIP: getLocalized("Zoom Out")
    },
    PanUpButton: {
        TOOLTIP: getLocalized("Pan up")
    },
    PanDownButton: {
        TOOLTIP: getLocalized("Pan down")
    },
    PanLeftButton: {
        TOOLTIP: getLocalized("Pan left")
    },
    PanRightButton: {
        TOOLTIP: getLocalized("Pan right")
    },
    ScrollLeftButton: {
        TOOLTIP: getLocalized("Scroll left")
    },
    ScrollRightButton: {
        TOOLTIP: getLocalized("Scroll right")
    },
    ScrollUpButton: {
        TOOLTIP: getLocalized("Scroll up")
    },
    ScrollDownButton: {
        TOOLTIP: getLocalized("Scroll down")
    },
    InfoPanelCloseButton: {
        TOOLTIP: getLocalized("Close")
    },
    TwoStateButton: {},
    PlayPauseButton: {
        TOOLTIP_SELECTED: getLocalized("Play"),
        TOOLTIP_UNSELECTED: getLocalized("Pause"),
        TOOLTIP_REPLAY: getLocalized("Replay")
    },
    FullScreenButton: {
        TOOLTIP_SELECTED: getLocalized("Minimize"),
        TOOLTIP_UNSELECTED: getLocalized("Full Screen")
    },
    ScrubberSwatchesButton: {
        TOOLTIP_SELECTED: getLocalized("Page Scroll"),
        TOOLTIP_UNSELECTED: getLocalized("Thumbnail Scroll")
    },
    ThumbnailPageButton: {
        TOOLTIP_SELECTED: getLocalized("Page View"),
        TOOLTIP_UNSELECTED: getLocalized("Grid View")
    },
    ClosedCaptionButton: {
        TOOLTIP_SELECTED: getLocalized("Disable Closed Captioning"),
        TOOLTIP_UNSELECTED: getLocalized("Enable Closed Captioning")
    },
    Download: {
        TOOLTIP: getLocalized("Download")
    },
    SearchButton: {
        TOOLTIP_SELECTED: getLocalized("Disable search"),
        TOOLTIP_UNSELECTED: getLocalized("Enable search")
    },
    ScrollLeftRightButton: {
        TOOLTIP_SELECTED: getLocalized("Scroll left"),
        TOOLTIP_UNSELECTED: getLocalized("Scroll right")
    },
    FavoritesEffect: {
        TOOLTIP: getLocalized("Favorite")
    },
    FavoritesButton: {
        TOOLTIP: getLocalized("Favorites")
    },
    AddFavoriteButton: {
        TOOLTIP_SELECTED: getLocalized("Disable Adding Favorite"),
        TOOLTIP_UNSELECTED: getLocalized("Enable Adding Favorite")
    },
    RemoveFavoriteButton: {
        TOOLTIP_SELECTED: getLocalized("Disable Removing Favorite"),
        TOOLTIP_UNSELECTED: getLocalized("Enable Removing Favorite")
    },
    ViewAllFavoriteButton: {
        TOOLTIP_SELECTED: getLocalized("Hide All Favorites"),
        TOOLTIP_UNSELECTED: getLocalized("View All Favorites")
    },
    FavoritesMenu: {
        TOOLTIP: getLocalized("Favorites")
    },
    FlyoutZoomView: {
        TIP_BUBBLE_OVER: getLocalized("Mouse over to zoom"),
        TIP_BUBBLE_TAP: getLocalized("Tap and hold to zoom")
    },
    InfoPanelPopup: {
        TOOLTIP_CLOSE: getLocalized("Close")
    },
    SearchManager: {},
    SearchPanel: {
        PLACEHOLDER: getLocalized("Search this catalog"),
        INFO_PROMPT: getLocalized("\x3cp\x3eWhat are you looking for?\x3c/p\x3e"),
        INFO_NO_RESULTS: getLocalized("\x3cp\x3eNo results found on this catalog for \x3cb\x3e'$SEARCH_TEXT$'\x3c/b\x3e...\x3c/p\x3e"),
        INFO_RESULTS: getLocalized("\x3cp\x3eFound \x3cb\x3e$HIT_COUNT$\x3c/b\x3e result(s) in \x3cb\x3e$PAGE_COUNT$\x3c/b\x3e page(s) for \x3cb\x3e'$SEARCH_TEXT$'\x3c/b\x3e.\x3c/p\x3e"),
        THUMBNAIL_LABEL: getLocalized("\x3cb\x3e$PAGE$ - $PAGE_HIT_COUNT$\x3c/b\x3e result(s)")
    },
    InteractiveSwatches: {
        BANNER: getLocalized("Click to View")
    },
    MediaSet: {},
    PageScrubber: {
        PAGE_THUMB_TEXT: getLocalized("Page")
    },
    SetIndicator: {
        TOOLTIP: getLocalized("")
    },
    TableOfContents: {
        TOOLTIP: getLocalized("Table of Contents"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down"),
        DELIMITER: getLocalized(" - ")
    },
    DlgActionButton: {
        TOOLTIP: getLocalized("")
    },
    EmailShare: {
        TOOLTIP: getLocalized("Email"),
        HEADER: getLocalized("Email Link"),
        TOOLTIP_HEADER_CLOSE: getLocalized("Close"),
        INVALID_ADDRESSS: getLocalized("Wrong email address"),
        TO: getLocalized("To"),
        TOOLTIP_ADD: getLocalized("Add"),
        ADD: getLocalized("Add Another Email Address"),
        FROM: getLocalized("From"),
        MESSAGE: getLocalized("Message"),
        TOOLTIP_REMOVE: getLocalized("Remove"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel"),
        CLOSE: getLocalized("Close"),
        TOOLTIP_CLOSE: getLocalized("Close"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down"),
        ACTION: getLocalized("Send Email"),
        TOOLTIP_ACTION: getLocalized("Send"),
        SEND_SUCCESS: getLocalized("Email sent successfully"),
        SEND_FAILURE: getLocalized("Send email failed")
    },
    EmbedShare: {
        TOOLTIP: getLocalized("Embed"),
        HEADER: getLocalized("Get Embed Code"),
        TOOLTIP_HEADER_CLOSE: getLocalized("Close"),
        DESCRIPTION: getLocalized("To get embed code, copy and paste: "),
        EMBED_SIZE: getLocalized("Embed Size"),
        CUSTOM_SIZE: getLocalized("Custom Size"),
        ACTION: getLocalized("Select All"),
        TOOLTIP_ACTION: getLocalized("Select All"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down")
    },
    LinkShare: {
        TOOLTIP: getLocalized("Link"),
        HEADER: getLocalized("Share Link"),
        TOOLTIP_HEADER_CLOSE: getLocalized("Close"),
        DESCRIPTION: getLocalized("To share this link, copy and paste:"),
        ACTION: getLocalized("Select All"),
        TOOLTIP_ACTION: getLocalized("Select All"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel")
    },
    FacebookShare: {
        TOOLTIP: getLocalized("Facebook")
    },
    TwitterShare: {
        TOOLTIP: getLocalized("Twitter")
    },
    SocialShare: {
        TOOLTIP: getLocalized("Social Share")
    },
    CustomComboBox: {
        TOOLTIP: getLocalized("Select")
    },
    SocialDialog: {
        HEADER: getLocalized(""),
        TOOLTIP_HEADER_CLOSE: getLocalized(""),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down"),
        ACTION: getLocalized(""),
        TOOLTIP_ACTION: getLocalized("")
    },
    LinkDialog: {
        HEADER: getLocalized("Share Link"),
        DESCRIPTION: getLocalized("To share this content with others, copy and past this link:"),
        ACTION: getLocalized("Select All"),
        TOOLTIP_ACTION: getLocalized("Select All"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel")
    },
    EmailDialog: {
        HEADER: getLocalized("Email this to a Friend"),
        INVALID_ADDRESSS: getLocalized("Wrong email address"),
        TO: getLocalized("To"),
        TOOLTIP_ADD: getLocalized("Add"),
        ADD: getLocalized("Add Another Email Address"),
        FROM: getLocalized("From"),
        MESSAGE: getLocalized("Message"),
        TOOLTIP_REMOVE: getLocalized("Remove"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel"),
        CLOSE: getLocalized("Close"),
        TOOLTIP_CLOSE: getLocalized("Close"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down"),
        ACTION: getLocalized("Send Email"),
        TOOLTIP_ACTION: getLocalized("Send"),
        SEND_SUCCESS: getLocalized("Email sent successfully"),
        SEND_FAILURE: getLocalized("Send email failed")
    },
    EmbedDialog: {
        HEADER: getLocalized("Embed Link"),
        DESCRIPTION: getLocalized("To share this content with others, copy and past this code:"),
        EMBED_SIZE: getLocalized("Embed Size"),
        TOOLTIP_SCROLL_UP: getLocalized("Scroll up"),
        TOOLTIP_SCROLL_DOWN: getLocalized("Scroll down"),
        CUSTOM_SIZE: getLocalized("Custom Size"),
        ACTION: getLocalized("Select All"),
        TOOLTIP_ACTION: getLocalized("Select All"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel")
    },
    Print: {
        TOOLTIP: getLocalized("Prepare to print"),
        HEADER: getLocalized("Prepare to print"),
        TOOLTIP_HEADER_CLOSE: getLocalized("Close"),
        PRINT_RANGE: getLocalized("Select Print Pages"),
        PRINT_RANGE_CURRENT: getLocalized("Current pages"),
        PRINT_RANGE_FROM: getLocalized("Spread range from:"),
        PRINT_RANGE_TO: getLocalized("to:"),
        PRINT_RANGE_ALL: getLocalized("All pages"),
        PAGE_HANDLING: getLocalized("Page Handling"),
        PAGE_HANDLING_ONE: getLocalized("1 page per sheet"),
        PAGE_HANDLING_TWO: getLocalized("2 pages per sheet"),
        ACTION: getLocalized("Send to Print"),
        TOOLTIP_ACTION: getLocalized("Send to Print"),
        CANCEL: getLocalized("Cancel"),
        TOOLTIP_CANCEL: getLocalized("Cancel")
    },
    PrintDialog: {
        HEADER: getLocalized(""),
        PRINT_RANGE: getLocalized(""),
        PRINT_RANGE_CURRENT: getLocalized(""),
        PRINT_RANGE_FROM: getLocalized(""),
        PRINT_RANGE_TO: getLocalized(""),
        PRINT_RANGE_ALL: getLocalized(""),
        PAGE_HANDLING: getLocalized(""),
        PAGE_HANDLING_ONE: getLocalized(""),
        PAGE_HANDLING_TWO: getLocalized(""),
        ACTION: getLocalized(""),
        TOOLTIP_ACTION: getLocalized(""),
        CANCEL: getLocalized(""),
        TOOLTIP_CANCEL: getLocalized("")
    },
    VideoTime: {
        TOOLTIP: getLocalized("Video Time")
    },
    VideoScrubber: {
        TOOLTIP: getLocalized("Seek Video")
    },
    VerticalVolume: {
        TOOLTIP: getLocalized("")
    },
    MutableVolume: {
        TOOLTIP_SELECTED: getLocalized("Video Volume"),
        TOOLTIP_UNSELECTED: getLocalized("Video Volume")
    },
    VideoPlayer: {
        ERROR: getLocalized("Your Browser does not support HTML5 Video tag or the video cannot be played.")
    },
    DimensionalView: {
        FULLSCREEN_TOOLTIP: getLocalized("Fullscreen"),
        HELP_TOOLTIP: getLocalized("Help"),
        VR_TOOLTIP: getLocalized("VR"),
        RESET_TOOLTIP: getLocalized("Reset"),
        HELP_CONTROLS_TITLE: getLocalized("How to navigate the 3D Scene"),
        HELP_CONTROLS_OR: getLocalized("or"),
        HELP_CONTROLS_PAN_TITLE: getLocalized("Pan Your Camera"),
        HELP_CONTROLS_PAN_SUBTITLE: getLocalized("Pan your view left, right, up, and down."),
        HELP_CONTROLS_PAN_DESCRIPTION: getLocalized("Right Click + Drag / Control + Drag / Two Finger Press + Drag"),
        HELP_CONTROLS_ORBIT_TITLE: getLocalized("Turn Your Camera"),
        HELP_CONTROLS_ORBIT_SUBTITLE: getLocalized("Orbit your view around the 3D scene and objects."),
        HELP_CONTROLS_ORBIT_DESCRIPTION: getLocalized("Left Click + Drag / Press + Drag"),
        HELP_CONTROLS_ZOOM_TITLE: getLocalized("Zoom Your Camera"),
        HELP_CONTROLS_ZOOM_SUBTITLE: getLocalized("Zoom your camera to move in and out of areas of the 3D scene."),
        HELP_CONTROLS_ZOOM_DESCRIPTION: getLocalized("Scroll Wheel / Pinch"),
        HELP_CONTROLS_FOCUS_TITLE: getLocalized("Recenter Your Camera"),
        HELP_CONTROLS_FOCUS_SUBTITLE: getLocalized("Recenter your camera to a point on an object in the scene."),
        HELP_CONTROLS_FOCUS_DESCRIPTION: getLocalized("Double Click / Double Tap"),
        MADE_WITH_ADOBE_DIMENSION: getLocalized("Made with Adobe Dimension"),
        VIEWER_VERSION: getLocalized("Viewer Version"),
        SOMETHING_WENT_WRONG: getLocalized("Something went wrong"),
        ERROR_LOADING_MODEL: getLocalized("Error loading the model"),
        LEARN_MORE: getLocalized("Learn More"),
        ROLE_DESCRIPTION: getLocalized("3D model preview")
    }
};
var S7dmUtils = S7dmUtils || {};
(function(b) {
    b = b || {};
    b.Viewer = function() {}
    ;
    b.Viewer.RETRY_JS_MAX = 50;
    b.Viewer.prototype.retryCount = 0;
    b.Viewer.prototype.viewerList = null;
    b.Viewer.prototype.load = function(a, b) {
        if (!this.isAllLoaded(a)) {
            this.viewerList = a;
            for (var c in a) {
                var e = document.createElement("script");
                e.setAttribute("src", b + a[c]);
                document.querySelector("head").appendChild(e)
            }
        }
        return this
    }
    ;
    b.Viewer.prototype.ready = function(a) {
        if ("undefined" == typeof s7viewers || null != this.viewerList && !this.isAllLoaded(this.viewerList)) {
            var e = this;
            this.retryCount++;
            this.retryCount < b.Viewer.RETRY_JS_MAX ? setTimeout(function() {
                e.ready(a)
            }, 100) : a.fail.call()
        } else
            a.success.call()
    }
    ;
    b.Viewer.prototype.isAllLoaded = function(a) {
        if ("undefined" == typeof s7viewers)
            return !1;
        for (var b in a)
            if ("Responsive" == b) {
                if ("undefined" == typeof s7responsiveImage)
                    return !1
            } else if ("undefined" == typeof s7viewers[b])
                return !1;
        return !0
    }
}
)(S7dmUtils);
(function() {
    function b(a, b) {
        (new IntersectionObserver(function(f, c) {
            f.forEach(function(f) {
                f.isIntersecting && (console.log("load " + a.dataset.assetName),
                b(),
                c.unobserve(f.target))
            })
        }
        ,{
            rootMargin: "0px 0px 50px 0px",
            threshold: 0
        })).observe(a)
    }
    function a() {
        document.querySelectorAll(".s7dm-dynamic-media").forEach(function(a) {
            b(a, function() {
                var b = a.getAttribute("id")
                  , d = S7dmUtils[b]
                  , f = a.dataset.assetType
                  , h = a.dataset.mode
                  , m = a.dataset.stagesize;
                "undefined" != typeof d && null != d && (d.dispose(),
                S7dmUtils[b] = null,
                a.classList.remove("s7responsiveViewer"));
                a.innerHTML = "";
                if (d = a.dataset.viewerType) {
                    var n = a.dataset.assetPath
                      , w = a.dataset.assetType
                      , x = a.dataset.viewerType
                      , y = a.dataset.videoserver;
                    h = a.dataset.config;
                    var v = a.dataset.wcmdisabled
                      , k = a.dataset.stagesize
                      , t = a.dataset.viewermodifiers
                      , z = a.dataset.dms7;
                    f = {
                        asset: n,
                        serverurl: a.dataset.imageserver,
                        contenturl: a.dataset.contenturl
                    };
                    t && (f = Object.assign(f, g(t)));
                    (v = !v && "" != v) && (f.asset += "?cache\x3doff");
                    k && (f.stagesize = k);
                    "FlyoutViewer" == x && (f.imagereload = "1,breakpoint,100;320;480");
                    0 != n.indexOf("/") && (f.aemmode = "0");
                    if (0 <= x.indexOf("Video") || 0 <= x.indexOf("Mixed"))
                        if (f.videoserverurl = y,
                        "video" == w || "undefined" != typeof z && v)
                            f.playback = "native",
                            f.progressivebitrate = "20000";
                    "undefined" != typeof h && 0 < h.length && (n = f,
                    h = h.split("|")[0],
                    n.config = h);
                    f = {
                        containerId: a.getAttribute("id"),
                        params: f
                    };
                    "FlyoutViewer" == d && m || a.classList.add("s7responsiveViewer");
                    d = new s7viewers[d](f);
                    "undefined" != typeof Granite && "undefined" != typeof Granite.I18n && d.setLocalizedTexts(l());
                    S7dmUtils[b] = d;
                    d.init()
                } else
                    "image" === f && (a.dataset.breakpoints || "smartcrop" == h ? (a.removeAttribute("data-stagesize"),
                    e(a)) : (a.removeAttribute("data-enablehd"),
                    console.log("building simple image"),
                    m = a.dataset.stagesize,
                    d = a.dataset.imagepreset,
                    f = a.dataset.urlmodifiers,
                    b = {
                        src: a.dataset.imageserver + a.dataset.assetPath
                    },
                    d && (b.src += "?$" + d + "$"),
                    f && (b.src += (d ? "\x26" : "?") + f),
                    m && (m = m.split(","),
                    b.width = m[0],
                    1 < m.length && (b.height = m[1])),
                    a.appendChild(c(a, b))))
            })
        })
    }
    function e(a) {
        console.log("building responsive image");
        var b = a.dataset.imagepreset
          , d = a.dataset.imageserver
          , e = a.dataset.urlmodifiers
          , f = a.getAttribute("id") + "_resp";
        d = {
            id: f,
            src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            "data-src": d + a.dataset.assetPath,
            "class": "fluidimage",
            "data-mode": a.dataset.mode,
            "data-breakpoints": a.dataset.breakpoints,
            "data-enablehd": "never" == a.dataset.enablehd ? "never" : "always"
        };
        b && (d["data-src"] += "?$" + b + "$");
        e && (d["data-src"] += (b ? "\x26" : "?") + e);
        b = document.createElement("div");
        b.classList.add("s7responsiveContainer");
        b.appendChild(c(a, d));
        a.appendChild(b);
        console.log("load s7responsive " + f);
        s7responsiveImage(document.getElementById(f));
        document.getElementById(f).addEventListener("s7responsiveViewer", function(a) {
            a = a.s7responsiveViewerEvent;
            "breakpointchanged" == a.type ? (console.log("Old width: " + a.oldWidth),
            console.log("New width: " + a.width)) : console.log(a)
        })
    }
    function c(a, b) {
        var d = a.dataset.linkurl
          , c = a.dataset.linktarget
          , e = a.dataset.title
          , f = a.dataset.alt;
        a = document.createElement("img");
        for (var g in b)
            a.setAttribute(g, b[g]);
        if (d) {
            b = {
                href: d,
                target: c
            };
            f && (b.alt = f,
            b.title = f,
            a.setAttribute("alt", f));
            e && (b.title = e);
            e = document.createElement("a");
            for (var h in b)
                e.setAttribute(h, b[h]);
            e.appendChild(a);
            return e
        }
        f && a.setAttribute("alt", f);
        return a
    }
    function d() {
        console.log("S7Viewer is missing")
    }
    function g(a) {
        var b = {};
        if (a) {
            a = a.split("\x26");
            for (var d = 0; d < a.length; d++)
                if (0 < a[d].indexOf("\x3d")) {
                    var e = a[d].substring(0, a[d].indexOf("\x3d"))
                      , c = a[d].substring(a[d].indexOf("\x3d") + 1);
                    b[e] = c
                }
        }
        return b
    }
    function l() {
        var a = {}, b = Granite.I18n.getLocale(), d = s7sdk_i18n.localizedText, e = {}, c;
        for (c in d) {
            var g = d[c], h;
            for (h in g)
                e[c + "." + h] = g[h]
        }
        a[b] = e;
        a.defaultLocale = Granite.I18n.getLocale();
        return a
    }
    var h = {
        VideoViewer: "html5/js/VideoViewer.js",
        Responsive: "libs/responsive_image.js"
    };
    document.addEventListener("DOMContentLoaded", function(b) {
        if ((b = document.querySelectorAll(".s7dm-dynamic-media")) && 0 < b.length) {
            b = new S7dmUtils.Viewer;
            var c = document.querySelector(".s7dm-dynamic-media").dataset.viewerPath;
            c.startsWith("http://") && (c = c.replace("http://", "https://"));
            b.load(h, c).ready({
                success: a,
                fail: d
            })
        }
    })
}
).call(this);
console.log("media v2 init.js");
(function() {
    Expediagroup.Marketing.onInit(function() {
        var b = document.querySelector('[data-component\x3d"Header Container"]');
        Expediagroup.Marketing.initializeElementOnce(b, function(a) {
            document.getElementsByClassName("top-navigation_container");
            var b = document.querySelector(".top-navigation-hide-menu")
              , c = document.querySelector(".top-navigation_main-menu")
              , d = function() {
                window.Expediagroup.Marketing.HeaderUtils.addOrRemoveClass(b, "animate");
                window.Expediagroup.Marketing.HeaderUtils.addOrRemoveClass(c, "show-nav-menu")
            };
            (function() {
                var a = document.querySelector(".header-button.btn-secondary .header-button a.header-button__link")
                  , b = document.querySelector(".header-search_content")
                  , d = document.querySelector("section.top-nav-bar-content");
                if (a) {
                    var c = a.getAttribute("href")
                      , e = a.getAttribute("data-tracking-id");
                    a = a.getAttribute("target");
                    var u = document.querySelector(".header-button.btn-secondary .header-button a.header-button__link span:first-child").innerText.trim();
                    c = '\n                    \x3cdiv class\x3d"mega-menu-item_content regular-menu-item" id\x3d"signInMobile"\x3e\n                        \x3ca href\x3d"' + c + '" class\x3d"nav-text-link " target\x3d"' + a + '" data-tracking-id\x3d"' + e + '"\x3e\n                            ' + u + "\n                        \x3c/a\x3e\n                    \x3c/div\x3e\n                ";
                    c = (new DOMParser).parseFromString(c, "text/html").querySelector("div");
                    b ? (b = b.closest(".mega-menu-item_content.regular-menu-item")) && b.parentNode.insertBefore(c, b) : d && d.append(c)
                }
            }
            )();
            b.addEventListener("click", function() {
                d()
            });
            b.addEventListener("keypress", function() {
                d();
                c.querySelector(".mega-menu-item_content.regular-menu-item").querySelector(".nav-text-link").focus()
            })
        })
    })
}
)();
(function() {
    Expediagroup.Marketing.onInit(function() {
        var b = document.querySelectorAll('[data-component\x3d"Footer language switcher"]');
        if (b[0]) {
            var a = document.querySelector('meta[name\x3d"calculated-lang"]')
              , e = "en";
            a && (e = a.getAttribute("content"));
            b.forEach(function(a) {
                Expediagroup.Marketing.initializeElementOnce(a, function(b) {
                    var d = a.querySelector("ul");
                    document.querySelectorAll('head link[rel\x3d"alternate"]').forEach(function(a) {
                        var b = a.getAttribute("hreflang");
                        if (b != e && "x-default" != b) {
                            var c = a.getAttribute("title");
                            a = a.getAttribute("href");
                            Cookies.get("cq-editor-layer.page") && (a = location.href.replace("/" + e, "/" + b));
                            var g = document.createElement("li")
                              , h = document.createElement("a");
                            g.appendChild(h);
                            d.appendChild(g);
                            g.classList.add("cmp-languagenavigation__item");
                            g.classList.add("cmp-languagenavigation__item--langcode-" + b);
                            g.classList.add("cmp-languagenavigation__item--level-");
                            h.classList.add("cmp-languagenavigation__item-link");
                            h.setAttribute("href", a);
                            h.setAttribute("hreflang", b);
                            h.setAttribute("lang", b);
                            h.setAttribute("rel", "alternate");
                            h.setAttribute("title", c);
                            h.textContent = c
                        }
                    });
                    var c = b.querySelector(".cmp-footer_language_switcher__language");
                    b = b.querySelector(".cmp-close_button");
                    c.addEventListener("click", function(a) {
                        a.target.closest(".cmp-footer_language_switcher-container").querySelector(".cmp-footer_language_switcher-languages_list").style.display = "block";
                        document.body.classList.add("disable-scroll")
                    });
                    b.addEventListener("click", function(a) {
                        a.target.closest(".cmp-footer_language_switcher-languages_list").style.display = "none";
                        document.body.classList.remove("disable-scroll")
                    })
                })
            })
        }
    })
}
)();
(function() {
    var b = document.getElementsByClassName("text-common__table")
      , a = document.querySelectorAll(".text-common__body table");
    if (document.querySelectorAll(".text-common__body").length && a.length) {
        HTMLElement.prototype.wrap = function(a) {
            a.length || (a = [a]);
            for (var b = a.length - 1; 0 <= b; b--) {
                var c = 0 < b ? this.cloneNode(!0) : this
                  , e = a[b]
                  , h = e.parentNode
                  , f = e.nextSibling;
                c.appendChild(e);
                f ? h.insertBefore(c, f) : h.appendChild(c)
            }
        }
        ;
        var e = document.createElement("div");
        e.className = "text-common__table";
        e.wrap(a);
        Element.prototype.appendAfter = function(a) {
            a.parentNode.insertBefore(this, a.nextSibling)
        }
        ;
        b = $jscomp.makeIterator(b);
        for (a = b.next(); !a.done; a = b.next())
            a = a.value,
            e = document.createElement("p"),
            e.innerHTML = window.Granite ? "undefined" !== Granite.I18n ? "Scroll to see the full table." : Granite.I18n.get("Scroll to see the full table. ") : "Scroll to see the full table.",
            e.className = "mobile-text",
            e.appendAfter(a)
    }
}
)();
window.Expediagroup.Marketing.Document.ready(function() {
    function b(a) {
        a.forEach(function(a) {
            a = a.querySelector(".cmp-tabs__tablist");
            a.style.justifyContent = a.clientWidth < a.scrollWidth ? "flex-start" : "center"
        })
    }
    var a = document.querySelectorAll(".cmp-tabs--central");
    if (a.length) {
        b(a);
        window.addEventListener("resize", function() {
            b(a)
        });
        var e = new MutationObserver(function(a) {
            a.forEach(function(a) {
                "class" === a.attributeName && a.target.getAttribute(a.attributeName).split(" ").includes("cmp-tabs__tabpanel--active") && (a = a.target.querySelectorAll(".cmp-tabs__container .cmp-image__image--is-loading")) && a.forEach(function(a) {
                    a.dispatchEvent(new CustomEvent("cmp-image-redraw"))
                })
            })
        }
        );
        document.querySelectorAll(".cmp-tabs__tabpanel").forEach(function(a) {
            e.observe(a, {
                attributes: !0
            })
        })
    }
});
window.Expediagroup.Marketing.Document.ready(function() {
    var b = document.querySelectorAll(".cmp-sentiment__link")
      , a = window.location
      , e = "sentiment:" + a.hostname + a.pathname;
    (a = localStorage.getItem(e)) ? ((a = document.querySelector('.cmp-sentiment__link[data-type\x3d"' + a + '"]')) && a.classList.add("active"),
    b.forEach(function(a) {
        a.classList.add("disabled")
    })) : b.forEach(function(a) {
        a.addEventListener("click", function(a) {
            a.preventDefault();
            b.forEach(function(a) {
                a.classList.add("disabled")
            });
            var c = a.currentTarget.dataset.type;
            a.currentTarget.classList.add("active");
            localStorage.setItem(e, c)
        })
    })
});
(function() {
    var b = function() {
        document.querySelectorAll(".page-hero-container").forEach(function(a) {
            var b = a.querySelector(".page-hero-img-area");
            "true" === b.dataset.inMobile ? 768 <= window.innerWidth && (a.querySelector(".original-image-dock").appendChild(b),
            b.dataset.inMobile = !1) : 768 > window.innerWidth && (a.querySelector(".mobile-image-dock").appendChild(b),
            b.dataset.inMobile = !0)
        })
    };
    document.addEventListener("pageScroll", b);
    window.addEventListener("resize", b);
    window.addEventListener("orientationchange", b);
    window.Expediagroup.Marketing.Document.ready(b)
}
)();
(function() {
    var b = function() {
        document.querySelectorAll(".page-hero--detail-page").forEach(function(a) {
            var b = a.querySelector(".page-hero-img-area");
            a.querySelector(".mobile-image-dock").appendChild(b)
        })
    };
    document.addEventListener("pageScroll", b);
    window.addEventListener("resize", b);
    window.addEventListener("orientationchange", b);
    window.Expediagroup.Marketing.Document.ready(b)
}
)();
(function() {
    window.addEventListener("DOMContentLoaded", function(b) {
        var a = document.querySelector('[data-component\x3d"Home Hero"]');
        a && window.addEventListener("load", function() {
            function b() {
                var a = document.querySelector(".home-hero-arrow-downward")
                  , b = document.querySelector(".blade");
                b = b ? b.clientHeight : 0;
                var c = document.querySelector(".header-container");
                c = c ? c.clientHeight : 0;
                a && "none" !== a.style.display && (a.style.top = window.innerHeight - (b + c + 48))
            }
            function c() {
                var b = screen.width;
                d.style.display = a.offsetTop + a.clientHeight + 100 > document.documentElement.scrollTop + document.documentElement.clientHeight && 768 < b ? "block" : "none"
            }
            var d = a.getElementsByClassName("home-hero-arrow-downward")[0]
              , g = a.offsetTop
              , l = a.clientHeight;
            c();
            d.addEventListener("click", function() {
                var a = g + l;
                window.Expediagroup && window.Expediagroup.Marketing && window.Expediagroup.Marketing.Utils && !window.Expediagroup.Marketing.Utils.isIE() && !window.Expediagroup.Marketing.Utils.isEdge() ? window.scrollTo({
                    top: a,
                    behavior: "smooth"
                }) : document.documentElement.scrollTop = a
            });
            window.addEventListener("resize", function() {
                c();
                b()
            }, !1);
            window.addEventListener("orientationchange", c, !1);
            document.addEventListener("pageScroll", c, !1);
            b()
        }, !1)
    })
}
)();
(function() {
    Expediagroup.Marketing.onInit(function() {
        var b = document.getElementsByClassName("faq-accordion__item"), a;
        for (a = 0; a < b.length; a++)
            Expediagroup.Marketing.initializeElementOnce(b[a], function(a) {
                a.addEventListener("click", function() {
                    var a = this.querySelector(".faq-accordion__panel");
                    a.style.maxHeight ? (a.style.maxHeight = null,
                    this.classList.remove("active")) : (a.style.maxHeight = a.scrollHeight + "px",
                    this.classList.add("active"))
                })
            })
    })
}
)();
(function() {
    var b = queryParameter("question");
    if (b) {
        b = b.replace(/_/g, "-");
        b = b.replace(/\?/g, "");
        var a = document.querySelector('.faq-accordion__button[data-tracking-id*\x3d"faq-item.' + b + '"]');
        a && setTimeout(function() {
            var b = a.parentNode.parentNode;
            b = b.offsetTop + b.clientHeight;
            window.Expediagroup && window.Expediagroup.Marketing && window.Expediagroup.Marketing.Utils && !window.Expediagroup.Marketing.Utils.isIE() && !window.Expediagroup.Marketing.Utils.isEdge() ? window.scrollTo({
                top: b,
                behavior: "smooth"
            }) : document.documentElement.scrollTop = b;
            setTimeout(function() {
                a.click();
                a.focus()
            }, 200)
        }, 2E3)
    }
}
)();
(function() {
    window.Expediagroup.Marketing.Document.ready(function() {
        function b() {
            var a, b, g;
            document.querySelectorAll("section.announcementBanner").forEach(function(c) {
                g = c.dataset.scheduleon;
                a = c.dataset.starttime;
                b = c.dataset.endtime;
                c.querySelector("button#banner-close").addEventListener("click", e);
                var d = document.querySelector(".root.container");
                d && (d.insertBefore(c, d.firstChild),
                (d = document.querySelector("body .xf-page")) && d.parentNode.removeChild(d));
                d = !1;
                if ("" !== b) {
                    var f = new Date
                      , l = new Date(b);
                    f > l && (d = !0,
                    c.classList.add("hide"))
                }
                "" === g || d || ("now" == g ? c.classList.remove("hide") : "later" == g && (f = new Date,
                l = new Date(a),
                f > l && c.classList.remove("hide")));
                -1 < window.location.pathname.indexOf("/content/experience-fragments/marketing/welcome2eg") && c.classList.remove("hide")
            })
        }
        function a() {
            document.querySelectorAll("section.announcementBanner").forEach(function(a) {
                null != a && (a = document.querySelector("body .xf-page")) && a.parentNode.removeChild(a)
            })
        }
        function e() {
            sessionStorage.setItem("banner", "closed");
            document.querySelectorAll("section.announcementBanner").forEach(function(a) {
                a.classList.add("hide")
            })
        }
        "closed" !== sessionStorage.getItem("banner") && b();
        "closed" === sessionStorage.getItem("banner") && a()
    })
}
)();
(function() {
    function b(a) {
        a = a.getAttribute("data-interaction-port-id");
        return !!localStorage.getItem("interactionPorts/" + a)
    }
    function a(a) {
        return "context-hub" === e(a) && "modes/currentMode" === c(a) && "partner" === localStorage.getItem("mode")
    }
    function e(a) {
        return a.getAttribute("data-storage-type")
    }
    function c(a) {
        return a.getAttribute("data-storage-path")
    }
    function d(a, b) {
        var c = a.parentNode
          , d = a.querySelector(".interaction-port-question-section");
        b = a.querySelector('.interaction-port-answer[data-storage-value\x3d"' + b + '"]');
        a = a.querySelector(".show-answer");
        null != a && (a.classList.remove("show-answer"),
        c.classList.remove("change-main-color"));
        c.classList.add("change-main-color");
        d.classList.add("hide-question");
        b.classList.add("show-answer")
    }
    function g(a, b, c, d) {
        var e = c.querySelector(d)
          , g = a.parentNode.nextSibling;
        a.addEventListener("click", function() {
            Expediagroup.Marketing.InteractionPortTools.detectInteractionPortShowAnswer(b, a)
        });
        Expediagroup.Marketing.InteractionPortTools.changeInteractionPortPosition(1200, b, c, a, e, g);
        window.addEventListener("resize", function() {
            Expediagroup.Marketing.InteractionPortTools.changeInteractionPortPosition(1200, b, c, a, e, g)
        }, !1);
        Expediagroup.Marketing.InteractionPortTools.detectInteractionPortShowAnswer(b, a)
    }
    Expediagroup.Marketing.onInit(function() {
        document.querySelectorAll('[data-component\x3d"Interaction Port"]').forEach(function(l) {
            Expediagroup.Marketing.initializeElementOnce(l, function(h) {
                if (b(h) || a(h)) {
                    var f = e(h)
                      , l = c(h);
                    if ("context-hub" === f) {
                        var u = localStorage.getItem("modes/currentMode" === l ? "mode" : "experience");
                        null != u && d(h, u)
                    }
                    "local-storage" === f && (f = localStorage.getItem(l),
                    null != f && d(h, f))
                }
                f = h.querySelector(".interaction-port-question-section");
                f.addEventListener("click", function(a) {
                    a = a.target;
                    if (a.classList.contains("interaction-port__button")) {
                        a = a.parentNode.getAttribute("data-storage-value");
                        var b = e(h)
                          , g = c(h);
                        "context-hub" === b && localStorage.setItem("modes/currentMode" === g ? "mode" : "experience", a);
                        "local-storage" === b && localStorage.setItem(g, a);
                        b = h.getAttribute("data-interaction-port-id");
                        localStorage.setItem("interactionPorts/" + b, "true");
                        d(h, a)
                    }
                });
                f.addEventListener("keyup", function(a) {
                    var b = a.target;
                    b.classList.contains("interaction-port__button") && 9 == a.keyCode && b.setAttribute("style", "outline: 3px solid red")
                });
                f.addEventListener("focusout", function(a) {
                    a = a.target;
                    a.classList.contains("interaction-port__button") && a.removeAttribute("style")
                });
                (f = document.querySelector('[data-component\x3d"Home Hero"]')) && f.querySelector(".interaction-port") && g(f.querySelector(".interaction-port"), "home-hero", f, ".home-hero-text-area");
                (f = document.querySelector('[data-component \x3d "Page Hero"]')) && f.querySelector(".interaction-port") && g(f.querySelector(".interaction-port"), "page-hero", f, ".page-hero-text-area")
            })
        })
    })
}
)();
(function() {
    Expediagroup.Marketing.onInit(function() {
        var b = document.querySelector('[data-compoment\x3d"Top Navigation Bar"]');
        Expediagroup.Marketing.initializeElementOnce(b, function(a) {
            function b() {
                var a = q.querySelectorAll(".regular-menu-item");
                return Array.prototype.slice.call(a, 0)
            }
            function c() {
                var a = m.querySelectorAll(".regular-menu-item");
                return Array.prototype.slice.call(a, 0)
            }
            function d(a, b) {
                var c = a.currentStyle || window.getComputedStyle(a);
                c = parseFloat(c.marginLeft.replace("px", "").replace("auto", "0"));
                return b ? a.getBoundingClientRect().width + c : a.getBoundingClientRect().width
            }
            function g(a) {
                var c = 0;
                b().forEach(function(a) {
                    c += d(a, !0)
                });
                a && (c += d(p, !0));
                return c
            }
            function l() {
                var a = c().sort(function(a, b) {
                    return a.dataset.originalOrderIndex < b.dataset.originalOrderIndex
                })[0];
                if (a) {
                    var d = b().filter(function(a) {
                        return !a.closest(".more-container")
                    }).filter(function(b) {
                        return a.dataset.originalOrderIndex < b.dataset.originalOrderIndex
                    }).sort(function(a, b) {
                        return a.dataset.originalOrderIndex < b.dataset.originalOrderIndex
                    })[0];
                    d ? q.insertBefore(a, d) : q.insertBefore(a, p)
                }
            }
            function h() {
                m && l();
                if (g() >= q.getBoundingClientRect().width && (b().reverse().forEach(function(a) {
                    g(!0) > q.getBoundingClientRect().width && null == a.querySelector(".expanded-link") && m.insertBefore(a, m.firstChild)
                }),
                c().length ? p.style.display = "" : p.style.display = "none",
                p)) {
                    var a = p.getBoundingClientRect().left - 24 - 24;
                    m.style.left = a + "px"
                }
            }
            function f() {
                p && (p.style.display = "none");
                b().forEach(function(a, b) {
                    "undefined" === typeof a.dataset.originalOrderIndex && (a.dataset.originalOrderIndex = b)
                });
                1201 <= (0 < window.innerWidth ? window.innerWidth : screen.width) ? (u(),
                h()) : (r(),
                m && l());
                n()
            }
            function r() {
                var b = a.querySelector(".show-sub-menu");
                null != b && (b.classList.remove("show-sub-menu"),
                a.querySelector(".active-link").classList.remove("active-link"))
            }
            function u() {
                var a = document.querySelector(".show-nav-menu");
                null != a && (document.querySelector(".animate").classList.remove("animate"),
                a.classList.remove("show-nav-menu"))
            }
            var q = document.querySelector(".top-nav-bar-content")
              , p = q.querySelector(".more-button");
            document.querySelector(".top-navigation_options");
            var m = document.querySelector(".more-container");
            a.addEventListener("click", function(b) {
                var c = b.target
                  , d = window.Expediagroup.Marketing.Utils.getClosestNode("show-sub-menu", c);
                if (null == d)
                    if (d = window.Expediagroup.Marketing.Utils.getClosestNode("more-button", c))
                        window.Expediagroup.Marketing.HeaderUtils.closeSubMenuWindow(),
                        c = m.classList,
                        c.contains("show-more-container") ? c.remove("show-more-container") : c.add("show-more-container");
                    else if (d = window.Expediagroup.Marketing.Utils.getClosestNode("mega-menu-item_content", c)) {
                        if (null != d.querySelector(".expanded-link"))
                            b: {
                                c = d;
                                b.preventDefault();
                                b = a.querySelector(".show-sub-menu");
                                if (null != b && (b = window.Expediagroup.Marketing.Utils.getClosestNode("mega-menu-item_content", b),
                                window.Expediagroup.Marketing.HeaderUtils.closeSubMenuWindow(),
                                b == c))
                                    break b;
                                b = window.Expediagroup.Marketing.Utils.getClosestNode("mega-menu-item_content", c);
                                null != window.Expediagroup.Marketing.Utils.getClosestNode("more-container", c) && (window.Expediagroup.Marketing.Utils.setNextElementSibling(b.nextElementSibling),
                                b.classList.add("more-button-el"),
                                q.appendChild(b));
                                window.Expediagroup.Marketing.HeaderUtils.addOrRemoveClass(b, "active-link");
                                window.Expediagroup.Marketing.HeaderUtils.expandSubMenu(b);
                                c = b.querySelector(".tab-header-menu");
                                c.classList.add("tab-header-animate");
                                c = c.querySelector(".js-tab-trigger.active");
                                c = b.querySelector(".js-tab-content[data-tab\x3d'" + c.getAttribute("data-tab") + "']");
                                window.Expediagroup.Marketing.HeaderUtils.animateImages(c)
                            }
                    } else
                        window.Expediagroup.Marketing.HeaderUtils.closeSubMenuWindow()
            });
            var n = function() {
                var a = document.querySelector(".top-navigation-hide-menu")
                  , b = document.querySelector(".top-navigation_logo .logo")
                  , c = q.querySelectorAll(".mega-menu-item_content");
                "md" === (1200 <= window.innerWidth ? "lg" : 768 > window.innerWidth ? "sm" : "md") && 1 === c.length && "signInMobile" === c[0].id ? (a.classList.add("no-content"),
                b.classList.add("no-left-margin")) : (a.classList.remove("no-content"),
                b.classList.remove("no-left-margin"))
            };
            window.addEventListener("resize", f);
            f()
        })
    })
}
)();
(function() {
    Expediagroup.Marketing.onInit(function() {
        function b(a) {
            var b = a.target;
            if (b.matches(".tab-header__item-text")) {
                var d = window.Expediagroup.Marketing.Utils.getClosestNode("navigation-items", b);
                a = d.querySelector(".js-tab-trigger.active");
                var e = d.querySelector(".js-tab-content.active");
                b = window.Expediagroup.Marketing.Utils.getClosestNode("js-tab-trigger", b);
                d = d.querySelector(".js-tab-content[data-tab\x3d'" + b.getAttribute("data-tab") + "']");
                1200 >= window.innerWidth ? (a = d.querySelector(".tab-content__link a").getAttribute("href"),
                window.location.href = a) : (a.classList.remove("active"),
                e.classList.remove("active"),
                b.classList.add("active"),
                d.classList.add("active"),
                window.Expediagroup.Marketing.HeaderUtils.animateImages(d))
            }
        }
        var a = document.querySelectorAll(".js-tab-trigger");
        0 != a.length && a.forEach(function(a) {
            Expediagroup.Marketing.initializeElementOnce(a, function(a) {
                a.addEventListener("click", b)
            })
        })
    })
}
)();
(function() {
    Expediagroup.Marketing.onInit(function() {
        var b = document.querySelectorAll(".tab-header.tab-header-menu");
        if (0 != b.length) {
            var a = function() {
                var a = {};
                b.forEach(function(b, c) {
                    a[c] = 0
                });
                return a
            }()
              , e = function(a, b) {
                a[b].setAttribute("tabindex", "0");
                a[b].classList.add("active");
                a[b].focus()
            }
              , c = function(b, c) {
                b = b.querySelector('[tabindex\x3d"0"]').getAttribute("data-tab");
                b != a[c] && (a[c] = b)
            };
            b.forEach(function(b, g) {
                window.Expediagroup.Marketing.initializeElementOnce(b, function(b) {
                    b.addEventListener("keydown", function(d) {
                        var f = d.keyCode;
                        if (1200 < window.screen.width) {
                            var h = b.querySelectorAll("[role\x3d'tab']");
                            if (40 == f || 38 == f)
                                c(b, g),
                                h[a[g]].setAttribute("tabindex", -1),
                                h[a[g]].classList.remove("active"),
                                40 == f && (a[g]++,
                                a[g] >= h.length && (a[g] = 0),
                                e(h, a[g]),
                                d.preventDefault()),
                                38 == f && (a[g]--,
                                0 > a[g] && (a[g] = h.length - 1),
                                e(h, a[g]),
                                d.preventDefault()),
                                f = h[a[g]].getAttribute("data-tab"),
                                h = b.parentNode,
                                d = h.querySelector(".js-tab-content.active"),
                                f = h.querySelector(".tab-content.tab-header").querySelector('[data-tab\x3d"' + f + '"]'),
                                d.classList.remove("active"),
                                f.classList.add("active"),
                                window.Expediagroup.Marketing.HeaderUtils.animateImages(f)
                        } else
                            a: if (h = b.querySelectorAll("[role\x3d'tab']"),
                            9 == f) {
                                c(b, g);
                                h[a[g]].setAttribute("tabindex", -1);
                                h[a[g]].classList.remove("active");
                                if (d.shiftKey) {
                                    if (a[g]--,
                                    0 >= a[g]) {
                                        a[g] = 0;
                                        h[a[g]].setAttribute("tabindex", 0);
                                        h[a[g]].classList.add("active");
                                        break a
                                    }
                                } else if (a[g]++,
                                a[g] >= h.length) {
                                    a[g] = h.length - 1;
                                    h[a[g]].setAttribute("tabindex", 0);
                                    h[a[g]].classList.add("active");
                                    break a
                                }
                                e(h, a[g]);
                                d.preventDefault()
                            }
                    })
                })
            })
        }
    })
}
)();
window.Element && !Element.prototype.closest && (Element.prototype.closest = function(b) {
    b = (this.document || this.ownerDocument).querySelectorAll(b);
    var a = this, e;
    do
        for (e = b.length; 0 <= --e && b.item(e) !== a; )
            ;
    while (0 > e && (a = a.parentElement));
    return a
}
);
window.Element && !Element.prototype.matches && (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(b) {
    b = (this.document || this.ownerDocument).querySelectorAll(b);
    for (var a = b.length; 0 <= --a && b.item(a) !== this; )
        ;
    return -1 < a
}
);
Object.assign || (Object.assign = function(b, a) {
    if (null === b)
        throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(b), c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (null !== d)
            for (var g in d)
                Object.prototype.hasOwnProperty.call(d, g) && (e[g] = d[g])
    }
    return e
}
);
(function(b) {
    b.forEach(function(a) {
        Object.prototype.hasOwnProperty.call(a, "remove") || Object.defineProperty(a, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                this.parentNode.removeChild(this)
            }
        })
    })
}
)([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
(function() {
    function b(a) {
        a = a.dataset;
        var b = []
          , c = "image";
        c = c.charAt(0).toUpperCase() + c.slice(1);
        c = ["is", "hook" + c];
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d];
                0 === d.indexOf("cmp") && (d = d.slice(3),
                d = d.charAt(0).toLowerCase() + d.substring(1),
                -1 === c.indexOf(d) && (b[d] = e))
            }
        return b
    }
    function a(a) {
        function b(a) {
            a.element.removeAttribute("data-cmp-is");
            x(a.options);
            w(a.element);
            if (a.options.src && Object.prototype.hasOwnProperty.call(a.options, "dmimage") && "SmartCrop:Auto" === a.options.smartcroprendition) {
                var b = new XMLHttpRequest;
                a = decodeURIComponent(a.options.src).split("{.width}")[0] + "?req\x3dset,json";
                b.open("GET", a, !1);
                b.onload = function() {
                    if (200 <= b.status && 400 > b.status) {
                        var a = new RegExp(/^{[\s\S]*}$/gmi), c = (new RegExp(/^(?:\/\*jsonp\*\/)?\s*([^()]+)\(([\s\S]+),\s*"[0-9]*"\);?$/gmi)).exec(b.responseText), d;
                        c && (c = c[2],
                        a.test(c) && (d = JSON.parse(c)));
                        if (d && d.set.relation && 0 < d.set.relation.length)
                            for (a = 0; a < d.set.relation.length; a++)
                                t[parseInt(d.set.relation[a].userdata.SmartCropWidth)] = ":" + d.set.relation[a].userdata.SmartCropDef
                    }
                }
                ;
                b.send()
            }
            k._elements.noscript && (k._elements.container = k._elements.link ? k._elements.link : k._elements.self,
            p(),
            k._properties.lazy && q(),
            k._elements.map && k._elements.image.addEventListener("load", v),
            window.addEventListener("resize", y),
            "focus click load transitionend animationend scroll".split(" ").forEach(function(a) {
                document.addEventListener(a, k.update)
            }),
            k._elements.image.addEventListener("cmp-image-redraw", k.update),
            k.update())
        }
        function e() {
            var a = k._properties.widths && 0 < k._properties.widths.length || 0 < Object.keys(t).length;
            if (0 < Object.keys(t).length) {
                var b = h(Object.keys(t), !1);
                b = t[b]
            } else
                b = a ? (k._properties.dmimage ? "" : ".") + h(k._properties.widths, !0) : "";
            b = k._properties.src.replace("{.width}", b);
            b = b.replace("{dpr}", l);
            var c = k._elements.image.getAttribute("src");
            if (b !== c)
                if (null === c || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" === c)
                    k._elements.image.setAttribute("src", b);
                else {
                    var d = k._properties.src.split("{.width}")
                      , e = c.startsWith(d[0]);
                    e && 1 < d.length && (e = c.endsWith(d[d.length - 1]));
                    e && (k._elements.image.setAttribute("src", b),
                    a || window.removeEventListener("scroll", k.update))
                }
            k._lazyLoaderShowing && k._elements.image.addEventListener("load", m)
        }
        function h(a, b) {
            for (var c = k._elements.self, d = c.clientWidth; 0 === d && c.parentNode; )
                c = c.parentNode,
                d = c.clientWidth;
            b = d * (b ? l : 1);
            c = a.length;
            for (d = 0; d < c - 1 && a[d] < b; )
                d++;
            return a[d].toString()
        }
        function q() {
            var a = k._elements.image.getAttribute("width")
              , b = k._elements.image.getAttribute("height");
            if (a && b) {
                var c = d.style;
                c["padding-bottom"] = b / a * 100 + "%";
                for (var e in c)
                    Object.prototype.hasOwnProperty.call(c, e) && (k._elements.image.style[e] = c[e])
            }
            k._elements.image.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            k._elements.image.classList.add(d.cssClass);
            k._lazyLoaderShowing = !0
        }
        function p() {
            var a = k._elements.noscript.textContent.trim();
            a = a.replace(/&(amp;)*lt;/g, "\x3c");
            a = a.replace(/&(amp;)*gt;/g, "\x3e");
            a = (new DOMParser).parseFromString(a, "text/html");
            var b = a.querySelector(c.image);
            b.removeAttribute("src");
            k._elements.container.insertBefore(b, k._elements.noscript);
            (a = a.querySelector(c.map)) && k._elements.container.insertBefore(a, k._elements.noscript);
            k._elements.noscript.parentNode.removeChild(k._elements.noscript);
            k._elements.container.matches(c.image) ? k._elements.image = k._elements.container : k._elements.image = k._elements.container.querySelector(c.image);
            k._elements.map = k._elements.container.querySelector(c.map);
            k._elements.areas = k._elements.container.querySelectorAll(c.area)
        }
        function m() {
            k._elements.image.classList.remove(d.cssClass);
            for (var a in d.style)
                Object.prototype.hasOwnProperty.call(d.style, a) && (k._elements.image.style[a] = "");
            k._elements.image.removeEventListener("load", m);
            k._lazyLoaderShowing = !1
        }
        function n() {
            if (k._elements.areas && 0 < k._elements.areas.length)
                for (var a = 0; a < k._elements.areas.length; a++) {
                    var b = k._elements.image.width
                      , c = k._elements.image.height;
                    if (b && c) {
                        var d = k._elements.areas[a].dataset.cmpRelcoords;
                        if (d) {
                            d = d.split(",");
                            for (var e = Array(d.length), g = 0; g < e.length; g++)
                                e[g] = 0 === g % 2 ? parseInt(d[g] * b) : parseInt(d[g] * c);
                            k._elements.areas[a].coords = e
                        }
                    }
                }
        }
        function w(a) {
            k._elements = {};
            k._elements.self = a;
            a = k._elements.self.querySelectorAll("[data-cmp-hook-image]");
            for (var b = 0; b < a.length; b++) {
                var c = a[b]
                  , d = "image";
                d = d.charAt(0).toUpperCase() + d.slice(1);
                k._elements[c.dataset["cmpHook" + d]] = c
            }
        }
        function x(a) {
            k._properties = {};
            for (var b in g)
                if (Object.prototype.hasOwnProperty.call(g, b)) {
                    var c = g[b];
                    k._properties[b] = a && null != a[b] ? c && "function" === typeof c.transform ? c.transform(a[b]) : a[b] : g[b]["default"]
                }
        }
        function y() {
            k.update();
            n()
        }
        function v() {
            n()
        }
        var k = this
          , t = {};
        k.update = function() {
            if (k._properties.lazy) {
                if (null === k._elements.container.offsetParent)
                    var a = !1;
                else {
                    a = window.pageYOffset;
                    var b = a + document.documentElement.clientHeight
                      , c = k._elements.container.getBoundingClientRect().top + a;
                    a = c + k._elements.container.clientHeight >= a - k._properties.lazythreshold && c <= b + k._properties.lazythreshold
                }
                a && e()
            } else
                e()
        }
        ;
        a && a.element && b(a)
    }
    function e() {
        for (var d = document.querySelectorAll(c.self), e = 0; e < d.length; e++)
            new a({
                element: d[e],
                options: b(d[e])
            });
        d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        e = document.querySelector("body");
        (new d(function(d) {
            d.forEach(function(d) {
                d = [].slice.call(d.addedNodes);
                0 < d.length && d.forEach(function(d) {
                    d.querySelectorAll && [].slice.call(d.querySelectorAll(c.self)).forEach(function(c) {
                        new a({
                            element: c,
                            options: b(c)
                        })
                    })
                })
            })
        }
        )).observe(e, {
            subtree: !0,
            childList: !0,
            characterData: !0
        })
    }
    var c = {
        self: '[data-cmp-is\x3d"image"]',
        image: '[data-cmp-hook-image\x3d"image"]',
        map: '[data-cmp-hook-image\x3d"map"]',
        area: '[data-cmp-hook-image\x3d"area"]'
    }
      , d = {
        cssClass: "cmp-image__image--is-loading",
        style: {
            height: 0,
            "padding-bottom": ""
        }
    }
      , g = {
        widths: {
            "default": [],
            transform: function(a) {
                var b = [];
                a.split(",").forEach(function(a) {
                    a = parseFloat(a);
                    isNaN(a) || b.push(a)
                });
                return b
            }
        },
        lazy: {
            "default": !1,
            transform: function(a) {
                return !(null === a || "undefined" === typeof a)
            }
        },
        dmimage: {
            "default": !1,
            transform: function(a) {
                return !(null === a || "undefined" === typeof a)
            }
        },
        lazythreshold: {
            "default": 0,
            transform: function(a) {
                a = parseInt(a);
                return isNaN(a) ? 0 : a
            }
        },
        src: {
            transform: function(a) {
                return decodeURIComponent(a)
            }
        }
    }
      , l = window.devicePixelRatio || 1;
    "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}
)();
(function() {
    window.CQ = window.CQ || {};
    window.CQ.CoreComponents = window.CQ.CoreComponents || {};
    window.CQ.CoreComponents.container = window.CQ.CoreComponents.container || {};
    window.CQ.CoreComponents.container.utils = {};
    window.CQ.CoreComponents.container.utils = {
        getDeepLinkItemIdx: function(b, a) {
            if (window.location.hash) {
                var e = window.location.hash.substring(1);
                if (document.getElementById(e) && e && b && b._config && b._config.element && b._config.element.id && b._elements && b._elements[a] && 0 === e.indexOf(b._config.element.id + "-item-"))
                    for (var c = 0; c < b._elements[a].length; c++)
                        if (b._elements[a][c].id === e)
                            return c;
                return -1
            }
        },
        getDeepLinkItem: function(b, a) {
            var e = window.CQ.CoreComponents.container.utils.getDeepLinkItemIdx(b, a);
            if (b && b._elements && b._elements[a])
                return b._elements[a][e]
        },
        scrollToAnchor: function() {
            setTimeout(function() {
                if (window.location.hash) {
                    var b = decodeURIComponent(window.location.hash.substring(1));
                    (b = document.getElementById(b)) && b.offsetTop && b.scrollIntoView()
                }
            }, 100)
        }
    }
}
)();
(function() {
    if ("welcome.expediagroup.com" === window.location.hostname) {
        var b = function() {
            console.log("waiting for GA-- " + typeof ga);
            "undefined" !== typeof ga ? setTimeout(function() {
                a(ga)
            }, 3E3) : setTimeout(b, 1E3)
        }
          , a = function(a) {
            var b = [].slice.call(document.querySelectorAll("a[href*\x3d'apps.expediapartnercentral.com/lodging']"));
            if (b[0]) {
                var d = a.getAll()[0].get("linkerParam")
                  , e = {
                    cs: "1029",
                    "zh-cn": "2052",
                    "zh-tw": "1028",
                    da: "1030",
                    de: "1031",
                    el: "1032",
                    en: "1033",
                    es: "3082",
                    fr: "1036",
                    hr: "1050",
                    it: "1040",
                    ja: "1041",
                    ko: "1042",
                    hu: "1038",
                    nl: "1043",
                    no: "1044",
                    pl: "1045",
                    "pt-br": "1046",
                    "pt-pt": "2070",
                    ru: "1049",
                    fi: "1035",
                    sv: "1053",
                    th: "1054",
                    vi: "1066",
                    tr: "1055"
                }
                  , l = window.location.pathname.split("/")[1];
                b.forEach(function(a) {
                    -1 >= a.href.indexOf("apps.expediapartnercentral.com/lodging/help") && (a.href = "https://www.expediapartnercentral.com/Account/Logon?langId\x3d" + e[l] + "%26" + d + "\x26returnUrl\x3d" + a.href + "%3F" + d)
                })
            }
        };
        b()
    }
}
)();
(function() {
    var b = {
        "https://dev-publish.welcome.expediagroup.com": {
            script: "https://cmp.osano.com/AzqLGwSC5AMNnWKx/59dfb9ce-a518-443d-992c-44ab3e27b646/osano.js"
        },
        "https://stage-publish.welcome.expediagroup.com": {
            script: "https://cmp.osano.com/AzqLGwSC5AMNnWKx/26627061-b0e5-472c-9fef-9fe9c1ea9c36/osano.js"
        },
        "https://welcome.expediagroup.com": {
            script: "https://cmp.osano.com/AzqLGwSC5AMNnWKx/a27b3c52-1766-425b-a884-5158cac34e5e/osano.js"
        }
    }
      , a = "ar bg ca cs da de el en-gb en es fa fi fr he hi hr hu id is it ja ko lt lv ms nl no pl pt-br pt ro ru sk sr sv th tr uk vi zh-hk zh-tw zh".split(" ");
    if (b[window.location.origin]) {
        var e = document.createElement("script");
        e.src = b[window.location.origin].script;
        e.onload = function() {
            var b = window.location.pathname.split("/")[1] || "en";
            -1 == a.indexOf(b) && (b = "en");
            window.Osano && window.Osano.cm && (window.Osano.cm.locale = b)
        }
        ;
        document.head.appendChild(e)
    }
}
)();
(function() {
    var b, a = localStorage.getItem("ContextHubPersistence");
    a && (a = JSON.parse(a).store.experience.currentExperience) && ["growth", "join"].includes(a) && (b = a);
    b = localStorage.getItem("experience") || b || "growth";
    (a = document.querySelector('head meta[name\x3d"switch-to-experience"]')) && (a = a.getAttribute("content")) && ["growth", "join"].includes(a) && (b = a);
    (a = queryParameter("experience")) && ["growth", "join"].includes(a) && (b = a);
    "growth" === b && "welcome.expediagroup.com" === window.location.hostname && (a = document.querySelector("html").lang) && (a = a.toLowerCase().replace("_", "-"),
    "en" !== a && (a = location.href.replace("/" + a + "/", "/en/"),
    location.href = a));
    localStorage.setItem("experience", b)
}
)();
(function() {
    var b, a = localStorage.getItem("ContextHubPersistence");
    a && (a = JSON.parse(a).store.modes.currentMode) && ["prospect", "partner"].includes(a) && (b = a);
    b = localStorage.getItem("mode") || b || "prospect";
    (a = queryParameter("mode")) && ["prospect", "partner"].includes(a) && (b = a);
    localStorage.setItem("mode", b)
}
)();
window.Expediagroup.Marketing.Document.ready(function() {
    var b = function() {
        var a = localStorage.getItem("experience")
          , b = localStorage.getItem("mode")
          , d = document.querySelector('meta[name\x3d"template"]');
        return d && "campaign-landing-fast-start-page" == d.getAttribute("content") ? "fast-start" : (a + "-" + b).replace("growth-prospect", "master")
    }
      , a = function() {
        document.querySelectorAll(".personalized").forEach(function(a) {
            var c = a.dataset.path
              , d = a.dataset.originalPath;
            d || (d = a.dataset.originalPath = c);
            c = d.split("/");
            d.endsWith("/jcr:content") && c.pop();
            c.pop();
            c.push(b());
            d = c.join("/");
            a.dataset.path = d
        })
    };
    a();
    window.personalize = a();
    window.Expediagroup.Marketing.Utils.loadExperienceFragments()
});
Expediagroup.Marketing.GTM = function() {
    var b = !1
      , a = function(a) {
        Expediagroup.Bridge.getLocation().then(function(b) {
            var c = b.isEU;
            b = b.ipAddress;
            var d = {
                event: "cookiePolicyAccepted",
                OIP: a
            };
            "undefined" !== typeof b && (d.ipAddress = b);
            "undefined" !== typeof c && (d.isEU = c);
            dataLayer.push(d)
        })
    }
      , e = function(a) {
        b ? console.warn("The attempt has been done to start GTM again, while it was started already") : Expediagroup.Bridge.getLocation().then(function(c) {
            var d = document.querySelector('meta[name\x3d"gtm-container-id"]').getAttribute("content")
              , e = c.isEU;
            c = c.ipAddress;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                "gtm.start": (new Date).getTime(),
                event: "gtm.js",
                ipAddress: c,
                isEU: e,
                OIP: "undefined" !== typeof a ? a : "0"
            });
            e = document.getElementsByTagName("script")[0];
            c = document.createElement("script");
            c.async = !0;
            c.src = "https://www.googletagmanager.com/gtm.js?id\x3d" + d;
            e.parentNode.insertBefore(c, e);
            b = !0
        })
    };
    return {
        start: e,
        startInAdvancedMode: function() {
            e("1")
        },
        startInLimitedMode: function() {
            e("0")
        },
        turnOnAdvancedTracking: function() {
            a("1")
        },
        turnOffAdvancedTracking: function() {
            a("0")
        }
    }
}();
Expediagroup.Marketing.GDPR = function() {
    var b = Expediagroup.Marketing.GTM
      , a = function() {
        return (new Date).toJSON().slice(0, 10).replace(/-/g, "/")
    }
      , e = function() {
        var b = "undefined" !== typeof Cookies.get("OIP") ? Cookies.get("OIP") : "0"
          , c = "1" === b
          , d = "undefined" !== typeof Cookies.get("GDPRConsentRequired") ? Cookies.get("GDPRConsentRequired") : !0
          , e = "undefined" !== typeof Cookies.get("OIP-date") ? Cookies.get("OIP-date") : a()
          , r = "undefined" !== typeof Cookies.get("OIP-source") ? Cookies.get("OIP-source") : location.href;
        return {
            isAccepted: c,
            isConsentRequired: d,
            OIP: b,
            OIPDate: e,
            OIPSource: r
        }
    }
      , c = function(b) {
        var c = a()
          , d = location.href;
        Cookies.set("OIP", b, {
            expires: 364
        });
        Cookies.set("OIP-date", c);
        Cookies.set("OIP-source", d);
        return e()
    }
      , d = function() {
        var a = c("1");
        MarketoForms.submitMarketoTrackingForm(a.OIPDate, a.OIPSource, "yes");
        b.turnOnAdvancedTracking()
    };
    return {
        optIn: d,
        optOut: function() {
            var a = c("0");
            MarketoForms.submitMarketoTrackingForm(a.OIPDate, a.OIPSource, "no");
            b.turnOffAdvancedTracking()
        },
        getState: e,
        setConsentRequired: function(a) {
            Cookies.set("GDPRConsentRequired", a, {
                expires: 364
            })
        },
        askForConsent: function() {
            var a = Expediagroup.Marketing.Utils.getSiteName();
            location.pathname.includes("/expedia-group-cookie-policy") || location.pathname.includes("/cookie") ? console.log("It is not asked for GDPR consent via banner on this page, because it is the cookie policy page, containing its own optIn/optOut widget for the same purpose") : (Expediagroup.Marketing.Utils.loadClientLib("marketing/" + a + "/clientlibs/tracking/gdpr-banner"),
            Expediagroup.Marketing.Utils.waitUntil(function() {
                return Expediagroup.Marketing.GDPRBanner
            }, function() {
                var a = Expediagroup.Marketing.GDPRBanner;
                a.onAccept(function() {
                    return d()
                });
                a.display()
            }))
        }
    }
}();
Expediagroup.Marketing.Document.ready(function() {
    var b = Expediagroup.Marketing.GDPR
      , a = Expediagroup.Marketing.GTM;
    if (Expediagroup.Marketing.Utils.isLiveOrPreview()) {
        var e = b.getState();
        e.isAccepted || !e.isConsentRequired ? a.startInAdvancedMode() : Expediagroup.Bridge.getLocation().then(function(c) {
            c.isEU ? (a.startInLimitedMode(),
            b.setConsentRequired(!0),
            b.askForConsent()) : (a.startInAdvancedMode(),
            b.setConsentRequired(!1))
        })
    }
});
Expediagroup.Bridge = function() {
    var b = new URLSearchParams(window.location.search)
      , a = function() {
        var a = sessionStorage.getItem("bridge-location");
        if (a)
            return JSON.parse(a)
    };
    return {
        getLocation: function(e) {
            if (b.has("debugLocation"))
                switch (b.get("debugLocation")) {
                case "eu":
                    return new Promise(function(a, b) {
                        return a({
                            ipAddress: "127.0.0.1",
                            isEU: !0
                        })
                    }
                    );
                case "non-eu":
                    return new Promise(function(a, b) {
                        return a({
                            ipAddress: "127.0.0.1",
                            isEU: !1
                        })
                    }
                    );
                default:
                    return new Promise(function(a, b) {
                        return b("debug failure case imitation")
                    }
                    )
                }
            return e || "undefined" === typeof a() ? new Promise(function(a, b) {
                var c = new XMLHttpRequest;
                c.open("GET", "https://bridge.expediapartnercentral.com/location/");
                c.onload = function() {
                    var b = JSON.parse(c.responseText);
                    b = {
                        isEU: "undefined" !== typeof b.location.is_eu && "boolean" === typeof b.location.is_eu ? b.location.is_eu : !0,
                        ipAddress: b.ip
                    };
                    sessionStorage.setItem("bridge-location", JSON.stringify(b));
                    a(b)
                }
                ;
                c.onerror = function() {
                    return a({
                        isEU: !0,
                        ipAddress: "unknown"
                    })
                }
                ;
                c.send()
            }
            ) : new Promise(function(b, d) {
                return b(a())
            }
            )
        }
    }
}();
MarketoForms = function() {
    var b = function(a) {
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.src = "//go2.expediagroup.com/js/forms2/js/forms2.min.js";
        document.getElementsByTagName("head")[0].appendChild(b);
        setTimeout(function() {
            "undefined" !== typeof MktoForms2 && a()
        }, 1E3)
    }
      , a = function() {
        if (null === document.getElementById("gdpr-form-wrap")) {
            var a = document.createElement("div");
            a.id = "gdpr-form-wrap";
            a.setAttribute("style", "display:none");
            a.innerHTML = '\x3cform id\x3d"mktoForm_1092"\x3e\x3c/form\x3e';
            document.getElementsByTagName("body")[0].appendChild(a)
        }
    };
    return {
        submitMarketoTrackingForm: function(e, c, d) {
            b(function() {
                a();
                MktoForms2.loadForm("//go2.expediagroup.com", "443-YYQ-410", 1092, function(a) {
                    var b = document.querySelector("form.mktoForm input[name\x3dgDPRConsent]")
                      , g = document.querySelector("form.mktoForm input[name\x3dgDPRConsentDate]")
                      , f = document.querySelector("form.mktoForm input[name\x3dgDPRConsentPage]");
                    b && g && f && (b.value = d,
                    g.value = e,
                    f.value = c);
                    a.submit();
                    a.onSuccess(function(a, b) {
                        return !1
                    });
                    return a
                })
            })
        }
    }
}();
Expediagroup.Marketing.GDPRBanner = function() {
    var b, a = {
        cs: {
            text: "Na tomto webu pou\u017e\u00edv\u00e1me cookies a dal\u0161\u00ed podobn\u00e9 technologie pro \u00fa\u010dely anal\u00fdzy n\u00e1v\u0161t\u011bvnosti, p\u0159izp\u016fsoben\u00ed obsahu, integrace se soci\u00e1ln\u00edmi s\u00edt\u011bmi a zobrazov\u00e1n\u00ed reklamy.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/cs/expedia-group-cookie-policy'\x3eDal\u0161\u00ed informace \u202fZm\u011bnit nastaven\u00ed\x3c/a\x3e",
            button: "Souhlas\u00edm"
        },
        da: {
            text: "Denne side bruger cookies og lignende metoder til at analysere onlinetrafik, personligt indhold, indhold p\u00e5 sociale medier samt annoncer.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/da/expedia-group-cookie-policy'\x3eL\u00e6s mere. \u202fAdministrere dine indstillinger.\x3c/a\x3e",
            button: "Accepter"
        },
        de: {
            text: "Diese Website verwendet Cookies und \u00e4hnliche Technologien zur Analyse und Personalisierung sowie f\u00fcr Social-Media-Funktionen und Werbezwecke.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/de/expedia-group-cookie-policy'\x3eMehr erfahren\u200b. \u202fEinstellungen verwalten.\x3c/a\x3e",
            button: "Akzeptieren"
        },
        el: {
            text: "\u0391\u03c5\u03c4\u03ae \u03b7 \u03b9\u03c3\u03c4\u03bf\u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af cookies \u03ba\u03b1\u03b9 \u03ac\u03bb\u03bb\u03b5\u03c2 \u03c0\u03b1\u03c1\u03cc\u03bc\u03bf\u03b9\u03b5\u03c2 \u03c4\u03b5\u03c7\u03bd\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c3\u03ba\u03bf\u03c0\u03bf\u03cd\u03c2 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u03b5\u03be\u03b1\u03c4\u03bf\u03bc\u03af\u03ba\u03b5\u03c5\u03c3\u03b7\u03c2, \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b9\u03ce\u03bd \u03bc\u03ad\u03c3\u03c9\u03bd \u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03b9\u03ba\u03ae\u03c2 \u03b4\u03b9\u03ba\u03c4\u03cd\u03c9\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03b4\u03b9\u03b1\u03c6\u03ae\u03bc\u03b9\u03c3\u03b7\u03c2.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/el/expedia-group-cookie-policy'\x3e\u039c\u03ac\u03b8\u03b5\u03c4\u03b5 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1. \u202f\u0394\u03b9\u03b1\u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03c1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b1\u03c2.\x3c/a\x3e",
            button: "\u0391\u03c0\u03bf\u03b4\u03bf\u03c7\u03ae"
        },
        es: {
            text: "Este sitio web utiliza cookies y otras tecnolog\u00edas similares a efectos de an\u00e1lisis, personalizaci\u00f3n, publicidad y redes sociales.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/es/expedia-group-cookie-policy'\x3eM\u00e1s informaci\u00f3n. \u202fGestionar ajustes.\x3c/a\x3e",
            button: "Aceptar"
        },
        fi: {
            text: "T\u00e4m\u00e4 sivusto k\u00e4ytt\u00e4\u00e4 ev\u00e4steit\u00e4 ja muuta vastaavaa teknologiaa analyyseihin, personointiin, sosiaalisen median toimintoihin ja mainontaan.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/fi/expedia-group-cookie-policy'\x3eLue lis\u00e4\u00e4. \u202fMuokkaa asetuksiasi.\x3c/a\x3e",
            button: "Hyv\u00e4ksy"
        },
        fr: {
            text: "Ce site utilise des cookies et d\u2019autres technologies \u00e0 des fins d\u2019analyse, de personnalisation, de publicit\u00e9 et de m\u00e9dias sociaux.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/fr/expedia-group-cookie-policy'\x3eEn savoir plus. \u202fG\u00e9rer vos param\u00e8tres.\x3c/a\x3e",
            button: "Accepter"
        },
        hr: {
            text: "Ova web-lokacija upotrebljava kola\u010di\u0107e i druge sli\u010dne tehnologije radi analize, personalizacije, pru\u017eanja zna\u010dajki dru\u0161tvenih medija i ogla\u0161avanja.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/hr/expedia-group-cookie-policy'\x3eSaznajte vi\u0161e. \u202fUpravljajte postavkama.\x3c/a\x3e",
            button: "Prihva\u0107am"
        },
        hu: {
            text: "Az oldal s\u00fctiket \u00e9s hasonl\u00f3 technol\u00f3gi\u00e1kat haszn\u00e1l elemz\u00e9s, szem\u00e9lyre szab\u00e1s, k\u00f6z\u00f6ss\u00e9gi m\u00e9di\u00e1ra fejlesztett funkci\u00f3k \u00e9s rekl\u00e1mtev\u00e9kenys\u00e9g c\u00e9lj\u00e1b\u00f3l.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/hu/expedia-group-cookie-policy'\x3eTov\u00e1bbi inform\u00e1ci\u00f3k. \u202fBe\u00e1ll\u00edt\u00e1sok kezel\u00e9se.\x3c/a\x3e",
            button: "Elfogadom"
        },
        it: {
            text: "Questo sito web utilizza i cookie e altre tecnologie simili per effettuare analisi statistiche, personalizzare contenuti e offrire funzionalit\u00e0 sui social media e pubblicit\u00e0.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/it/expedia-group-cookie-policy'\x3eMaggiori informazioni. \u202fGestisci le tue impostazioni.\x3c/a\x3e",
            button: "Accetta"
        },
        ja: {
            text: "\u5f53\u30b5\u30a4\u30c8\u306f\u3001\u5206\u6790\u3001\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3001\u5e83\u544a\u306a\u3069\u306e\u76ee\u7684\u3067 Cookie \u304a\u3088\u3073\u540c\u69d8\u306e\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u5229\u7528\u3057\u3066\u304a\u308a\u307e\u3059\u3002\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/ja/expedia-group-cookie-policy'\x3e\u8a73\u7d30\u3092\u898b\u308b  \u202f\u8a2d\u5b9a\u3092\u7ba1\u7406\u3059\u308b\x3c/a\x3e",
            button: "\u540c\u610f\u3059\u308b"
        },
        ko: {
            text: "\uc774 \uc0ac\uc774\ud2b8\ub294 \ubd84\uc11d, \uac1c\uc778\ud654, \uc18c\uc15c \ubbf8\ub514\uc5b4 \uae30\ub2a5 \ubc0f \uad11\uace0\ub97c \uc704\ud574 \ucfe0\ud0a4\uc640 \uae30\ud0c0 \ube44\uc2b7\ud55c \uae30\uc220\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/ko/expedia-group-cookie-policy'\x3e\uc790\uc138\ud788 \ubcf4\uae30. \u202f\uc124\uc815 \uad00\ub9ac\ud558\uae30.\x3c/a\x3e",
            button: "\ud5c8\uc6a9"
        },
        no: {
            text: "Dette nettstedet bruker cookies og lignende teknologi for analyser, personlig tilpasning, funksjoner for sosiale medier og markedsf\u00f8ring.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/no/expedia-group-cookie-policy'\x3eLes mer. \u202fAdministrer innstillinger.\x3c/a\x3e",
            button: "Godta"
        },
        nl: {
            text: "Deze website gebruikt cookies of een soortgelijke technologie voor analytische doeleinden, personalisatie, sociale mediafuncties en reclame.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/nl/expedia-group-cookie-policy'\x3eMeer informatie.\u202fBeheer uw instellingen. Accepteren\x3c/a\x3e",
            button: "Ik ga ermee akkoord"
        },
        pl: {
            text: "Ta strona korzysta z\u202fplik\u00f3w cookie i\u202finnych podobnych technologii do analizy, personalizacji, funkcji medi\u00f3w spo\u0142eczno\u015bciowych i\u202freklamy.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/pl/expedia-group-cookie-policy'\x3eDowiedz si\u0119 wi\u0119cej. \u202fZarz\u0105dzaj ustawieniami.\x3c/a\x3e",
            button: "Zaakceptuj"
        },
        "pt-br": {
            text: "Este site utiliza cookies e outras tecnologias semelhantes para fins de an\u00e1lise, personaliza\u00e7\u00e3o, recursos de m\u00eddias sociais e publicidade.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/pt-br/expedia-group-cookie-policy'\x3eSaiba mais. \u202fGerencie suas configura\u00e7\u00f5es.\x3c/a\x3e",
            button: "Aceitar"
        },
        "pt-pt": {
            text: "Este site utiliza cookies e outras tecnologias semelhantes para fins de an\u00e1lise, personaliza\u00e7\u00e3o e publicidade, bem como para oferecer funcionalidades de redes sociais.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/pt-pt/expedia-group-cookie-policy'\x3eSaiba mais. \u202fEfetue a gest\u00e3o das suas configura\u00e7\u00f5es.\x3c/a\x3e",
            button: "Aceitar"
        },
        ru: {
            text: "\u041d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u044b cookies \u0438 \u0441\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0442\u0440\u0430\u0444\u0438\u043a\u0430, \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u0435\u0439.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href'https://welcome.expediagroup.com/ru/expedia-group-cookie-policy'\x3e\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435. \u202f\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438.\x3c/a\x3e",
            button: "\u041f\u0440\u0438\u043d\u044f\u0442\u044c"
        },
        sv: {
            text: "Den h\u00e4r sidan anv\u00e4nder cookies och liknande teknologi f\u00f6r att kunna f\u00f6ra statistik, skr\u00e4ddarsy inneh\u00e5ll, erbjuda funktioner f\u00f6r sociala medier och i reklamsyften.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/sv/expedia-group-cookie-policy'\x3eL\u00e4s mer. \u202fJustera dina inst\u00e4llningar.\x3c/a\x3e",
            button: "Godk\u00e4nn"
        },
        th: {
            text: "\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49\u0e41\u0e25\u0e30\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e17\u0e35\u0e48\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c \u0e01\u0e32\u0e23\u0e15\u0e25\u0e32\u0e14\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25 \u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e32\u0e07\u0e42\u0e0b\u0e40\u0e0a\u0e35\u0e22\u0e25\u0e21\u0e35\u0e40\u0e14\u0e35\u0e22 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e42\u0e06\u0e29\u0e13\u0e32\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/th/expedia-group-cookie-policy'\x3e\u0e14\u0e39\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 \u202f\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\x3c/a\x3e",
            button: "\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a"
        },
        tr: {
            text: "Bu sitede; analiz, ki\u015fiselle\u015ftirme, sosyal medya \u00f6zellikleri ve reklamlar\u0131 i\u00e7in tan\u0131mlama bilgileri (\u00e7erezler) ve di\u011fer benzer teknolojiler kullan\u0131lmaktad\u0131r.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/tr/expedia-group-cookie-policy'\x3eDaha fazla bilgi al\u0131n. \u202fAyarlar\u0131n\u0131z\u0131 y\u00f6netin.\x3c/a\x3e",
            button: "Kabul et"
        },
        vi: {
            text: "Trang web n\u00e0y s\u1eed d\u1ee5ng cookie v\u00e0 c\u00e1c c\u00f4ng ngh\u1ec7 t\u01b0\u01a1ng t\u1ef1 \u0111\u1ec3 ph\u00e2n t\u00edch, c\u00e1 nh\u00e2n h\u00f3a n\u1ed9i dung, cho c\u00e1c t\u00ednh n\u0103ng m\u1ea1ng x\u00e3 h\u1ed9i v\u00e0 qu\u1ea3ng c\u00e1o.\u202f\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/vi/expedia-group-cookie-policy'\x3eT\u00ecm hi\u1ec3u th\u00eam. \u202fQu\u1ea3n l\u00fd thi\u1ebft l\u1eadp.\x3c/a\x3e",
            button: "\u0110\u1ed3ng \u00fd"
        },
        "zh-cn": {
            text: "\u672c\u7f51\u7ad9\u4f7f\u7528 cookie \u548c\u5176\u4ed6\u7c7b\u4f3c\u6280\u672f\u4ee5\u63d0\u4f9b\u5206\u6790\u3001\u4e2a\u6027\u5316\u670d\u52a1\u3001\u793e\u4ea4\u5a92\u4f53\u529f\u80fd\u548c\u5e7f\u544a\u3002\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/zh-cn/expedia-group-cookie-policy'\x3e\u4e86\u89e3\u8be6\u60c5\u3002 \u202f\u7ba1\u7406\u60a8\u7684\u8bbe\u7f6e\u3002\x3c/a\x3e",
            button: "\u63a5\u53d7"
        },
        "zh-tw": {
            text: "\u672c\u7db2\u7ad9\u4f7f\u7528 Cookie \u548c\u5176\u4ed6\u5206\u6790\u3001\u500b\u4eba\u5316\u3001\u793e\u7fa4\u5a92\u9ad4\u529f\u80fd\u53ca\u5ee3\u544a\u7684\u985e\u4f3c\u6280\u8853\u3002\x3ca id\x3d'gdpr-info' class\x3d'inline-text-link' href\x3d'https://welcome.expediagroup.com/zh-tw/expedia-group-cookie-policy'\x3e\u4e86\u89e3\u8a73\u60c5\u3002 \u202f\u7ba1\u7406\u60a8\u7684\u8a2d\u5b9a\u3002\x3c/a\x3e",
            button: "\u63a5\u53d7"
        }
    }, e = function() {
        if (b) {
            var a = document.querySelector("#gdpr-button");
            a && a.addEventListener("click", function() {
                b();
                c()
            })
        }
    }, c = function() {
        document.querySelector(".gdpr-wrap").style.display = "none"
    };
    return {
        onAccept: function(a) {
            b = a;
            e()
        },
        display: function() {
            if (!document.querySelectorAll(".gdpr-wrap").length) {
                var b = document.createElement("div");
                b.classList.add("root");
                b.classList.add("responsiveGrid");
                b.classList.add("gdpr-wrap");
                b.innerHTML = '\x3cdiv class\x3d"aem-Grid aem-Grid--12"\x3e\x3cdiv class\x3d"aem-GridColumn aem-GridColumn--default--12"\x3e\x3csection id\x3d"gdpr"\x3e\x3cp class\x3d"body-text-large"\x3eThis site uses cookies and other similar technologies for analytics, personalization, social media features and advertising.\u202f \x3ca id\x3d"gdpr-info" class\x3d"inline-text-link" href\x3d"https://welcome.expediagroup.com/en/expedia-group-cookie-policy"\x3eLearn more. Manage your settings.\x3c/a\x3e\x3c/p\x3e\x3cbutton id\x3d"gdpr-button" class\x3d"btn-primary" data-tracking-id\x3d"optIn_consent"\x3eAccept\x3c/button\x3e\x3c/section\x3e\x3c/div\x3e\x3c/div\x3e';
                document.querySelector("body").append(b);
                b = navigator.language || navigator.userLanguage;
                b = b.split("-")[0];
                var c = document.querySelector(".gdpr-wrap #gdpr-info");
                c && (c.href = "https://welcome.expediagroup.com/en/expedia-group-cookie-policy".replace(/\/en\//, "/" + b + "/"));
                c = document.querySelector('meta[name\x3d"calculated-lang"]');
                b = "en";
                c && (b = c.getAttribute("content"));
                c = document.querySelector("#gdpr p.body-text-large");
                var l = document.querySelector("#gdpr-button");
                "en" !== b && "en-us" !== b && "en-ca" !== b && a.hasOwnProperty(b) && (c.innerHTML = a[b].text,
                l.innerText = a[b].button);
                e()
            }
        },
        hide: c
    }
}();
