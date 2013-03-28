/**
 * Pages.js - The Tiny Javascript Paginator
 * ----------------------------------------------------------------------------
 */
var Paginator = function(options) {
    var P = this;

    var items = $(options.item_class) || $(".post"),
        page_count = 0,
        count = items.length,
        prev = $(options.prev_id)[0] || $("#previous_page"),
        next = $(options.next_id)[0] || $("#next_page"),
        page_jump_container = options.page_jump_container || "#page_jump",
        page_jump_separator = options.page_jump_separator || " | ";

    P.per_page = options.per_page || 10;
    P.current_page = 1;

    // Construct the pages
    for (var i = 0; i < count; i++) {
        if ((i%P.per_page) === 0) page_count++;
        $(items[i]).addClass("page"+page_count);
    }

    // Build the page jump list
    for (var ii = 1; ii < page_count+1; ii++) {
        $(page_jump_container).append("<a href='#'>" + ii + "</a>");
        if (ii !== page_count) $(page_jump_container).append(page_jump_separator);
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
        // TODO - This could break if there is an even amount of items per page.
        if (P.current_page === page_count) return false;
        
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