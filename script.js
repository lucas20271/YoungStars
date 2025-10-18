// Datos de productos (Precios en Pesos Colombianos - COP)
const products = [
    {
        id: 1,
        title: "Hoodie Oversized Black",
        description: "Hoodie de corte oversized con capucha ajustable. Perfecto para el look streetwear más auténtico.",
        price: 359900,
        originalPrice: 359900,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
        category: "featured",
        badge: "Nuevo"
    },
    {
        id: 2,
        title: "Cargo Pants Camo",
        description: "Pantalones cargo con bolsillos laterales y diseño camuflaje. Comodidad y estilo en uno.",
        price: 299900,
        originalPrice: 299900,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop&crop=center",
        category: "featured",
        badge: "Popular"
    },
    {
        id: 3,
        title: "Crop Top Aesthetic",
        description: "Top corto con diseño minimalista. Ideal para combinar con high-waist pants.",
        price: 149900,
        originalPrice: 149900,
        image: "https://i.pinimg.com/originals/70/2d/3c/702d3c43689b2c7d93067ab34a0ca091.png",
        category: "featured",
        badge: "Trending"
    },
    {
        id: 4,
        title: "Sneakers White",
        description: "Zapatillas blancas de diseño minimalista. La base perfecta para cualquier outfit.",
        price: 479900,
        originalPrice: 479900,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
        category: "featured",
        badge: "Especial"
    },
    {
        id: 5,
        title: "Bucket Hat Neon",
        description: "Gorra bucket en color neón. Accesorio perfecto para destacar tu personalidad.",
        price: 89900,
        originalPrice: 89900,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop&crop=center",
        category: "new",
        badge: "Nuevo"
    },
    {
        id: 6,
        title: "Windbreaker Tech",
        description: "Chaqueta cortavientos con tecnología transpirable. Estilo y funcionalidad.",
        price: 389900,
        originalPrice: 389900,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop&crop=center",
        category: "new",
        badge: "Tech"
    },
    {
        id: 7,
        title: "Biker Shorts Black",
        description: "Shorts de ciclista en color negro. Perfectos para el gimnasio o el streetwear.",
        price: 119900,
        originalPrice: 119900,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=300&fit=crop&crop=center",
        category: "new",
        badge: "Fitness"
    },
    {
        id: 8,
        title: "Dad Cap Vintage",
        description: "Gorra dad cap con diseño vintage. Un clásico que nunca pasa de moda.",
        price: 79900,
        originalPrice: 79900,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop&crop=center",
        category: "new",
        badge: "Vintage"
    },
    // Productos en oferta
    {
        id: 9,
        title: "Hoodie Oversized White",
        description: "Hoodie blanco de corte oversized. Edición limitada con descuento especial.",
        price: 179900,
        originalPrice: 359900,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    },
    {
        id: 10,
        title: "Cargo Pants Black",
        description: "Pantalones cargo negros con bolsillos laterales. Oferta por tiempo limitado.",
        price: 149900,
        originalPrice: 299900,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop&crop=center",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    },
    {
        id: 11,
        title: "Crop Top Pastel",
        description: "Top corto en color pastel. Perfecto para el verano con descuento especial.",
        price: 74900,
        originalPrice: 149900,
        image: "https://i.pinimg.com/originals/70/2d/3c/702d3c43689b2c7d93067ab34a0ca091.png",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    },
    {
        id: 12,
        title: "Sneakers Black",
        description: "Zapatillas negras de diseño minimalista. Oferta por stock limitado.",
        price: 239900,
        originalPrice: 479900,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    },
    {
        id: 13,
        title: "Bucket Hat Black",
        description: "Gorra bucket negra clásica. Descuento especial en accesorios.",
        price: 44900,
        originalPrice: 89900,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop&crop=center",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    },
    {
        id: 14,
        title: "Windbreaker Black",
        description: "Chaqueta cortavientos negra. Oferta por cambio de temporada.",
        price: 194900,
        originalPrice: 389900,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop&crop=center",
        category: "offers",
        badge: "50% OFF",
        discount: 50
    }
];

// Estado del carrito
let cart = [];
let cartTotal = 0;

// Elementos del DOM
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const newProductsGrid = document.getElementById('new-products-grid');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Función para abrir página de detalles del producto
function openProductDetail(productId) {
    console.log('Abriendo producto:', productId);
    alert('Abriendo detalles del producto: ' + productId);
    
    // Guardar productos en localStorage para acceso desde la página de detalles
    localStorage.setItem('products', JSON.stringify(products));
    
    // Abrir página de detalles en nueva ventana
    window.open(`product-detail.html?id=${productId}`, '_blank');
}

// Función para actualizar contador del carrito (llamada desde la página de detalles)
function updateCartCounter() {
    updateCartUI();
}

// Función para proceder al pago
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega algunos productos antes de proceder al pago.');
        return;
    }
    
    // Guardar carrito en localStorage para la página de checkout
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirigir a la página de checkout
    window.location.href = 'checkout.html';
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartUI();
    startOfferTimer();
});

