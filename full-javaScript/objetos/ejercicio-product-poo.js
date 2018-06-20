/** Ejercicios de añadir productos con POO js */

// class to product
class Product{
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }
}

// class interface to product view (UI) user interface, esta clase sera la que  inserte directamente en el DOM
class Ui{
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center  mb-4">
                <div class="card-body">
                    <strong>Product Name: </strong> ${product.name}
                    <strong>Product Price: </strong> ${product.price}
                    <strong>Product Year: </strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        const productForm = document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
        }
    } 
    showMessage(message, cssClass) {
        const contenedor = document.getElementById('container');
        const app = document.querySelector('#App');
        
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        
        
        contenedor.insertBefore(div, app);
    }
}

// eventos del DOM
document.getElementById('product-form').addEventListener('submit', () => {
    let nameProduct = document.getElementById('name').value;
    let priceProduct = document.getElementById('price').value;
    let yearProduct = document.getElementById('year').value;

    const product =  new Product(nameProduct, priceProduct, yearProduct);

    const ui = new Ui();
    ui.addProduct(product);
    ui.showMessage('Product Added Successfully', 'success');
});

document.getElementById('product-list').addEventListener('click', (e) => {
    const element = e.target;
    const ui = new Ui();
    ui.deleteProduct(element);
});