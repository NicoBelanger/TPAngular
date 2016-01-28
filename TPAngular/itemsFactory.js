/**
 * Created by Nicolas on 26/01/2016.
 */
angular.module('app').factory("ItemsFactory", function($filter){

    var items = [
        {
            "name": "Pencil",
            "Quantity": 9
        },
        {
            "name": "Eraser",
            "Quantity": 23
        },
        {
            "name": "Notebook",
            "Quantity": 1
        }
    ]

    items.addItems = function(element)
    {
        items.push(element);
    };

    items.deleteItem = function (element)
    {
        var index = items.indexOf(element);
        items.splice(index, 1);
    }

    return items;
})