// Cargar productos
function loadProducts() {
    const featuredProducts = products.filter(product => product.category === 'featured');
    const newProducts = products.filter(product => product.category === 'new');
    const offersProducts = products.filter(product => product.category === 'offers');
    
    renderProducts(featuredProducts, productsGrid);
    renderProducts(newProducts, newProductsGrid);
    renderOffersProducts(offersProducts, document.getElementById('offers-products-grid'));
}

// Renderizar productos
function renderProducts(productsArray, container) {
    container.innerHTML = '';
    
    productsArray.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image" onclick="openProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.title}" />
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${formatPrice(product.price)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Agregar al Carrito
            </button>
        </div>
    `;
    
    // Agregar event listener directamente
    const imageDiv = card.querySelector('.product-image');
    const titleDiv = card.querySelector('.product-title');
    
    imageDiv.addEventListener('click', () => {
        console.log('Clic en imagen del producto:', product.id);
        openProductDetail(product.id);
    });
    
    titleDiv.addEventListener('click', () => {
        console.log('Clic en título del producto:', product.id);
        openProductDetail(product.id);
    });
    
    return card;
}

// Crear tarjeta de producto en oferta
function createOffersProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image" onclick="openProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.title}" />
            ${product.badge ? `<div class="discount-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="original-price">${formatPrice(product.originalPrice)}</span>
                ${formatPrice(product.price)}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Agregar al Carrito
            </button>
        </div>
    `;
    
    // Agregar event listener directamente
    const imageDiv = card.querySelector('.product-image');
    const titleDiv = card.querySelector('.product-title');
    
    imageDiv.addEventListener('click', () => {
        console.log('Clic en imagen del producto (oferta):', product.id);
        openProductDetail(product.id);
    });
    
    titleDiv.addEventListener('click', () => {
        console.log('Clic en título del producto (oferta):', product.id);
        openProductDetail(product.id);
    });
    
    return card;
}

// Renderizar productos en oferta
function renderOffersProducts(productsArray, container) {
    container.innerHTML = '';
    
    productsArray.forEach(product => {
        const productCard = createOffersProductCard(product);
        container.appendChild(productCard);
    });
}

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showAddToCartAnimation();
}

// Remover del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// Actualizar UI del carrito
function updateCartUI() {
    // Actualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar total
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = formatPrice(cartTotal);
    
    // Renderizar items del carrito
    renderCartItems();
}

// Renderizar items del carrito
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-tshirt"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    Eliminar
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Carrito
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    
    // Menú móvil
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // CTA buttons
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            document.getElementById('productos').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Toggle carrito
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Cerrar carrito
function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle menú móvil
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Manejar newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert('¡Gracias por suscribirte! Te mantendremos al día con las últimas novedades.');
        e.target.reset();
    }
}

// Animación de agregar al carrito
function showAddToCartAnimation() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    cartBtn.style.color = '#ff6b6b';
    
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
        cartBtn.style.color = '';
    }, 200);
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos
    document.querySelectorAll('.product-card, .about-text, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animaciones de scroll
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Funciones de utilidad
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Manejar checkout
function handleCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`¡Procesando compra!\n\nItems: ${itemCount}\nTotal: ${formatPrice(total)}\n\n¡Gracias por tu compra!`);
    
    // Limpiar carrito
    cart = [];
    updateCartUI();
    closeCartSidebar();
}

// Agregar event listener al botón de checkout
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
});

// Búsqueda de productos
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar productos...';
    searchInput.className = 'search-input';
    searchInput.style.display = 'none';
    
    searchBtn.addEventListener('click', () => {
        searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
        if (searchInput.style.display === 'block') {
            searchInput.focus();
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterProducts(query);
    });
    
    document.querySelector('.nav-icons').appendChild(searchInput);
}

// Filtrar productos
function filterProducts(query) {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    
    const featuredFiltered = filteredProducts.filter(p => p.category === 'featured');
    const newFiltered = filteredProducts.filter(p => p.category === 'new');
    
    renderProducts(featuredFiltered, productsGrid);
    renderProducts(newFiltered, newProductsGrid);
}

// Inicializar búsqueda
document.addEventListener('DOMContentLoaded', setupSearch);

// Lazy loading para imágenes (simulado)
function setupLazyLoading() {
    const productImages = document.querySelectorAll('.product-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Simular carga de imagen
                entry.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                imageObserver.unobserve(entry.target);
            }
        });
    });
    
    productImages.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Manejar errores
window.addEventListener('error', function(e) {
    console.error('Error:', e.error);
});

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Tiempo de carga:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Inicializar monitoring
logPerformance();

// Timer de ofertas
function startOfferTimer() {
    // Establecer fecha de finalización (7 días desde ahora)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;
        
        if (distance < 0) {
            // La oferta ha terminado
            document.getElementById('offer-timer').innerHTML = '<div class="offer-ended">¡Oferta terminada!</div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Actualizar inmediatamente y luego cada segundo
    updateTimer();
    setInterval(updateTimer, 1000);
}
