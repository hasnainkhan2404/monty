// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.problem-card, .feature-card, .testimonial-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Preview Modal Function - Define this BEFORE the event listeners
function showPreviewModal() {
    console.log('showPreviewModal called'); // Debug log
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Course Preview</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="video-container">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Course Preview Video</p>
                    </div>
                </div>
                <div class="preview-content">
                    <h4>What You'll Learn</h4>
                    <ul>
                        <li>How to create engaging faceless content</li>
                        <li>Using ChatGPT for script generation</li>
                        <li>Editing with CapCut like a pro</li>
                        <li>Finding and pitching to brands</li>
                        <li>Monetization strategies</li>
                    </ul>
                    <button class="preview-cta">
                        <i class="fas fa-rocket"></i>
                        Get Full Access for ₹49
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add preview modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #333;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .video-container {
            margin-bottom: 1.5rem;
        }
        
        .video-placeholder {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
        }
        
        .video-placeholder i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .preview-content h4 {
            color: #333;
            margin-bottom: 1rem;
        }
        
        .preview-content ul {
            list-style: none;
            margin-bottom: 1.5rem;
        }
        
        .preview-content li {
            padding: 0.5rem 0;
            border-bottom: 1px solid #eee;
            color: #666;
        }
        
        .preview-content li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        
        .preview-cta {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(45deg, #ffd700, #ffed4e);
            color: #333;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: transform 0.2s ease;
        }
        
        .preview-cta:hover {
            transform: translateY(-2px);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 1rem;
                width: calc(100% - 2rem);
            }
        }
    `;
    
    document.head.appendChild(modalStyles);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const previewCta = modal.querySelector('.preview-cta');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
        modalStyles.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            modalStyles.remove();
        }
    });
    
    previewCta.addEventListener('click', () => {
        modal.remove();
        modalStyles.remove();
        showPurchaseModal();
    });
}

// Purchase Modal Function
function showPurchaseModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Complete Your Purchase</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="purchase-summary">
                    <h4>LearnLinx Course Package</h4>
                    <div class="price-display">
                        <span class="currency">₹</span>
                        <span class="amount">1</span>
                        <span class="period">only</span>
                    </div>
                    <ul class="package-features">
                        <li><i class="fas fa-check"></i> 5 Step-by-Step Video Tutorials</li>
                        <li><i class="fas fa-check"></i> Direct Links to FREE AI Tools</li>
                        <li><i class="fas fa-check"></i> Ready-to-Use Script Templates</li>
                        <li><i class="fas fa-check"></i> Freelancing & Monetization Guide</li>
                        <li><i class="fas fa-check"></i> Lifetime Access</li>
                        <li><i class="fas fa-check"></i> 30-Day Money Back Guarantee</li>
                    </ul>
                </div>
                <div class="payment-section">
                    <button class="payment-button">
                        <i class="fas fa-credit-card"></i>
                        Pay ₹1 & Get Instant Access
                    </button>
                    <p class="secure-payment">
                        <i class="fas fa-shield-alt"></i>
                        Secure payment powered by Razorpay
                    </p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
        }
        
        .modal-header h3 {
            margin: 0;
            color: #333;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .purchase-summary h4 {
            color: #333;
            margin-bottom: 1rem;
        }
        
        .price-display {
            display: flex;
            align-items: baseline;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .price-display .currency {
            font-size: 1.2rem;
            color: #333;
        }
        
        .price-display .amount {
            font-size: 2.5rem;
            font-weight: 700;
            color: #6366f1;
        }
        
        .price-display .period {
            color: #666;
        }
        
        .package-features {
            list-style: none;
            margin-bottom: 2rem;
        }
        
        .package-features li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            color: #666;
        }
        
        .package-features i {
            color: #10b981;
        }
        
        .payment-button {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(45deg, #6366f1, #8b5cf6);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            transition: transform 0.2s ease;
        }
        
        .payment-button:hover {
            transform: translateY(-2px);
        }
        
        .secure-payment {
            text-align: center;
            color: #666;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 1rem;
                width: calc(100% - 2rem);
            }
        }
    `;
    
    document.head.appendChild(modalStyles);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const paymentBtn = modal.querySelector('.payment-button');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
        modalStyles.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            modalStyles.remove();
        }
    });
    
    paymentBtn.addEventListener('click', () => {
        // Demo mode toggle - set to false to enable real Razorpay
        const DEMO_MODE = false;
        
        if (DEMO_MODE) {
            // Demo payment flow for testing
            console.log('Demo mode: Simulating payment...');
            
            // Show loading state
            paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            paymentBtn.disabled = true;
            
            // Simulate payment processing
            setTimeout(() => {
                // Simulate successful payment
                console.log('Demo payment successful');
                
                // Show success message
                showNotification('Payment successful! Your course is downloading...', 'success');
                
                // Trigger course file download
                const link = document.createElement('a');
                link.href = 'LearnLinx-Course.txt';
                link.download = 'LearnLinx-Course.txt';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Close modal
                modal.remove();
                modalStyles.remove();
                
                // Show download confirmation
                setTimeout(() => {
                    showNotification('Course downloaded successfully! Check your downloads folder.', 'success');
                }, 2000);
                
            }, 2000); // 2 second delay to simulate processing
            
        } else {
            // Real Razorpay integration
            var options = {
                "key": "rzp_test_5fkdStpGDx6WhF", // TODO: Replace with your actual Razorpay Key ID
                "amount": 100, // Amount in paise (₹1.00)
                "currency": "INR",
                "name": "LearnLinx",
                "description": "AI-Powered Content Creation Course",
                "image": "https://yourdomain.com/logo.png", // Optional: your logo URL
                "handler": function (response){
                    // Payment successful - trigger course download
                    console.log('Payment successful:', response);
                    
                    // Show success message
                    showNotification('Payment successful! Your course is downloading...', 'success');
                    
                    // Trigger course file download
                    const link = document.createElement('a');
                    link.href = 'LearnLinx-Course.txt'; // Using text file for testing
                    link.download = 'LearnLinx-Course.txt';
                    link.style.display = 'none';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Close modal
                    modal.remove();
                    modalStyles.remove();
                    
                    // Optional: Redirect to thank you page or show success message
                    setTimeout(() => {
                        showNotification('Course downloaded successfully! Check your downloads folder.', 'success');
                    }, 2000);
                },
                "prefill": {
                    "name": "", // Customer name (can be filled dynamically)
                    "email": "", // Customer email (can be filled dynamically)
                    "contact": "" // Customer phone (can be filled dynamically)
                },
                "notes": {
                    "address": "LearnLinx Course Purchase"
                },
                "theme": {
                    "color": "#6366f1"
                },
                "modal": {
                    "ondismiss": function() {
                        console.log('Payment modal closed');
                    }
                }
            };
            
            // Create and open Razorpay checkout
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response){
                console.log('Payment failed:', response.error);
                showNotification('Payment failed. Please try again.', 'error');
            });
            rzp1.open();
        }
    });
}

