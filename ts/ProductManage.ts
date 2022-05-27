import {Product} from "./Product.js";

export class ProductManage{
    products: Product[] = [];

    constructor() {
    }

    addProduct(id: number, name: string, type: string, price: number, count: number, dateCreate: string, describe: string): void{
        let product = new Product(id,name,type,price,count,dateCreate,describe);
        this.products.push(product);
        this.showList();
    }

    showList():void{
        let html = '';
        if(this.products.length === 0){
            html += '<tr>'
            html += '<td colspan="9">nodata</td>'
            html += '<tr>'
        }else {
            for (let i = 0; i < this.products.length; i++) {
                html += `<tr>`
                html += `<td>${this.products[i].id}</td>`
                html += `<td>${this.products[i].name}</td>`
                html += `<td>${this.products[i].type}</td>`
                html += `<td>${this.products[i].price}</td>`
                html += `<td>${this.products[i].count}</td>`
                html += `<td>${this.products[i].dateCreate}</td>`
                html += `<td>${this.products[i].describe}</td>`
                html += `<td><button type="button" value="${i}" class="btn btn-danger delete-product">Delete</button></td>`
                html += `<td><button type="button" class="btn btn-primary update-product" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" value="${i}">edit</button></td>`
                html += `</tr>`
            }
        }
        document.getElementById('body-list').innerHTML = html;
    }

    delete(index){
        this.products.splice(index, 1);
        this.showList();
    }

    searchList(products: Product[]){
        let table= '';
        for (let i = 0; i < products.length; i++) {
            table += `<tr>`
            table += `<td>${products[i].id}</td>`
            table += `<td>${products[i].name}</td>`
            table += `<td>${products[i].type}</td>`
            table += `<td>${products[i].price}</td>`
            table += `<td>${products[i].count}</td>`
            table += `<td>${products[i].dateCreate}</td>`
            table += `<td>${products[i].describe}</td>`
            table += `<td><button type="button" value="${i}" class="btn btn-danger delete-product" >Delete</button></td>`
            table += `<td><button type="button" value="${i}" class="btn btn-primary update-product" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button></td>`
            table += `</tr>`
        }
        document.getElementById('body-list').innerHTML = table;
    }
}