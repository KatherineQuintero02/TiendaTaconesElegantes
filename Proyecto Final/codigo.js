// Estado de la aplicación
const state = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'es',

products: [
    {
        id: 1,
        name: 'Tacón Stiletto Clásico',
        description: 'Tacones delgados y elegantes perfectos para eventos formales.',
        price: 89.99,
        category: 'bajo',
        image: 'https://m.media-amazon.com/images/I/61sjl+o1PxL._AC_UY900_.jpg'
    },
    {
        id: 2,
        name: 'Tacón Cuadrado Moderno',
        description: 'Tacón grueso que brinda estabilidad y comodidad para caminar.',
        price: 74.99,
        category: 'bajo',
        image: 'https://m.media-amazon.com/images/I/61eQwm5uavL._AC_UY300_.jpg'
    },
    {
        id: 3,
        name: 'Tacón Aguja Extra Alto',
        description: 'Tacón ultrafino y alto para un look impactante.',
        price: 95.99,
        category: 'extra alto',
        image: 'https://i.pinimg.com/originals/84/10/98/84109801e9e8107fa3ff55cab34b0d6f.png'
    },
    {
        id: 4,
        name: 'Tacón Ancho Casual',
        description: 'Tacón firme y ancho ideal para uso diario y largas caminatas.',
        price: 69.99,
        category: 'medio',
        image: 'https://gabrielas.com.mx/cdn/shop/files/BOTASRAVEL285.png?v=1734633156'
    },
    {
        id: 5,
        name: 'Tacón Plataforma Elegante',
        description: 'Tacones con plataforma frontal que ofrecen altura con mayor comodidad.',
        price: 99.99,
        category: 'medio',
        image: 'https://i.pinimg.com/736x/f4/45/1e/f4451e3f8fb1309d84ae7e6f779ee65b.jpg'
    },
    {
        id: 6,
        name: 'Tacón de Cuña (Wedge)',
        description: 'Tacón corrido que brinda total soporte y estilo versátil.',
        price: 79.99,
        category: 'bajo',
        image: 'https://img.kwcdn.com/product/fancy/5082561d-a619-4fbd-931b-6ccaeb057acd.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp'
    },
    {
        id: 7,
        name: 'Tacón Kitten Heel',
        description: 'Tacón bajito y femenino, perfecto para quien busca elegancia sin altura extrema.',
        price: 64.99,
        category: 'alto',
        image: 'https://image.made-in-china.com/202f0j00vpketOICMNbZ/New-Female-Fashion-High-Kitten-Heel-Leather-Party-Dress-Wedding-Women-Shoes.webp'
    },
    {
        id: 8,
        name: 'Tacón Slingback Abierto',
        description: 'Tacón elegante con correa trasera abierta y diseño delicado.',
        price: 82.99,
        category: 'bajo',
        image: 'https://i.etsystatic.com/56468196/r/il/837590/7288967970/il_570xN.7288967970_c7gn.jpg'
    },
    {
        id: 9,
        name: 'Tacón Mary Jane',
        description: 'Diseño clásico con correa en el empeine que brinda soporte y estilo vintage.',
        price: 72.99,
        category: 'medio',
        image: 'https://i.pinimg.com/736x/b0/0b/9f/b00b9fac51341ad21ee81e12d8b450dc.jpg'
    },
    {
        id: 10,
        name: 'Tacón Mula (Mules)',
        description: 'Tacón sin talón, moderno y fácil de calzar para salidas rápidas.',
        price: 59.99,
        category: 'medio',
        image: 'https://images.ecestaticos.com/oBhalcHirmkVHUXIVSZaDwhSwUc=/0x281:766x856/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd48%2F396%2F2dc%2Fd483962dc6dfc8c652f2e835ac0ea0e5.jpg'
    }
 

    ],
    translations: {
        en: {
            welcome: "Welcome to Passi Di Glamour",
            slogan: "The best products at the best price",
            login: "Login",
            register: "Register",
            email: "Email",
            password: "Password",
            name: "Full Name",
            noAccount: "Don't have an account?",
            haveAccount: "Already have an account?",
            shoppingCart: "Shopping Cart",
            total: "Total:",
            checkout: "Checkout",
            categories: "All Categories",
            searchPlaceholder: "Search products...",
            addToCart: "Add to Cart",
            remove: "Remove",
            electronics: "Electronics",
            clothing: "Clothing",
            home: "Home",
            allRightsReserved: "All rights reserved",
            signIn: "Sign In",
            signUp: "Sign Up",
            signOut: "Sign Out",
            yourCart: "Your Cart",
            emptyCart: "Your cart is empty",
            continueShopping: "Continue Shopping",
            price: "Price",
            quantity: "Qty",
            subtotal: "Subtotal",
            proceedToCheckout: "Proceed to Checkout",
            or: "or",
            welcomeBack: "Welcome back!",
            createAccount: "Create Account",
            newCustomer: "New customer?",
            existingCustomer: "Existing customer?",
            loginToAccount: "Login to your account",
            createNewAccount: "Create a new account",
            forgotPassword: "Forgot your password?",
            rememberMe: "Remember me",
            bySigningIn: "By signing in, you agree to our",
            termsOfService: "Terms of Service",
            and: "and",
            privacyPolicy: "Privacy Policy",
            featuredProducts: "Featured Products",
            bestSellers: "Best Sellers",
            newArrivals: "New Arrivals",
            onSale: "On Sale",
            specialOffers: "Special Offers",
            freeShipping: "Free Shipping",
            freeReturns: "Free Returns",
            secureCheckout: "Secure Checkout",
            customerSupport: "24/7 Customer Support"
        },
        es: {
            welcome: "Bienvenido a Passi Di Glamour",
            slogan: "Los mejores productos al mejor precio",
            login: "Iniciar Sesión",
            register: "Registrarse",
            email: "Correo electrónico",
            password: "Contraseña",
            name: "Nombre completo",
            noAccount: "¿No tienes cuenta?",
            haveAccount: "¿Ya tienes cuenta?",
            shoppingCart: "Carrito de Compras",
            total: "Total:",
            checkout: "Pagar",
            categories: "Todas las categorías",
            searchPlaceholder: "Buscar productos...",
            addToCart: "Añadir al Carrito",
            remove: "Eliminar",
            electronics: "Electrónica",
            clothing: "Ropa",
            home: "Hogar",
            allRightsReserved: "Todos los derechos reservados",
            signIn: "Iniciar Sesión",
            signUp: "Registrarse",
            signOut: "Cerrar Sesión",
            yourCart: "Tu Carrito",
            emptyCart: "Tu carrito está vacío",
            continueShopping: "Seguir Comprando",
            price: "Precio",
            quantity: "Cantidad",
            subtotal: "Subtotal",
            proceedToCheckout: "Proceder al Pago",
            or: "o",
            welcomeBack: "¡Bienvenido de nuevo!",
            createAccount: "Crear Cuenta",
            newCustomer: "¿Nuevo cliente?",
            existingCustomer: "¿Ya tienes cuenta?",
            loginToAccount: "Inicia sesión en tu cuenta",
            createNewAccount: "Crea una cuenta nueva",
            forgotPassword: "¿Olvidaste tu contraseña?",
            rememberMe: "Recordarme",
            bySigningIn: "Al iniciar sesión, aceptas nuestros",
            termsOfService: "Términos de Servicio",
            and: "y",
            privacyPolicy: "Política de Privacidad",
            featuredProducts: "Productos Destacados",
            bestSellers: "Más Vendidos",
            newArrivals: "Novedades",
            onSale: "En Oferta",
            specialOffers: "Ofertas Especiales",
            freeShipping: "Envío Gratis",
            freeReturns: "Devoluciones Gratis",
            secureCheckout: "Pago Seguro",
            customerSupport: "Soporte 24/7"
        }
    }
};