// CTA Button Click Handlers - Now AFTER the functions are defined
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug log
    
    const ctaButtons = document.querySelectorAll('.cta-button.primary, .pricing-cta');
    console.log('Found primary CTA buttons:', ctaButtons.length); // Debug log
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Show purchase modal or redirect
            showPurchaseModal();
        });
    });
    
    // Preview button handler
    const previewButtons = document.querySelectorAll('.cta-button.secondary');
    console.log('Found preview buttons:', previewButtons.length); // Debug log
    
    previewButtons.forEach(button => {
        console.log('Adding click listener to preview button'); // Debug log
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Preview button clicked!'); // Debug log
            showPreviewModal();
        });
    });

    // Add event listener for the fixed bottom bar START NOW button
    const startNowBarBtn = document.getElementById('start-now-bar-btn');
    if (startNowBarBtn) {
        startNowBarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPurchaseModal();
        });
    }
});

// Counter animation for pricing
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate price when pricing section comes into view
const pricingObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const priceElement = entry.target.querySelector('.amount');
            if (priceElement && !priceElement.dataset.animated) {
                priceElement.dataset.animated = 'true';
                animateCounter(priceElement, 49);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const pricingSection = document.querySelector('.pricing');
    if (pricingSection) {
        pricingObserver.observe(pricingSection);
    }
});

// Add loading states to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .pricing-cta');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Reset after 2 seconds (for demo purposes)
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.innerHTML = this.dataset.originalText || this.innerHTML;
                }, 2000);
            }
        });
        
        // Store original text
        button.dataset.originalText = button.innerHTML;
    });
});

