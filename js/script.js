document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');

    if (burgerBtn && mobileMenu) {
        const setMenu = (open) => {
            mobileMenu.classList.toggle('active', open);
            burgerBtn.setAttribute('aria-expanded', open);
        };

        burgerBtn.addEventListener('click', () => {
            setMenu(!mobileMenu.classList.contains('active'));
        });

        if (menuClose) {
            menuClose.addEventListener('click', () => setMenu(false));
        }

        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                setMenu(false);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMenu(false);
        });
    }

    const filterBtns = document.querySelectorAll('.catalog__filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const group = this.closest('.catalog__filter-group');
            group.querySelectorAll('.catalog__filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('.btn--submit');
            const originalText = btn.textContent;

            btn.textContent = 'Отправка...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            setTimeout(() => {
                alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
                this.reset();
                btn.textContent = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});