import { ProductManage } from "./ProductManage.js";
let manager = new ProductManage();
manager.addProduct(1, 'iphone', 'iphone', 100000, 10, '22/10/20', 'Den');
manager.addProduct(1, 'iphone', 'iphone', 100000, 10, '22/10/20', 'Den');
manager.addProduct(1, 'phone', 'iphone', 100000, 10, '22/10/20', 'Den');
function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-product');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click', () => {
            alert("Bạn có muốn xóa không ?");
            let index = deleteUserButtons[i].getAttribute('value');
            manager.delete(parseInt(index));
            updateButtonDelete();
        });
    }
}
updateButtonDelete();
function updateButtonEdit() {
    let editUserButtons = document.getElementsByClassName('update-product');
    for (let i = 0; i < editUserButtons.length; i++) {
        editUserButtons[i].addEventListener('click', () => {
            console.log('yes');
            document.getElementById('btn-confirm').addEventListener('click', confirm);
            function confirm() {
                let id = document.getElementById('id').value;
                let name = document.getElementById('name').value;
                let type = document.getElementById('type').value;
                let price = document.getElementById('price').value;
                let count = document.getElementById('count').value;
                let date = document.getElementById('date').value;
                let des = document.getElementById('describe').value;
                let index = editUserButtons[i].getAttribute('value');
                manager.products[index].id = parseInt(id);
                manager.products[index].name = name;
                manager.products[index].type = type;
                manager.products[index].price = parseInt(price);
                manager.products[index].count = parseInt(count);
                manager.products[index].dateCreate = date;
                manager.products[index].describe = des;
                manager.showList();
            }
        });
    }
}
updateButtonEdit();
//Search
document.getElementById('search').addEventListener('keyup', () => {
    let searchResults = [];
    let str = document.getElementById('search');
    for (let i = 0; i < manager.products.length; i++) {
        if (checkSubStr(str.value.toLowerCase(), manager.products[i].name.toLowerCase())) {
            searchResults.push(manager.products[i]);
        }
    }
    manager.searchList(searchResults);
});
function checkSubStr(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let j;
    for (let i = 0; i <= n - m; i++) {
        for (j = 0; j < m; j++)
            if (str2[i + j] !== str1[j]) {
                break;
            }
        if (j === m)
            return true;
    }
    return false;
}
document.getElementById('btn-confirm1').addEventListener('click', saver);
function saver() {
    let id = document.getElementById('id1').value;
    let name = document.getElementById('name1').value;
    let type = document.getElementById('type1').value;
    let price = document.getElementById('price1').value;
    let count = document.getElementById('count1').value;
    let date = document.getElementById('date1').value;
    let des = document.getElementById('describe1').value;
    manager.addProduct(parseInt(id), name, type, parseInt(price), parseInt(count), date, des);
}
//# sourceMappingURL=main.js.map