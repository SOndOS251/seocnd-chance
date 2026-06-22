/* assets/js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Cart Functionality
    const cartBtns = document.querySelectorAll('.add-btn');
    const cartBadge = document.getElementById('cart-count');
    const toastEl = document.getElementById('liveToast');
    let cartCount = 0;

    if (cartBtns) {
        cartBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Increase Count
                cartCount++;
                if(cartBadge) cartBadge.innerText = cartCount;

                // Show Toast Notification (Bootstrap)
                if(toastEl) {
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }

                // Button Animation
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.classList.remove('btn-outline-success');
                this.classList.add('btn-success');
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-plus"></i>';
                    this.classList.add('btn-outline-success');
                    this.classList.remove('btn-success');
                }, 1500);
            });
        });
    }

    // 2. Forms Handling (Prevent refresh & Show Alert)
    const forms = document.querySelectorAll('.general-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check if it's a charity
            const isCharity = form.querySelector('#charityCheck')?.checked;
            
            if(isCharity) {
                alert("Thank you! We have prioritized your request as a Charity Partner. We will call you shortly.");
            } else {
                alert("Success! Your request has been submitted successfully.");
            }
            
            form.reset();
        });
    });

});