// Add CSS for loading state
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    .cta-button.loading,
    .pricing-cta.loading {
        pointer-events: none;
        opacity: 0.8;
    }
    
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(loadingStyles);

// Form validation for any future forms
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function to show notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Performance optimization: Lazy load images if any are added later
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Marketing Slider Horizontal Slider (One by One)
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('marketing-slider');
    if (!slider) return;
    const slides = Array.from(slider.children);
    let current = 0;
    // Set up slider container for horizontal sliding
    slider.style.display = 'flex';
    slider.style.transition = 'transform 0.6s cubic-bezier(0.77,0,0.18,1)';
    slider.style.willChange = 'transform';
    // Set width for each slide
    slides.forEach(slide => {
        slide.style.minWidth = '100%';
        slide.style.flex = '0 0 100%';
        slide.style.maxWidth = '100%';
        slide.style.boxSizing = 'border-box';
    });
    function showSlide(idx) {
        slider.style.transform = `translateX(-${idx * 100}%)`;
    }
    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }
    showSlide(current);
    setInterval(nextSlide, 2500);
});

// Beautiful order placed alert every 9 seconds
document.addEventListener('DOMContentLoaded', function() {
    const names = [
        'Priya', 'Rahul', 'Anjali', 'Amit', 'Sneha', 'Vikas', 'Neha', 'Rohit', 'Pooja', 'Karan',
        'Simran', 'Arjun', 'Divya', 'Sahil', 'Ayesha', 'Manish', 'Riya', 'Nikhil', 'Megha', 'Saurabh'
    ];
    const cities = [
        'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow', 'Ahmedabad',
        'Chandigarh', 'Indore', 'Bhopal', 'Patna', 'Nagpur', 'Surat', 'Kanpur', 'Ludhiana', 'Agra', 'Nashik'
    ];
    function showOrderAlert() {
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const alert = document.createElement('div');
        alert.className = 'order-alert';
        alert.innerHTML = `<span class="order-emoji">🎉</span> <strong>${name} from ${city} enrolled!</strong>`;
        document.body.appendChild(alert);
        setTimeout(() => {
            alert.classList.add('hide');
            setTimeout(() => alert.remove(), 600);
        }, 3000);
    }
    setInterval(showOrderAlert, 9000);
});

// Add styles for the order alert
const orderAlertStyles = document.createElement('style');
orderAlertStyles.textContent = `
.order-alert {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) scale(1);
  background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.7rem 1.3rem;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(16,185,129,0.18), 0 1.5px 8px rgba(59,130,246,0.10);
  z-index: 99999;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  animation: orderPopIn 0.5s cubic-bezier(0.23,1,0.32,1);
  transition: transform 0.5s, opacity 0.5s;
  max-width: 90vw;
  min-width: 180px;
  width: auto;
}
.order-alert.hide {
  opacity: 0;
  transform: translateX(-50%) scale(0.95);
}
.order-emoji {
  font-size: 1.3rem;
  margin-right: 0.7rem;
}
@keyframes orderPopIn {
  0% { opacity: 0; transform: translateX(-50%) scale(0.7) translateY(30px); }
  60% { opacity: 1; transform: translateX(-50%) scale(1.08) translateY(-8px); }
  80% { transform: translateX(-50%) scale(0.97) translateY(2px); }
  100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
}
@media (max-width: 600px) {
  .order-alert {
    font-size: 0.92rem;
    padding: 0.5rem 0.9rem;
    min-width: 120px;
    max-width: 96vw;
  }
  .order-emoji {
    font-size: 1.1rem;
  }
}
`;
document.head.appendChild(orderAlertStyles);

// FAQ dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            // Accordion: close others
            document.querySelectorAll('.faq-item').forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function showTimerPopup() {
        const popup = document.createElement('div');
        popup.className = 'timer-popup';
        popup.innerHTML = '<span style="font-size:1.3rem;margin-right:0.7rem;">⏰</span> <strong>Hurry! Very little time left to grab this offer.</strong>';
        document.body.appendChild(popup);
        // Force reflow to enable animation
        void popup.offsetWidth;
        popup.style.animation = 'timerSlideIn 0.5s cubic-bezier(0.23,1,0.32,1)';
        setTimeout(() => {
            popup.classList.add('hide');
            setTimeout(() => popup.remove(), 600);
        }, 3000);
    }
    setInterval(showTimerPopup, 10000);
}); 