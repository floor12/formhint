/**
 * Created by floor12 on 26.05.2017.
 */


$(document).ready(function () {

    $.each($('[data-description-show=true]'), function (key, element) {
        object = $(element);
        description = object.data('description');

        info_element = $('<div>').html(description).addClass('element-description');
        console.log(info_element);
        object.after(info_element)

        if (object.focus == true)
            object.parent().find('div.element-description').fadeIn(100);


    })

});

$(document).on('focus', '[data-description-show=true]', function (el) {
    obj = $(el.target)
    obj.parent().find('div.element-description').fadeIn(400);
})

$(document).on('blur', '[data-description-show=true]', function (el) {
    obj = $(el.target)
    obj.parent().find('div.element-description').fadeOut(400);
})