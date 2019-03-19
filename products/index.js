
Product = function (code, category, name, description, price, link) {
    this.code = code;
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
    this.link = link;
}
var products = [
    new Product('001', 'Laptop', 'Asus 515g', 'Beatiful', 1500, 'https://getbootstrap.com/docs/4.0/layout/grid/'),
    new Product('002', 'Printer', 'Toshiba 515g', 'Colorful', 1700, 'https://getbootstrap.com/docs/4.0/layout/grid/'),
    new Product('003', 'Desktop', 'Acer Swift', 'Super thin', 1600, 'https://getbootstrap.com/docs/4.0/layout/grid/'),
    new Product('004', 'Projector', 'Dell 515g', 'Very Beauty', 1900, 'https://getbootstrap.com/docs/4.0/layout/grid/'),
    new Product('005', 'Phone', 'Dell 515g', 'Super thin', 2000, 'https://getbootstrap.com/docs/4.0/layout/grid/'),
];

function initiateItems() {
    var html = products.map((product, index) => `<tr data-id="${product.code}">
                                <td>${index + 1}</td>
                                <td>${product.code}</td>
                                <td>${product.category}</td>
                                <td>${product.name}</td>
                                <td>${product.description}</td>
                                <td>${product.price}</td>
                                <td>${product.link}</td>
                        </tr>`).join('\r\n');
    $('#products tbody').html(html);

}

function showAllProducts(products) {
    var html = products.map((product, index) => `<tr data-id="${product.code}">
                                <td>${index + 1}</td>
                                <td>${product.code}</td>
                                <td>${product.category}</td>
                                <td>${product.name}</td>
                                <td>${product.description}</td>
                                <td>${product.price}</td>
                                <td>${product.link}</td>
                        </tr>`).join('\r\n');
    $('#products tbody').html(html);

}
$(initiateItems);
var currentCategory = '';
$(function () {
    $('#category').on('click', 'a', function () {
        var category = $(this).attr('data-category');
        currentCategory = category;
        var selectedProducts = products.filter(product => product.category === category);
        showAllProducts(selectedProducts);
    });

    $('#products').on('click', 'tbody tr', function (evt) {
        var code = $(this).attr('data-id');
        var product = products.find(product => product.code == code);



        $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function () {
            var name = $(this).attr('name');
            $(this).val(product[name]);
        });
    });
    $('#itemdetail button').click(function (evt) {
        // var code = $('itemdetail input[name = code]').val();
        // var product = products.find(product => product.code == code);
        // $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function () {
        //     var name = $(this).attr('name');
        //     product[name] = $(this).val();
        // });
        // showAllProducts(products);

        var product = {}
        $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function (){
            var name = $(this).attr('name');
            product[name] = $(this).val();
        });
        var index = products.findIndex(x => x.code === product.code);
        products[index] = product;
        var selectedProducts = products.filter(product => currentCategory == '' || product.category === currentCategory);
        showAllProducts(selectedProducts);
    });

    $('itemdetail buttonAdd').click(function (evt){
        var product ={};
        $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function (){
            var name = $(this).attr('name');
            product[name] = $(this).val();
        });
        if(products.find(x => x.code == product.code) == null){
            products.push(product);
        }else{
            alert("Id Exist")
        }
    });
    $('#buttonSave').click(function(){
        var product = {};
        $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function(){
            var name = $(this).attr('name');
            product[name] = $(this).val();
        });
        var index = products.findIndex(x => x.code === product.code);
        products[index] = product;
        var selectedProducts = products.filter(product =>currentCategory == '' || product.category === currentCategory );
        showAllProducts(selectedProducts);
        clear();
    });

        $('#buttonAdd').click(function(){
            var product = {};
            $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function(){
                var name = $(this).attr('name');
                product[name] = $(this).val();
            });
            if(products.find(x => x.code === product.code ) == null){
                products.push(product);
            }
            else {
                alert("Error!");
            }
            showAllProducts(products);
            clear();
        });
        $('#buttonDelete').click(function(){
            var product = {};
            $('#itemdetail input , #itemdetail select, #itemdetail textarea').each(function(){
                var name = $(this).attr('name');
                product[name] = $(this).val();
            });
            var index = products.findIndex(x => x.code === product.code);
            products.splice(index, 1);
            var selectedProducts = products.filter(product =>currentCategory == '' || product.category === currentCategory );
            showAllProducts(selectedProducts);
            clear();
        });
    showAllProducts(products);
});