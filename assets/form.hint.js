/**
 * Created by floor12 on 26.05.2017.
 */

descriptionTimeout = 3000;

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


var hintTimeout = setTimeout(function () {}, 0);

$(document).on('focus', '[data-description-show=true]', function (el) {
    hintTimeout = setTimeout(function () {
        obj = $(el.target)
        obj.parent().find('div.element-description').fadeIn(400);
    }, descriptionTimeout);

})

$(document).on('blur', '[data-description-show=true]', function (el) {
    clearTimeout(hintTimeout)
    obj = $(el.target)
    obj.parent().find('div.element-description').fadeOut(400);
})