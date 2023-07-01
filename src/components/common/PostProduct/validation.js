const validation = (newProduct) => {

    const errors = {};

    if (!newProduct.name) {
        errors.name = 'Give the product a name'
    }
    if (!newProduct.brand) {
        errors.brand = 'Put a brand on the product'
    }
    if (!newProduct.stock) {
        errors.stock = 'Detail how many products you have available'
    }
    if (!newProduct.price) {
        errors.price = 'Set a sale price'
    }
    if (!newProduct.imagen) {
        errors.imagen = 'Place an image where the product is shown'
    }

    if (!newProduct.subcategories) {
        errors.subcategories = 'Indicates to which subcategories it belongs'
    }
    // ------------------------------nombre
    if (newProduct.name.length > 18) {
        errors.name = 'Put a name less than 18 characters'
    }
    
    // -------------------------------stock
    if (newProduct.stock > 1000) {
        errors.stock = 'Stock limit of 1000'
    }
    if (newProduct.stock < 0) {
        errors.stock = 'Stock must be greater than 0'
    }

    // -------------------------------precio
    if (newProduct.price > 99999) {
        errors.price = 'Set a real price'
    }
   
    // -------------------------------subcategorias
    if (newProduct.subcategories.length < 22) {
        errors.subcategories = 'Your product must belong to a category'
    }

    return errors;
}

export default validation;

