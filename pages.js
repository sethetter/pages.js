/**
 * Pages.js - The Tiny Javascript Paginator
 * ----------------------------------------------------------------------------
 */
var Paginator = function(options) {
    var P = this;

    var items = $(options.item_class) || $(".post"), pages = 1,
        count = items.length,
        prev = $(options.previous)[0] || $(".previous_page")[0],
        next = $(options.next)[0] || $(".next_page")[0],
        page_jump_container = options.page_jump_container || "#page_jump",
        page_jump_separator = options.page_jump_separator || " | ";

    P.per_page = options.per_page || 10;
    P.current_page = 1;

    // Construct the pages
    var page_count = 1;
    for (var i = 0; i < count; i+=P.per_page) {
        var page_items = [];
        for (var j = 0; j < P.per_page; j++) {
            $(items[i+j]).addClass("page"+((i+1)-(4*(i/5))));
        }
        pages++;
    }

    // Build the page jump list
    for (var ii = 1; ii < pages; ii++) {
        $(page_jump_container).append("<a href='#'>" + ii + "</a>");
        if (ii !== pages-1) $(page_jump_container).append(page_jump_separator);
    }

    page_jump_links = $(page_jump_container + " a");

    // Hide all pages first, then show the first
    $(items).hide();
    $(".page1").fadeIn("slow");

    // Bind events to change page

    // Previous / next buttons
    $(prev).click(function(e) {
        e.preventDefault();
        if (P.current_page === 1) return false;

        $("html, body").animate({scrollTop: 0}, 500);
        $(".page"+P.current_page).hide();
        --P.current_page;
        $(".page"+P.current_page).fadeIn("slow");
    });

    $(next).click(function(e) {
        e.preventDefault();
        if (P.current_page === pages) return false;
        
        $("html, body").animate({scrollTop: 0}, 500);
        $(".page"+P.current_page).hide();
        ++P.current_page;
        $(".page"+P.current_page).fadeIn("slow");
    });

    // Page specific control
    $(page_jump_links).click(function(e) {
        e.preventDefault();
        var page = $(e.currentTarget).text();

        $("html, body").animate({scrollTop: 0}, 500);
        $(".page"+P.current_page).hide();
        P.current_page = page;
        $(".page"+P.current_page).fadeIn("slow");
    });
};