// Elementos del DOM
const elements = {
    // Navegación
    themeToggle: document.getElementById('theme-toggle'),
    languageSelector: document.getElementById('language-selector'),
    loginBtn: document.getElementById('login-btn'),
    registerBtn: document.getElementById('register-btn'),
    cartBtn: document.getElementById('cart-btn'),
    cartCount: document.getElementById('cart-count'),
    searchInput: document.getElementById('search-input'),
    categorySelector: document.getElementById('category-selector'),
    searchBtn: document.getElementById('search-btn'),
    
    // Modales
    loginModal: document.getElementById('login-modal'),
    registerModal: document.getElementById('register-modal'),
    cartSidebar: document.getElementById('cart-sidebar'),
    
    // Formularios
    loginForm: document.getElementById('login-form'),
    registerForm: document.getElementById('register-form'),
    
    // Contenido
    productsContainer: document.getElementById('products-container'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    
    // Otros
    currentYear: document.getElementById('current-year'),
    showRegister: document.getElementById('show-register'),
    showLogin: document.getElementById('show-login'),
    closeModalButtons: document.querySelectorAll('.close-modal'),
    closeCartButton: document.querySelector('.close-cart')
};

// Inicialización
function init() {
    // Configurar el año actual
    if (elements.currentYear) {
        elements.currentYear.textContent = new Date().getFullYear();
    }
    
    // Cargar preferencias del usuario
    loadPreferences();
    
    // Renderizar productos
    renderProducts(state.products);
    
    // Configurar eventos
    setupEventListeners();
    
    // Actualizar UI
    updateUI();
}

// Cargar preferencias del usuario
function loadPreferences() {
    // Tema
    document.documentElement.setAttribute('data-theme', state.theme);
    
    // Idioma
    if (elements.languageSelector) {
        elements.languageSelector.value = state.language;
    }
    updateTranslations();
    
    // Actualizar icono del tema
    updateThemeIcon();
}

// Configurar event listeners
function setupEventListeners() {
    // Cambiar tema
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Cambiar idioma
    if (elements.languageSelector) {
        elements.languageSelector.addEventListener('change', changeLanguage);
    }
    
    // Mostrar/ocultar modales
    if (elements.loginBtn) {
        elements.loginBtn.addEventListener('click', () => showModal('login'));
    }
    
    if (elements.registerBtn) {
        elements.registerBtn.addEventListener('click', () => showModal('register'));
    }
    
    if (elements.cartBtn) {
        elements.cartBtn.addEventListener('click', toggleCart);
    }
    
    // Cerrar modales
    if (elements.closeModalButtons) {
        elements.closeModalButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                if (modal) {
                    modal.close();
                }
            });
        });
    }
    
    // Cerrar carrito
    if (elements.closeCartButton) {
        elements.closeCartButton.addEventListener('click', toggleCart);
    }
    
    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.close();
        }
    });
    
    // Formularios
    if (elements.loginForm) {
        elements.loginForm.addEventListener('submit', handleLogin);
    }
    
    if (elements.registerForm) {
        elements.registerForm.addEventListener('submit', handleRegister);
    }
    
    // Carrito
    if (elements.checkoutBtn) {
        elements.checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    // Búsqueda
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', handleSearch);
    }
    
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Navegación entre login/register
    if (elements.showRegister) {
        elements.showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            if (elements.loginModal) elements.loginModal.close();
            if (elements.registerModal) elements.registerModal.showModal();
        });
    }
    
    if (elements.showLogin) {
        elements.showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            if (elements.registerModal) elements.registerModal.close();
            if (elements.loginModal) elements.loginModal.showModal();
        });
    }
}

