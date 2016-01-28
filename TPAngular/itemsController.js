angular.module('app').controller('productController', function(ItemsFactory, $location, $rootScope){

    var container = this;
    container.products = ItemsFactory;

    this.addElement = function(product) {
        ItemsFactory.addItems(product);
        $location.path("/stockManager");
    }

    $rootScope.SelectItem = function(item)
    {
        $rootScope.SelectedItem = item;
        $location.path("/requisition");
    }

    $rootScope.SelectItem = function(item, path)
    {
        $rootScope.SelectedItem = item;
        if(path == "req")
            $location.path("/requisition");
        else if(path == "modif")
            $location.path("/modifyElement");
    }

    this.requisition = function(quantityPar)
    {
        $rootScope.SelectedItem.Quantity -= quantityPar;
        $location.path("/stockManager");
    }

    this.modification = function(namePar, quantPar)
    {
        $rootScope.SelectedItem.name = namePar;
        $rootScope.SelectedItem.Quantity = quantPar;
        $location.path("/stockManager");
    }

    this.delete = function(item)
    {
        if (confirm('Are you sure you want to delete ' + item.name + "?")) {
            ItemsFactory.deleteItem(item);
        }
    }
});