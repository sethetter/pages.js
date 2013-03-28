# Pages.js - The Tiny Javascript Paginator

This is the tiniest Javascript paginator (that I've seen at least) for paginating a large collection of items on a page.

## How to Use

Include ```pages.js``` in your page and initialize a new Paginator:

    var paginator = new Paginator({
        per_page: 5
        item_class: ".post",
        prev_id: "#previous_page",
        next_id: "#next_page",
        page_jump_container: "#page_jump"
        page_jump_separator: " | ";
    });

The above demonstrates all available options.

- ```per_page``` - number of items to display per page.
- ```item_class``` - the class of items you wish to paginate.
- ```prev``` and ```next``` - ID's for the previous and next page links.
- ```page_jump_container``` - an ID for the container holding the page jump links.
- ```page_jump_separator``` - string used to separate page jump links.

## Todos
- Remove jQuery dependency
- Create example page
- Create some tests