// Cambiar tema
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    updateThemeIcon();
}

// Actualizar ícono del tema
function updateThemeIcon() {
    if (!elements.themeToggle) return;
    
    const icon = elements.themeToggle.querySelector('i');
    if (!icon) return;
    
    icon.className = state.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Cambiar idioma
function changeLanguage(e) {
    state.language = e.target.value;
    localStorage.setItem('language', state.language);
    updateTranslations();
}

// Actualizar traducciones
function updateTranslations() {
    const lang = state.translations[state.language];
    if (!lang) return;
    
    // Actualizar textos con el atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
    
    // Actualizar opciones del selector de categorías
    if (elements.categorySelector) {
        const options = elements.categorySelector.querySelectorAll('option');
        if (options.length > 0) options[0].textContent = lang['categories'];
        if (options.length > 1) options[1].textContent = lang['electronics'];
        if (options.length > 2) options[2].textContent = lang['clothing'];
        if (options.length > 3) options[3].textContent = lang['home'];
    }
}

// Mostrar modal
function showModal(modalType) {
    if (modalType === 'login' && elements.loginModal) {
        elements.loginModal.showModal();
    } else if (modalType === 'register' && elements.registerModal) {
        elements.registerModal.showModal();
    } else if (modalType === 'cart' && elements.cartSidebar) {
        elements.cartSidebar.classList.add('active');
        renderCartItems();
    }
}

// Alternar carrito
function toggleCart() {
    if (!elements.cartSidebar) return;
    
    elements.cartSidebar.classList.toggle('active');
    if (elements.cartSidebar.classList.contains('active')) {
        renderCartItems();
    }
}

// Renderizar productos
function renderProducts(productsToRender) {
    if (!elements.productsContainer) return;
    
    const lang = state.translations[state.language];
    
    elements.productsContainer.innerHTML = productsToRender.map(product => `
        <li class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                    ${lang?.addToCart || 'Add to Cart'}
                </button>
            </div>
        </li>
    `).join('');
    
    // Agregar eventos a los botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Añadir al carrito
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = state.products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Verificar si el producto ya está en el carrito
    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Guardar en localStorage
    saveCart();
    
    // Actualizar UI
    updateUI();
    
    // Mostrar mensaje
    const lang = state.translations[state.language];
    alert(lang?.addToCart ? `${product.name} ${lang.addToCart}` : 'Product added to cart');
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    updateCartUI();
}

// Renderizar items del carrito
function renderCartItems() {
    if (!elements.cartItems || !elements.cartTotal) return;
    
    const lang = state.translations[state.language];
    
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = `<li><p>${lang?.emptyCart || 'Your cart is empty'}</p></li>`;
        elements.cartTotal.textContent = '$0.00';
        if (elements.checkoutBtn) elements.checkoutBtn.disabled = true;
        return;
    }
    
    let total = 0;
    
    elements.cartItems.innerHTML = state.cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <li class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                    <button class="remove-from-cart" data-id="${item.id}">
                        <i class="fas fa-trash"></i> ${lang?.remove || 'Remove'}
                    </button>
                </div>
            </li>
        `;
    }).join('');
    
    elements.cartTotal.textContent = `$${total.toFixed(2)}`;
    if (elements.checkoutBtn) elements.checkoutBtn.disabled = false;
    
    // Agregar eventos a los botones de eliminar
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Eliminar del carrito
function removeFromCart(e) {
    const productId = parseInt(e.currentTarget.dataset.id);
    state.cart = state.cart.filter(item => item.id !== productId);
    
    // Guardar en localStorage
    saveCart();
    
    // Actualizar UI
    updateUI();
}

// Manejar inicio de sesión
function handleLogin(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const email = document.getElementById('email')?.value.trim();
    const password = document.getElementById('password')?.value;
    
    // Validar que los campos no estén vacíos
    if (!email || !password) {
        alert('Por favor ingresa tu correo y contraseña');
        return;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return;
    }
    
    // Obtener usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Buscar el usuario por email
    const user = users.find(u => u.email === email);
    
    if (user) {
        // Verificar la contraseña (en una aplicación real, esto sería con hash)
        if (user.password === password) {
            // Inicio de sesión exitoso
            state.currentUser = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            
            // Guardar en localStorage
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
            
            // Actualizar la UI
            updateUI();
            
            // Cerrar el modal de inicio de sesión
            if (elements.loginModal) elements.loginModal.close();
            
            // Mostrar mensaje de bienvenida
            alert(`¡Bienvenido/a de nuevo, ${user.name}!`);
            
            // Recargar la página para actualizar la UI
            window.location.reload();
        } else {
            alert('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
        }
    } else {
        alert('No existe una cuenta con este correo electrónico. ¿Te gustaría registrarte?');
        // Opcional: Redirigir al formulario de registro
        if (elements.loginModal) elements.loginModal.close();
        if (elements.registerModal) elements.registerModal.showModal();
    }
}

// Manejar registro
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('new-email')?.value;
    const password = document.getElementById('new-password')?.value;
    
    if (!name || !email || !password) return;
    
    // Aquí iría el registro con Supabase
    console.log('Registrando usuario:', { name, email, password });
    
    // Simular registro exitoso
    state.currentUser = { email, name };
    localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    
    // Actualizar UI
    updateUI();
    
    // Cerrar modal
    if (elements.registerModal) elements.registerModal.close();
    
    // Mostrar mensaje de éxito
    const lang = state.translations[state.language];
    alert(lang?.welcome || 'Welcome! Your account has been created.');
}

// Manejar búsqueda
function handleSearch() {
    if (!elements.searchInput || !elements.categorySelector) return;
    
    const searchTerm = elements.searchInput.value.toLowerCase();
    const category = elements.categorySelector.value;
    
    let filteredProducts = [...state.products];
    
    // Filtrar por categoría
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Renderizar productos filtrados
    renderProducts(filteredProducts);
}

// Manejar pago
function handleCheckout() {
    if (state.cart.length === 0) return;
    
    if (!state.currentUser) {
        const lang = state.translations[state.language];
        alert(lang?.loginToAccount || 'Please log in to proceed with checkout');
        showModal('login');
        return;
    }
    
    // Aquí iría la lógica de pago
    console.log('Procesando pago...', state.cart);
    
    // Simular compra exitosa
    state.cart = [];
    saveCart();
    updateUI();
    
    // Mostrar mensaje de éxito
    const lang = state.translations[state.language];
    alert(lang?.proceedToCheckout || 'Thank you for your purchase!');
}

// Actualizar UI
function updateUI() {
    updateCartUI();
    updateAuthUI();
}

// Actualizar UI del carrito
function updateCartUI() {
    if (!elements.cartCount) return;
    
    const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
    elements.cartCount.textContent = totalItems;
    
    // Actualizar el carrito si está abierto
    if (elements.cartSidebar?.classList.contains('active')) {
        renderCartItems();
    }
}

// Actualizar UI de autenticación
function updateAuthUI() {
    if (!elements.loginBtn || !elements.registerBtn) return;
    
    const lang = state.translations[state.language];
    
    if (state.currentUser) {
        elements.loginBtn.style.display = 'none';
        elements.registerBtn.textContent = state.currentUser.name;
        elements.registerBtn.removeAttribute('data-i18n');
    } else {
        elements.loginBtn.style.display = 'inline-block';
        elements.loginBtn.textContent = lang?.login || 'Login';
        elements.loginBtn.setAttribute('data-i18n', 'login');
        
        elements.registerBtn.textContent = lang?.register || 'Register';
        elements.registerBtn.setAttribute('data-i18n', 'register');
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);