// Cart functionality
let cart = [];
let cartCount = 0;

// Update Cart Count in Navigation
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Add Product to Cart
function addToCart(product) {
    cart.push(product);
    cartCount++;
    updateCartCount();
}

// Event listener for 'Add to Cart' buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
        const product = event.target.closest(".product");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));
        
        const productObj = {
            name: name,
            price: price
        };

        addToCart(productObj);
    });
});

// Cart Modal
const cartModal = document.getElementById("cart-modal");
const closeCartButton = document.getElementById("close-cart");
const cartIcon = document.getElementById("cart-icon");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Display Cart Modal
cartIcon.addEventListener("click", () => {
    cartModal.style.display = "flex";
    displayCartItems();
});

// Close Cart Modal
closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
});

// Display Cart Items in Modal
function displayCartItems() {
    cartItemsList.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Login Form Validation
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simple validation logic
    let valid = true;
    
    // Email validation
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const passwordError = document.getElementById("password-error");
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (valid) {
        alert("Login Successful!");
    }
});
