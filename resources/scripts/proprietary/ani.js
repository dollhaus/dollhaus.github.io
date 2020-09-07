var tabsInCollection = ["#homeTab", "#aboutTab", "#productsTab", "#portfolioTab", "#contactTab"];

var activeTab = "#homeTab";
var activeMenuBox = "#menuhome";

//Menubox positions
var menuBoxWidth = 0;
var menuBoxLeft = 0;
var menuBoxHeight = 0;
var menuBoxTop = 0;

//Aspect ratio
var ar = 0;

//mobile detection without .browser migration
var mobDetection = 0;

var logo = $("#logo");

//Don't really need document.ready when the JS is loaded at the end of the HTML,
//But this makes the code a little bit more readable, and because there's not much 
//code the overall performance shouldn't be too badly affected.
$(document).ready(function() {
    mobDetect();
    var elem = $("#homeTab");
    jQuery.each(tabsInCollection, function(index, val) {
        if (val != "#homeTab") {
            curElem = $(val);
            curElem.hide();
            curElem.addClass("hidden");
        }
    });
    elem.show();
    elem.addClass("showing");
    adjustMenuElemSizeForText();
    miscDesignValues();
    slideInMarks();

    checkar();
    //if (ar < 1.96) {
    //    var box = $("#pageActiveBox");
    //    box.css("left", (menuBoxLeft / 100) * 97);
    //}
    //$("#menuhome").click();
    //moveMenuBox("#menuhome");
    $(window).on('load', function() {
        moveMenuBox("#menuhome");
        checkar();
        if (ar < 1.96) {
            var box = $("#pageActiveBox");
            box.css("left", (menuBoxLeft / 100) * 97);
        }
        $("#menuhome").click();
    });

});



function gcd(x, y) {
    if (y == 0) { return x; }
    return gcd(y, x % y);
}

function checkar() {
    var ratio = gcd($(window).width(), $(window).height());
    ar = ($(window).width() / ratio) / ($(window).height() / ratio);
}


$(window).resize(function() {
    resetDesign();
});


function mobDetect() {
    if ($("#mob").width() === 100) {
        mobDetection = 1;
    }
}



function resetDesign() {
    adjustMenuElemSizeForText();
    moveMenuBox(activeMenuBox);
    miscDesignValues();
}

function setLogoDesign() {
    var elem = $("#logoContainer");
    elem.width(elem.height());

}

function showLogo() {
    logo.show();
    //logo.removeClass("hidden");
    logo.addClass("showing");
}

function hideLogo() {
    logo.removeClass("showing");
    //logo.addClass("hidden");
    logo.one(transitionEvent, function(event) {
        logo.hide();
    });
}

function slideInMarks() {
    var elem = $("#specialityMarks");
    if (mobDetection === 1) {
        elem.css("top", "60%");
    } else {
        elem.css("top", "25%");
    }
    elem.css("visibility", "visible");
    elem.css("opacity", 1);
}


function adjustMenuElemSizeForText() {
    var ruler = $("#ruler");
    $("#menulist").children('li').each(function() {
        var elem = $(this).children(":first");
        ruler.text(elem.text());
        elem.width(ruler.width() + 2);
    });
    ruler.text("VCSD");
    ruler.addClass("bold");
    $("#logoContainer").width(ruler.width() * 2);
    ruler.removeClass("bold");
}


function miscDesignValues() {
    $("#captiveText").css("word-spacing", $("#captiveText").width());
    if (mobDetection === 1) {
        $("#captiveText").css("line-height", String((($("#captiveText").height() / 3.3)) + "px"));
    } else {
        $("#captiveText").css("line-height", String((($("#captiveText").height() / 3) / 1.8)) + "px");
    }
    $("body").css("overflow", "hidden");
}

function setProductLineupWidths() {
    var head = $("head");
    head.append('<style type="text/css"></style>');
    var inlineStyle = head.children(":last");
    //Remember to change this when the product lineup changes
    var size = $("#slickworksPromo").children(":first").width();
    inlineStyle.html(".blockyGridContent{max-width:" + size + "px;}");
}


function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent();




function switchTab(targetelem) {
    //Do nothing if we're already on that page
    if (activeTab === targetelem) {
        return false;
    }
    //otherwise transition the page smoothly and hide the inactive pages
    $(targetelem).show();
    $(activeTab).removeClass("showing");
    $(activeTab).addClass("hidden");
    $(targetelem).removeClass("hidden");
    $(targetelem).addClass("showing");
    $(targetelem).one(transitionEvent, function(event) {
        $(activeTab).hide();
        activeTab = targetelem;
    });
}


function changeMenuBoxOffset(targetMenuItem) {
    var elem = $(targetMenuItem).children(":first");
    var position = elem.position();
    var offset = elem.offset();
    var width = elem.width();
    var height = elem.height();
    menuBoxLeft = (offset.left - 4);
    menuBoxTop = (offset.top - 1);
    menuBoxHeight = height;
    menuBoxWidth = width + 2;
}

function moveMenuBox(targetMenuItem) {
    changeMenuBoxOffset(targetMenuItem);
    var box = $("#pageActiveBox");
    box.css("left", menuBoxLeft + 4);
    box.width(menuBoxWidth - 4);
    box.css("top", menuBoxTop);
    box.height(menuBoxHeight - 4);
    activeMenuBox = targetMenuItem;
}



$("#menuhome").click(function() {
    hideLogo();
    switchTab("#homeTab");
    moveMenuBox("#menuhome");
    resetDesign();
});

$("#menuabout").click(function() {
    showLogo();
    switchTab("#aboutTab");
    moveMenuBox("#menuabout");
    resetDesign();
});

$("#menuproducts").click(function() {
    showLogo();
    switchTab("#productsTab");
    moveMenuBox("#menuproducts");
    resetDesign();
    setProductLineupWidths();
})

$("#menuportfolio").click(function() {
    showLogo();
    switchTab("#portfolioTab");
    moveMenuBox("#menuportfolio");
    resetDesign();
});

$("#menucontact").click(function() {
    showLogo();
    switchTab("#contactTab");
    moveMenuBox("#menucontact");
    resetDesign();
});

//Modal product windows
var modal = $("#productWindow");
var modalContent = $("#modalContent")

$("#slickworksPromo").click(function() {
    modalWindowLauncher("slickworks");
});

$("#aitcherPromo").click(function() {

});

$("#nextstepstoolkitPromo").click(function() {
    window.open("http://nextstepsltd.co.uk/#pageThree", "_blank");
});

$("#vixconsultdigiPromo").click(function() {

});

$("#vixconsultautomPromo").click(function() {

});

$("#productModalClose").click(function() {
    modal.hide();
    modalContent.text("");
    modalContent.removeClass("webparterror");
})


function modalWindowLauncher(target) {
    modal.show();
    modalContent.load("webparts/" + target + ".part", function(response, status, xhr) {
        if (status == "error") {
            modalContent.addClass("webparterror");
            modalContent.text("Error: The document could not be read.");
        }
    });
}