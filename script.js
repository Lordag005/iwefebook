// Sélection des boutons "Ajouter au panier"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialisation du panier
let cartItems = [];

// Écouteur d'événement pour chaque bouton "Ajouter au panier"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('.price').textContent;

        // Ajout du produit au panier
        cartItems.push({ name: productName, price: parseFloat(productPrice) }); // Convertir le prix en nombre

        // Mise à jour de l'affichage du panier
        updateCartDisplay();
    });
});

// Met à jour l'affichage du panier
function updateCartDisplay() {
    const cartDisplay = document.querySelector('.cart-items');
    cartDisplay.innerHTML = '';

    let totalAmount = 0; // Variable pour stocker le total

    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price} FCFA`; // Afficher le prix en FCFA
        cartDisplay.appendChild(cartItem);

        totalAmount += item.price; // Ajouter le prix au total
    });

    const totalDisplay = document.querySelector('.total-price');
    totalDisplay.textContent = `${totalAmount} FCFA`; // Afficher le total en FCFA
}
