document.addEventListener('DOMContentLoaded', function () {
    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answer = faqItem.querySelector('.faq-answer');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    item.querySelector('.faq-answer').hidden = true;
                }
            });

            // Toggle current FAQ
            const newState = !isExpanded;
            faqItem.classList.toggle('active', newState);
            button.setAttribute('aria-expanded', String(newState));
            answer.hidden = !newState;
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Language selector functionality
    const languageDropdown = document.querySelector('.language-dropdown');
    if (languageDropdown) {
        languageDropdown.addEventListener('change', function () {
            // Add language change logic here
            console.log('Language changed to:', this.value);
        });
    }

    // Email form validation
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.validity.valid) {
                // Form is valid, proceed with submission
                console.log('Email submitted:', emailInput.value);
                // Add your form submission logic here
            } else {
                // Show error message
                emailInput.setCustomValidity('Please enter a valid email address');
                emailInput.reportValidity();
            }
        });
    }
});