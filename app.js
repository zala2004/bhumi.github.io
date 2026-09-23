/**
 * BHŪMI ATELIER - Main Client Application Logic
 * E-commerce Dual-Tier (Everyday & Privé Luxury) Experience
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. PRODUCT CATALOG DATA (Clothes, Jewellery, Shoes, Watches | Men & Women)
  // =========================================================================
  const PRODUCTS = [
    // --- CLOTHES ---
    {
      id: 'c-01',
      title: 'Relaxed Pure Linen Wrap Blouse',
      category: 'clothes',
      gender: 'women',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 48,
      originalPrice: 65,
      rating: 4.8,
      reviewsCount: 142,
      image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=700&q=80',
      description: 'Spun from 100% natural Normandy flax linen. Breathable, relaxed silhouette tailored for balmy weekend afternoons or effortless office layering.',
      craftDetails: '100% certified organic French linen. Non-toxic organic dye, pre-washed for zero shrinkage.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['#E6DFD5', '#FFFFFF', '#343A40'],
      featured: true
    },
    {
      id: 'c-02',
      title: 'Structured Oxford Tailored Shirt',
      category: 'clothes',
      gender: 'men',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 55,
      originalPrice: 75,
      rating: 4.9,
      reviewsCount: 98,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
      description: 'Crisp long-staple cotton weave designed with a modern semi-spread collar, mother-of-pearl buttons, and reinforced single-needle tailoring.',
      craftDetails: '100% Egyptian long-staple cotton, natural mother-of-pearl buttons, machine washable.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['#F8F9FA', '#C9D6DF', '#222831'],
      featured: false
    },
    {
      id: 'c-03',
      title: 'Mulberry Silk Bias-Cut Evening Gown',
      category: 'clothes',
      gender: 'women',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 680,
      originalPrice: null,
      rating: 5.0,
      reviewsCount: 39,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80',
      description: 'An ethereal creation cut on the bias from 22-momme pure mulberry silk. Floats against the silhouette with graceful liquid movement.',
      craftDetails: '22-Momme grade 6A mulberry silk. Hand-rolled hems finished in our private Florence atelier.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['#1A1A1A', '#C5A880', '#581845'],
      featured: true
    },
    {
      id: 'c-04',
      title: 'Unstructured Double-Faced Cashmere Blazer',
      category: 'clothes',
      gender: 'men',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 1250,
      originalPrice: 1400,
      rating: 4.9,
      reviewsCount: 27,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80',
      description: 'Hand-sewn double-faced Mongolian cashmere. Completely unlined and unstructured for supreme lightness and regal drape.',
      craftDetails: 'Pure Mongolian grade-A cashmere. Horn buttons carved by master craftsmen in Biella, Italy.',
      sizes: ['38R', '40R', '42R', '44R'],
      colors: ['#2B2B2B', '#4A3B32', '#1B263B'],
      featured: true
    },

    // --- JEWELLERY ---
    {
      id: 'j-01',
      title: 'Minimalist Sterling Silver Huggie Hoops',
      category: 'jewellery',
      gender: 'women',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 38,
      originalPrice: 50,
      rating: 4.7,
      reviewsCount: 210,
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
      description: 'Subtle, featherlight everyday huggies crafted in solid 925 sterling silver with rhodium coating to resist tarnishing.',
      craftDetails: 'Solid recycled 925 Sterling Silver, hypoallergenic, nickel-free, secure click-latch.',
      sizes: ['One Size (12mm)'],
      colors: ['#C0C0C0', '#DFC07D'],
      featured: false
    },
    {
      id: 'j-02',
      title: 'Brushed Matte Titanium Signet Ring',
      category: 'jewellery',
      gender: 'men',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 45,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 88,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
      description: 'Aerospace-grade titanium engineered with a satin brushed face and comfort-fit beveled interior band.',
      craftDetails: 'Grade 5 aerospace titanium. Virtually scratch-proof and 100% corrosion resistant.',
      sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
      colors: ['#4A4A4A', '#222222'],
      featured: false
    },
    {
      id: 'j-03',
      title: '18K Solstice Natural Diamond Pendant',
      category: 'jewellery',
      gender: 'women',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 1480,
      originalPrice: 1650,
      rating: 5.0,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
      description: 'An exceptional 0.75-carat brilliant-cut certified conflict-free diamond mounted on a hand-carved 18K solid yellow gold sunburst pendant.',
      craftDetails: '18K Fairmined Solid Gold. VS1 Clarity, F-Color certified diamond. GIA Certificate included.',
      sizes: ['Adjustable 16"-18" Chain'],
      colors: ['#DFC07D', '#E5E4E2'],
      featured: true
    },
    {
      id: 'j-04',
      title: '18K Byzantine Woven Gold Cuff',
      category: 'jewellery',
      gender: 'men',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 1850,
      originalPrice: null,
      rating: 5.0,
      reviewsCount: 14,
      image: 'https://images.unsplash.com/photo-1611591475152-4783113828af?auto=format&fit=crop&w=700&q=80',
      description: 'Heavy, intricately woven interlocking links inspired by ancient Byzantine metallurgy. Finished with our signature BHŪMI insignia lock.',
      craftDetails: 'Solid 18 Karat Yellow Gold (42 grams weight). Hand-woven over 32 hours in our workshop.',
      sizes: ['Medium (19cm)', 'Large (21cm)'],
      colors: ['#DFC07D'],
      featured: true
    },

    // --- SHOES ---
    {
      id: 's-01',
      title: 'Cloudwalk Minimalist Leather Sneakers',
      category: 'shoes',
      gender: 'men',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 85,
      originalPrice: 110,
      rating: 4.8,
      reviewsCount: 164,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80',
      description: 'Buttery-soft full-grain calf leather paired with an ortholite memory foam sole. Clean, low-profile silhouette suitable for suit or denim.',
      craftDetails: 'Supple Napa leather, recycled rubber Margom-style cupsole, memory foam footbed.',
      sizes: ['40 EU / 7 US', '41 EU / 8 US', '42 EU / 9 US', '43 EU / 10 US', '44 EU / 11 US'],
      colors: ['#FFFFFF', '#1A1A1A'],
      featured: false
    },
    {
      id: 's-02',
      title: 'Nappa Leather Pointed Ballet Flats',
      category: 'shoes',
      gender: 'women',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 75,
      originalPrice: 95,
      rating: 4.7,
      reviewsCount: 115,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
      description: 'Sculpted point-toe flats with elasticated heel counter and cushioned arch support for all-day metropolitan walking.',
      craftDetails: 'Genuine Italian glove-leather upper, flexible leather outsole, breathable leather lining.',
      sizes: ['36 EU / 6 US', '37 EU / 7 US', '38 EU / 8 US', '39 EU / 9 US', '40 EU / 10 US'],
      colors: ['#D2B48C', '#000000', '#800020'],
      featured: false
    },
    {
      id: 's-03',
      title: 'Hand-Lasted Tuscan Wholecut Oxfords',
      category: 'shoes',
      gender: 'men',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 620,
      originalPrice: null,
      rating: 4.9,
      reviewsCount: 44,
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80',
      description: 'Crafted from a single seamless piece of museum French calfskin. Hand-patinated in Tuscany with Goodyear-welted channeled soles.',
      craftDetails: 'Goodyear welted construction, vegetable-tanned French calfskin, hand-painted chestnut patina.',
      sizes: ['41 EU / 8 US', '42 EU / 9 US', '43 EU / 10 US', '44 EU / 11 US', '45 EU / 12 US'],
      colors: ['#4A2E18', '#1A1A1A'],
      featured: true
    },
    {
      id: 's-04',
      title: 'Sculptural Crystal Evening Stiletto Heels',
      category: 'shoes',
      gender: 'women',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 790,
      originalPrice: 890,
      rating: 5.0,
      reviewsCount: 31,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
      description: 'Artisanal Italian metallic lambskin set with Austrian crystals cascading down a 90mm architectural stiletto.',
      craftDetails: 'Fine Italian specchio leather, hand-embroidered Austrian crystals, padded leather insole.',
      sizes: ['36 EU / 6 US', '37 EU / 7 US', '38 EU / 8 US', '39 EU / 9 US'],
      colors: ['#DFC07D', '#E5E4E2'],
      featured: true
    },

    // --- WATCHES ---
    {
      id: 'w-01',
      title: 'Ultra-Thin Sapphire Minimalist Quartz',
      category: 'watches',
      gender: 'men',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 95,
      originalPrice: 130,
      rating: 4.8,
      reviewsCount: 178,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80',
      description: 'Sleek 6.8mm profile with scratch-resistant sapphire crystal glass, 316L stainless steel case, and quick-release genuine leather strap.',
      craftDetails: 'Miyota Precision Quartz Movement, Sapphire crystal lens, 5 ATM water resistance, 316L surgical steel.',
      sizes: ['40mm Case (Standard)'],
      colors: ['#1A1A1A', '#C0C0C0'],
      featured: false
    },
    {
      id: 'w-02',
      title: 'Milanese Mesh Rose Gold Petit Watch',
      category: 'watches',
      gender: 'women',
      tier: 'everyday',
      tierLabel: 'Everyday Essential',
      price: 88,
      originalPrice: 115,
      rating: 4.9,
      reviewsCount: 132,
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=700&q=80',
      description: 'Elegantly proportioned 32mm case with mother-of-pearl dial and self-adjusting fluid woven Milanese mesh band.',
      craftDetails: 'Genuine Mother-of-Pearl dial, Japanese quartz calibre, Rose gold ion-plated stainless steel.',
      sizes: ['32mm Case'],
      colors: ['#B76E79', '#DFC07D'],
      featured: false
    },
    {
      id: 'w-03',
      title: 'Heritage Automatic Skeleton Chronograph',
      category: 'watches',
      gender: 'men',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 2150,
      originalPrice: 2400,
      rating: 5.0,
      reviewsCount: 22,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80',
      description: 'Self-winding mechanical chronograph with open-worked skeleton dial revealing the intricate balance wheel and Côtes de Genève finishing.',
      craftDetails: 'Swiss-calibrated 28,800 vph automatic movement, 48-hr power reserve, alligator-embossed leather, sapphire exhibition caseback.',
      sizes: ['42mm Case'],
      colors: ['#DFC07D', '#2B2B2B'],
      featured: true
    },
    {
      id: 'w-04',
      title: 'Diamond Bezel Guilloché Automatic',
      category: 'watches',
      gender: 'women',
      tier: 'prive',
      tierLabel: 'Privé Luxury',
      price: 1650,
      originalPrice: null,
      rating: 5.0,
      reviewsCount: 18,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
      description: 'A masterpiece featuring 48 hand-set brilliant diamonds circling a hand-guilloché silver dial with blued steel Breguet hands.',
      craftDetails: '48 Natural Conflict-Free Diamonds (0.60 ctw), automatic calibre, 18K rose gold plated bezel, Louisiana alligator strap.',
      sizes: ['34mm Case'],
      colors: ['#DFC07D', '#E5E4E2'],
      featured: true
    }
  ];

  // =========================================================================
  // 2. STATE MANAGEMENT & LOCAL STORAGE
  // =========================================================================
  let cart = JSON.parse(localStorage.getItem('bhumi_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('bhumi_wishlist') || '[]');
  let promoCode = localStorage.getItem('bhumi_promo') || '';
  let discountRate = promoCode.toUpperCase() === 'BHUMI10' ? 0.10 : 0.0;

  let currentCurrency = 'USD';
  const CURRENCY_MAP = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 83.5 }
  };

  const activeFilters = {
    gender: 'all',
    category: 'all',
    tier: 'all',
    search: '',
    sort: 'featured'
  };

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================
  const productsGrid = document.getElementById('products-grid');
  const resultsCount = document.getElementById('results-count');
  const emptyState = document.getElementById('empty-state');
  const filterDisplayLabel = document.getElementById('filter-display-label');
  const resetAllFiltersBtn = document.getElementById('reset-all-filters');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  // Drawers & Modals
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  const cartCountBadge = document.getElementById('cart-count');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount');
  const discountCalcRow = document.getElementById('discount-calc-row');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const shippingMeterText = document.getElementById('shipping-meter-text');
  const shippingMeterFill = document.getElementById('shipping-meter-fill');
  const promoInput = document.getElementById('promo-input');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoFeedback = document.getElementById('promo-feedback');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const checkoutTriggerBtn = document.getElementById('checkout-trigger-btn');

  // Wishlist
  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const wishlistDrawerBackdrop = document.getElementById('wishlist-drawer-backdrop');
  const wishlistDrawerClose = document.getElementById('wishlist-drawer-close');
  const wishlistCountBadge = document.getElementById('wishlist-count');
  const wishlistDrawerCount = document.getElementById('wishlist-drawer-count');
  const wishlistItemsList = document.getElementById('wishlist-items-list');
  const moveAllToCartBtn = document.getElementById('move-all-to-cart-btn');

  // Quick View Modal
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewBackdrop = document.getElementById('quick-view-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBodyContent = document.getElementById('modal-body-content');

  // Checkout Modal
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutBackdrop = document.getElementById('checkout-backdrop');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');
  const checkoutStepContainer = document.getElementById('checkout-step-container');

  // Mobile Menu & Search
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navCloseBtn = document.getElementById('nav-close-btn');
  const catalogSearch = document.getElementById('catalog-search');
  const currencySelect = document.getElementById('currency-select');
  const tierSelect = document.getElementById('tier-select');
  const sortSelect = document.getElementById('sort-select');

  // =========================================================================
  // 4. CURRENCY & FORMATTING UTILITIES
  // =========================================================================
  function formatMoney(amountInUSD) {
    const config = CURRENCY_MAP[currentCurrency] || CURRENCY_MAP.USD;
    const converted = amountInUSD * config.rate;
    if (currentCurrency === 'INR') {
      return `${config.symbol} ${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${config.symbol}${converted.toFixed(2)}`;
  }

  function showToast(message, icon = 'fa-check') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // =========================================================================
  // 5. PRODUCT FILTER & RENDER ENGINE
  // =========================================================================
  function getFilteredProducts() {
    return PRODUCTS.filter(item => {
      // Gender Filter
      if (activeFilters.gender !== 'all' && item.gender !== activeFilters.gender) {
        return false;
      }
      // Category Filter
      if (activeFilters.category !== 'all' && item.category !== activeFilters.category) {
        return false;
      }
      // Tier Filter
      if (activeFilters.tier !== 'all') {
        if (activeFilters.tier === 'everyday' && item.tier !== 'everyday') return false;
        if (activeFilters.tier === 'signature' && (item.price < 150 || item.price > 450)) return false;
        if (activeFilters.tier === 'prive' && item.tier !== 'prive') return false;
      }
      // Search Filter
      if (activeFilters.search.trim() !== '') {
        const query = activeFilters.search.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        if (!matchTitle && !matchCat && !matchDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (activeFilters.sort === 'price-low') return a.price - b.price;
      if (activeFilters.sort === 'price-high') return b.price - a.price;
      if (activeFilters.sort === 'rating') return b.rating - a.rating;
      // Default: featured first, then price
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }

  function renderProducts() {
    const filtered = getFilteredProducts();

    // Update count & active status text
    resultsCount.textContent = `Showing ${filtered.length} creation${filtered.length === 1 ? '' : 's'}`;
    
    // Build descriptive label
    let labelParts = [];
    if (activeFilters.gender !== 'all') labelParts.push(activeFilters.gender.toUpperCase());
    if (activeFilters.category !== 'all') labelParts.push(activeFilters.category.toUpperCase());
    if (activeFilters.tier !== 'all') labelParts.push(activeFilters.tier === 'prive' ? 'PRIVÉ LUXE' : activeFilters.tier.toUpperCase());
    if (activeFilters.search) labelParts.push(`"${activeFilters.search}"`);
    filterDisplayLabel.textContent = labelParts.length > 0 ? labelParts.join(' &bull; ') : 'All Creations';

    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');
    productsGrid.innerHTML = filtered.map(item => {
      const isWishlisted = wishlist.some(w => w.id === item.id);
      const isPrive = item.tier === 'prive';
      const badgeClass = isPrive ? 'badge-prive' : (item.tier === 'signature' ? 'badge-signature' : 'badge-everyday');

      return `
        <article class="product-card" data-id="${item.id}">
          <div class="product-media">
            <span class="product-badge ${badgeClass}">${item.tierLabel}</span>
            <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" data-id="${item.id}" aria-label="Add to wishlist">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <img src="${item.image}" alt="${item.title}" class="product-img" loading="lazy">
            <button class="quick-view-btn" data-id="${item.id}">
              <i class="fa-regular fa-eye"></i> Quick View
            </button>
          </div>

          <div class="product-info">
            <span class="product-category-gender">${item.gender} &bull; ${item.category}</span>
            <h3 class="product-title" title="${item.title}">${item.title}</h3>
            
            <div class="product-rating">
              <span class="stars"><i class="fa-solid fa-star"></i></span>
              <strong>${item.rating}</strong>
              <span>(${item.reviewsCount})</span>
            </div>

            <div class="product-price-row">
              <span class="current-price ${isPrive ? 'gold-price' : ''}">${formatMoney(item.price)}</span>
              ${item.originalPrice ? `<span class="original-price">${formatMoney(item.originalPrice)}</span>` : ''}
            </div>

            <button class="card-add-btn" data-id="${item.id}">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    attachCardListeners();
  }

  function attachCardListeners() {
    // Quick View buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickView(btn.getAttribute('data-id'));
      });
    });

    // Wishlist buttons
    document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(btn.getAttribute('data-id'));
      });
    });

    // Add to Bag buttons
    document.querySelectorAll('.card-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 1, prod.sizes[0], prod.colors[0]);
        }
      });
    });
  }

  // =========================================================================
  // 6. QUICK VIEW MODAL
  // =========================================================================
  function openQuickView(productId) {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;

    let selectedSize = item.sizes[0];
    let selectedColor = item.colors[0];

    modalBodyContent.innerHTML = `
      <div class="quick-view-grid">
        <div class="qv-gallery">
          <img src="${item.image}" alt="${item.title}" class="qv-main-img" id="qv-main-img">
        </div>

        <div class="qv-info">
          <span class="qv-tier-tag"><i class="fa-solid fa-gem"></i> ${item.tierLabel}</span>
          <h2 class="qv-title" id="modal-product-title">${item.title}</h2>
          
          <div class="product-rating">
            <span class="stars"><i class="fa-solid fa-star"></i></span>
            <strong>${item.rating} / 5.0</strong>
            <span>&bull; ${item.reviewsCount} Verified Customer Reviews</span>
          </div>

          <div class="qv-price-box">
            <span class="qv-price ${item.tier === 'prive' ? 'gold-price' : ''}">${formatMoney(item.price)}</span>
            ${item.originalPrice ? `<span class="original-price">${formatMoney(item.originalPrice)}</span>` : ''}
          </div>

          <p class="qv-description">${item.description}</p>
          
          <div class="qv-option-group">
            <label class="qv-option-label">Craft &amp; Materials</label>
            <p style="font-size: 0.8125rem; color: var(--text-muted);"><i class="fa-solid fa-award" style="color:var(--gold-primary);"></i> ${item.craftDetails}</p>
          </div>

          <!-- Color Options -->
          <div class="qv-option-group">
            <label class="qv-option-label">Color Finish</label>
            <div class="color-swatches" id="qv-colors">
              ${item.colors.map((c, i) => `
                <button type="button" class="swatch-circle ${i === 0 ? 'active' : ''}" style="background-color: ${c};" data-color="${c}" aria-label="Color Option"></button>
              `).join('')}
            </div>
          </div>

          <!-- Size Options -->
          <div class="qv-option-group">
            <label class="qv-option-label">Size / Dimension</label>
            <div class="size-boxes" id="qv-sizes">
              ${item.sizes.map((s, i) => `
                <button type="button" class="size-btn ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Add to Bag with Qty -->
          <div class="qv-add-row">
            <input type="number" id="qv-qty" class="qv-qty-input" value="1" min="1" max="10" aria-label="Quantity">
            <button class="btn btn-primary btn-block" id="qv-add-submit">
              <i class="fa-solid fa-bag-shopping"></i> Add to Bag &bull; ${formatMoney(item.price)}
            </button>
          </div>
        </div>
      </div>
    `;

    // Handle Swatch Selection
    const colorButtons = document.querySelectorAll('#qv-colors .swatch-circle');
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.getAttribute('data-color');
      });
    });

    // Handle Size Selection
    const sizeButtons = document.querySelectorAll('#qv-sizes .size-btn');
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
      });
    });

    // Handle Modal Add to Bag
    document.getElementById('qv-add-submit').addEventListener('click', () => {
      const qty = parseInt(document.getElementById('qv-qty').value, 10) || 1;
      addToCart(item, qty, selectedSize, selectedColor);
      closeQuickView();
    });

    quickViewModal.classList.add('active');
    quickViewBackdrop.classList.add('active');
  }

  function closeQuickView() {
    quickViewModal.classList.remove('active');
    quickViewBackdrop.classList.remove('active');
  }

  modalCloseBtn.addEventListener('click', closeQuickView);
  quickViewBackdrop.addEventListener('click', closeQuickView);

  // =========================================================================
  // 7. SHOPPING CART SYSTEM
  // =========================================================================
  function saveCart() {
    localStorage.setItem('bhumi_cart', JSON.stringify(cart));
    updateCartBadges();
    updateCartDrawer();
  }

  function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalQty;
    cartDrawerCount.textContent = totalQty;
  }

  function addToCart(product, quantity = 1, size = 'Standard', color = '#000000') {
    const cartItemId = `${product.id}_${size}_${color}`;
    const existingIndex = cart.findIndex(c => c.cartItemId === cartItemId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        cartItemId,
        id: product.id,
        title: product.title,
        price: product.price,
        tier: product.tier,
        image: product.image,
        category: product.category,
        size,
        color,
        quantity
      });
    }

    saveCart();
    showToast(`Added "${product.title}" to your Shopping Bag`, 'fa-bag-shopping');
    openCartDrawer();
  }

  function updateCartDrawer() {
    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-msg">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your bag is empty</h4>
          <p>Explore our creations and discover pieces crafted for your journey.</p>
        </div>
      `;
      cartSubtotalEl.textContent = formatMoney(0);
      cartTotalEl.textContent = formatMoney(0);
      shippingMeterFill.style.width = '0%';
      shippingMeterText.innerHTML = `Add ${formatMoney(150)} more for <strong>Complimentary Express Shipping</strong>`;
      discountCalcRow.classList.add('hidden');
      return;
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = subtotal * discountRate;
    const finalTotal = subtotal - discount;

    // Free Shipping threshold: $150
    const freeShippingThreshold = 150;
    const progressPct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    shippingMeterFill.style.width = `${progressPct}%`;

    if (subtotal >= freeShippingThreshold) {
      shippingMeterText.innerHTML = `<span style="color: var(--success); font-weight:700;"><i class="fa-solid fa-circle-check"></i> You've qualified for Complimentary Express Shipping!</span>`;
      cartShippingEl.innerHTML = `<span style="color: var(--success); font-weight:700;">FREE</span>`;
    } else {
      const remaining = freeShippingThreshold - subtotal;
      shippingMeterText.innerHTML = `Add ${formatMoney(remaining)} more for <strong>Complimentary Express Shipping</strong>`;
      cartShippingEl.textContent = formatMoney(15);
    }

    cartSubtotalEl.textContent = formatMoney(subtotal);

    if (discountRate > 0) {
      discountCalcRow.classList.remove('hidden');
      cartDiscountEl.textContent = `-${formatMoney(discount)}`;
    } else {
      discountCalcRow.classList.add('hidden');
    }

    cartTotalEl.textContent = formatMoney(finalTotal);

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-card" data-cart-id="${item.cartItemId}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <span class="cart-item-tier">${item.tier === 'prive' ? 'Privé Luxury' : 'Everyday Atelier'}</span>
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-meta">Size: ${item.size} &bull; <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};vertical-align:middle;border:1px solid #CCC;"></span></span>
          <div class="cart-item-bottom">
            <div class="cart-qty-ctrl">
              <button class="cart-qty-btn qty-minus" data-cart-id="${item.cartItemId}">&minus;</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn qty-plus" data-cart-id="${item.cartItemId}">&plus;</button>
            </div>
            <span class="cart-item-price">${formatMoney(item.price * item.quantity)}</span>
            <button class="cart-item-remove" data-cart-id="${item.cartItemId}" aria-label="Remove item">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Cart item action events
    document.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-cart-id');
        const item = cart.find(c => c.cartItemId === id);
        if (item) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            cart = cart.filter(c => c.cartItemId !== id);
          }
          saveCart();
        }
      });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-cart-id');
        const item = cart.find(c => c.cartItemId === id);
        if (item) {
          item.quantity++;
          saveCart();
        }
      });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-cart-id');
        cart = cart.filter(c => c.cartItemId !== id);
        saveCart();
        showToast('Item removed from your bag', 'fa-trash');
      });
    });
  }

  function openCartDrawer() {
    cartDrawer.classList.add('active');
    cartDrawerBackdrop.classList.add('active');
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('active');
    cartDrawerBackdrop.classList.remove('active');
  }

  cartBtn.addEventListener('click', openCartDrawer);
  cartDrawerClose.addEventListener('click', closeCartDrawer);
  cartDrawerBackdrop.addEventListener('click', closeCartDrawer);

  clearCartBtn.addEventListener('click', () => {
    if (cart.length > 0 && confirm('Are you sure you want to clear your shopping bag?')) {
      cart = [];
      saveCart();
      showToast('Shopping bag cleared', 'fa-circle-check');
    }
  });

  // Promo Code Validation
  applyPromoBtn.addEventListener('click', () => {
    const val = promoInput.value.trim().toUpperCase();
    if (val === 'BHUMI10') {
      promoCode = 'BHUMI10';
      discountRate = 0.10;
      localStorage.setItem('bhumi_promo', promoCode);
      promoFeedback.className = 'promo-feedback success';
      promoFeedback.textContent = 'Privilege Code Applied: 10% Off your entire order!';
      showToast('10% Welcome privilege applied!', 'fa-tag');
      saveCart();
    } else {
      promoFeedback.className = 'promo-feedback error';
      promoFeedback.textContent = 'Invalid promo code. Try "BHUMI10" for 10% off.';
    }
  });

  // =========================================================================
  // 8. WISHLIST SYSTEM
  // =========================================================================
  function saveWishlist() {
    localStorage.setItem('bhumi_wishlist', JSON.stringify(wishlist));
    updateWishlistBadges();
    renderProducts();
    updateWishlistDrawer();
  }

  function updateWishlistBadges() {
    const count = wishlist.length;
    wishlistCountBadge.textContent = count;
    wishlistDrawerCount.textContent = count;
  }

  function toggleWishlist(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const idx = wishlist.findIndex(w => w.id === productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed "${prod.title}" from Wishlist`, 'fa-heart');
    } else {
      wishlist.push(prod);
      showToast(`Saved "${prod.title}" to Wishlist`, 'fa-heart');
    }
    saveWishlist();
  }

  function updateWishlistDrawer() {
    if (wishlist.length === 0) {
      wishlistItemsList.innerHTML = `
        <div class="cart-empty-msg">
          <i class="fa-regular fa-heart"></i>
          <h4>Your wishlist is empty</h4>
          <p>Tap the heart icon on any piece you love to save it here.</p>
        </div>
      `;
      moveAllToCartBtn.disabled = true;
      return;
    }

    moveAllToCartBtn.disabled = false;
    wishlistItemsList.innerHTML = wishlist.map(item => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <span class="cart-item-tier">${item.tier === 'prive' ? 'Privé Luxury' : 'Everyday Essential'}</span>
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatMoney(item.price)}</span>
            <button class="btn btn-secondary btn-sm wl-move-btn" data-id="${item.id}" style="padding:0.4rem 0.8rem; font-size:0.75rem;">
              Move to Bag
            </button>
          </div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.wl-move-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 1, prod.sizes[0], prod.colors[0]);
          wishlist = wishlist.filter(w => w.id !== id);
          saveWishlist();
        }
      });
    });
  }

  function openWishlistDrawer() {
    wishlistDrawer.classList.add('active');
    wishlistDrawerBackdrop.classList.add('active');
  }

  function closeWishlistDrawer() {
    wishlistDrawer.classList.remove('active');
    wishlistDrawerBackdrop.classList.remove('active');
  }

  wishlistBtn.addEventListener('click', openWishlistDrawer);
  wishlistDrawerClose.addEventListener('click', closeWishlistDrawer);
  wishlistDrawerBackdrop.addEventListener('click', closeWishlistDrawer);

  moveAllToCartBtn.addEventListener('click', () => {
    if (wishlist.length === 0) return;
    wishlist.forEach(item => {
      addToCart(item, 1, item.sizes[0], item.colors[0]);
    });
    wishlist = [];
    saveWishlist();
    closeWishlistDrawer();
    showToast('All wishlist items moved to your Bag!', 'fa-bag-shopping');
  });

  // =========================================================================
  // 9. CHECKOUT SIMULATION MODAL
  // =========================================================================
  function openCheckoutModal() {
    if (cart.length === 0) {
      showToast('Your shopping bag is empty!', 'fa-circle-exclamation');
      return;
    }
    closeCartDrawer();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = subtotal * discountRate;
    const finalTotal = subtotal - discount;

    checkoutStepContainer.innerHTML = `
      <div class="checkout-header">
        <i class="fa-solid fa-lock"></i>
        <h3 id="checkout-modal-title">Secure Atelier Checkout</h3>
        <p style="font-size:0.875rem; color:var(--text-muted);">Encrypted 256-Bit SSL Connection</p>
      </div>

      <form id="checkout-form">
        <h4 style="font-size: 0.9375rem; margin-bottom: 0.75rem; text-transform:uppercase; letter-spacing:1px; color:var(--gold-primary);">1. Shipping Address</h4>
        
        <div class="checkout-form-grid">
          <div class="form-group">
            <label for="ch-first-name">First Name</label>
            <input type="text" id="ch-first-name" placeholder="Bhumi" required>
          </div>
          <div class="form-group">
            <label for="ch-last-name">Last Name</label>
            <input type="text" id="ch-last-name" placeholder="Patel" required>
          </div>
          <div class="form-group form-full">
            <label for="ch-email">Email for Confirmation</label>
            <input type="email" id="ch-email" placeholder="bhumi@example.com" required>
          </div>
          <div class="form-group form-full">
            <label for="ch-address">Delivery Address</label>
            <input type="text" id="ch-address" placeholder="Flat 402, Royal Residency, Park Lane" required>
          </div>
          <div class="form-group">
            <label for="ch-city">City</label>
            <input type="text" id="ch-city" placeholder="London / Mumbai / NYC" required>
          </div>
          <div class="form-group">
            <label for="ch-postal">Postal Code</label>
            <input type="text" id="ch-postal" placeholder="W1K 7AA" required>
          </div>
        </div>

        <h4 style="font-size: 0.9375rem; margin: 1.5rem 0 0.5rem; text-transform:uppercase; letter-spacing:1px; color:var(--gold-primary);">2. Payment Method</h4>
        <div class="payment-method-options">
          <div class="pay-card-label active">
            <i class="fa-regular fa-credit-card"></i> Credit Card
          </div>
          <div class="pay-card-label">
            <i class="fa-brands fa-apple-pay"></i> Apple Pay
          </div>
          <div class="pay-card-label">
            <i class="fa-solid fa-money-bill-wave"></i> Cash on Delivery
          </div>
        </div>

        <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.875rem; margin-bottom:0.25rem;">
            <span>Order Value (${cart.length} item${cart.length > 1 ? 's' : ''})</span>
            <span>${formatMoney(subtotal)}</span>
          </div>
          ${discountRate > 0 ? `
          <div style="display:flex; justify-content:space-between; font-size:0.875rem; color:var(--success); margin-bottom:0.25rem;">
            <span>Privilege Discount</span>
            <span>-${formatMoney(discount)}</span>
          </div>` : ''}
          <div style="display:flex; justify-content:space-between; font-size:1.15rem; font-weight:700; border-top:1px solid var(--border-light); padding-top:0.5rem; margin-top:0.5rem;">
            <span>Total Payable</span>
            <span style="color:var(--gold-dark);">${formatMoney(finalTotal)}</span>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa-solid fa-lock"></i> Authorize &amp; Place Order (${formatMoney(finalTotal)})
        </button>
      </form>
    `;

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const clientName = document.getElementById('ch-first-name').value;
      const orderNumber = `BHM-${Math.floor(100000 + Math.random() * 900000)}`;

      // Render confirmation screen
      checkoutStepContainer.innerHTML = `
        <div class="order-success-box">
          <div class="order-success-icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3>Thank You, ${clientName}!</h3>
          <p style="color:var(--text-muted); margin-bottom:1rem;">Your order has been officially received and registered at the BHŪMI ATELIER.</p>
          <div class="order-number">Order Reference: <strong>#${orderNumber}</strong></div>
          <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:1.5rem;">
            A confirmation dispatch dossier has been sent to your email. Your pieces are being hand-inspected and packaged in our signature keepsake box.
          </p>
          <button class="btn btn-primary" id="continue-shopping-btn">
            Continue Exploring Collections
          </button>
        </div>
      `;

      // Clear Cart
      cart = [];
      saveCart();

      document.getElementById('continue-shopping-btn').addEventListener('click', closeCheckoutModal);
    });

    checkoutModal.classList.add('active');
    checkoutBackdrop.classList.add('active');
  }

  function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    checkoutBackdrop.classList.remove('active');
  }

  checkoutTriggerBtn.addEventListener('click', openCheckoutModal);
  checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  checkoutBackdrop.addEventListener('click', closeCheckoutModal);

  // =========================================================================
  // 10. FILTER EVENT LISTENERS & NAVIGATION
  // =========================================================================
  // Gender Tabs
  document.querySelectorAll('#gender-tabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#gender-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilters.gender = tab.getAttribute('data-gender');
      renderProducts();
    });
  });

  // Category Pills
  document.querySelectorAll('#category-pills .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#category-pills .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.category = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Price Tier Select
  tierSelect.addEventListener('change', (e) => {
    activeFilters.tier = e.target.value;
    renderProducts();
  });

  // Sort Select
  sortSelect.addEventListener('change', (e) => {
    activeFilters.sort = e.target.value;
    renderProducts();
  });

  // Search Input with Debounce
  let searchTimeout;
  catalogSearch.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      activeFilters.search = e.target.value;
      renderProducts();
    }, 250);
  });

  // Reset Filters
  function resetAll() {
    activeFilters.gender = 'all';
    activeFilters.category = 'all';
    activeFilters.tier = 'all';
    activeFilters.search = '';
    activeFilters.sort = 'featured';

    catalogSearch.value = '';
    tierSelect.value = 'all';
    sortSelect.value = 'featured';

    document.querySelectorAll('#gender-tabs .filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('#gender-tabs [data-gender="all"]').classList.add('active');

    document.querySelectorAll('#category-pills .pill-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('#category-pills [data-category="all"]').classList.add('active');

    renderProducts();
    showToast('Filters cleared to show all creations', 'fa-arrows-rotate');
  }

  resetAllFiltersBtn.addEventListener('click', resetAll);
  emptyResetBtn.addEventListener('click', resetAll);

  // Currency Switcher
  currencySelect.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    renderProducts();
    updateCartDrawer();
    updateWishlistDrawer();
    showToast(`Currency changed to ${currentCurrency}`, 'fa-globe');
  });

  // Top Nav Category Filter Links
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-filter-category');
      const gen = link.getAttribute('data-filter-gender');
      const tier = link.getAttribute('data-filter-tier');

      if (cat) {
        resetAll();
        activeFilters.category = cat;
        document.querySelectorAll('#category-pills .pill-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === cat);
        });
      } else if (gen) {
        resetAll();
        activeFilters.gender = gen;
        document.querySelectorAll('#gender-tabs .filter-tab').forEach(t => {
          t.classList.toggle('active', t.getAttribute('data-gender') === gen);
        });
      } else if (tier) {
        resetAll();
        activeFilters.tier = tier;
        tierSelect.value = tier;
      }

      renderProducts();
      mainNav.classList.remove('active');
    });
  });

  // Dual-Tier Spotlight Buttons
  document.querySelectorAll('.filter-tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tier = btn.getAttribute('data-tier');
      resetAll();
      activeFilters.tier = tier;
      tierSelect.value = tier;
      renderProducts();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hero Section CTA buttons
  document.getElementById('hero-btn-everyday').addEventListener('click', () => {
    resetAll();
    activeFilters.tier = 'everyday';
    tierSelect.value = 'everyday';
    renderProducts();
  });

  document.getElementById('hero-btn-prive').addEventListener('click', () => {
    resetAll();
    activeFilters.tier = 'prive';
    tierSelect.value = 'prive';
    renderProducts();
  });

  // Category Cards Click to Filter
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-cat');
      resetAll();
      activeFilters.category = cat;
      document.querySelectorAll('#category-pills .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === cat);
      });
      renderProducts();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Footer Category Links
  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-cat');
      resetAll();
      activeFilters.category = cat;
      document.querySelectorAll('#category-pills .pill-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === cat);
      });
      renderProducts();
    });
  });

  document.querySelectorAll('.footer-tier-link').forEach(link => {
    link.addEventListener('click', () => {
      resetAll();
      activeFilters.tier = 'prive';
      tierSelect.value = 'prive';
      renderProducts();
    });
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', () => mainNav.classList.add('active'));
  navCloseBtn.addEventListener('click', () => mainNav.classList.remove('active'));

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    newsletterForm.reset();
    showToast(`Welcome to BHŪMI Circle, ${email}! Use code BHUMI10 for 10% off.`, 'fa-envelope-open-text');
  });

  // Set Current Year in Footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // =========================================================================
  // 11. INITIALIZE APP
  // =========================================================================
  updateCartBadges();
  updateWishlistBadges();
  updateCartDrawer();
  updateWishlistDrawer();
  renderProducts();

  console.log('BHŪMI ATELIER application initialized successfully.');
});
