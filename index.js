function addAnItem() {
    $('#js-shopping-list-form').submit(event => {
        // this stops the default form submission behavior
        event.preventDefault();
        // find and assign user text to a variable
        const shoppingListItem = $(this).find('#shopping-list-entry');
        // add a list item with the user input
        $(".shopping-list").append('<li><span class="shopping-item">' + shoppingListItem.val() + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>');
        });
}
$(addAnItem);


function checkAnItem() {
    // find the unordered list associated with a button with the class below, on click  
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        //find the closest li element to this class, then find the .shopping item class within and add a class
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

}
$(checkAnItem);

function deleteAnItem() {
    // find the unordered list associated with a button with the class below, on click 
    $('ul').on('click', '.shopping-item-delete', function(event) {
        //find the closest <li> element and delete it
        $(this).closest('li').remove();
      });
    }      
$(deleteAnItem);

