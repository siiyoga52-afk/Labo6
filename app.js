function toggleDescription(movieId) {
    const description = document.getElementById(movieId);
    const button = description.previousElementSibling.querySelector('.show-btn');
    
    // Закрываем все остальные описания
    const allDescriptions = document.querySelectorAll('.description');
    const allButtons = document.querySelectorAll('.show-btn');
    
    allDescriptions.forEach(desc => {
        if (desc.id !== movieId) {
            desc.classList.remove('show');
        }
    });
    
    // Обновляем текст всех кнопок
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.textContent = 'Показать описание';
        }
    });
    
    // Переключаем текущее описание
    if (description.classList.contains('show')) {
        description.classList.remove('show');
        button.textContent = 'Показать описание';
    } else {
        description.classList.add('show');
        button.textContent = 'Скрыть описание';
    }
}

// Добавляем обработчики для анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем плавное появление карточек
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Добавляем возможность закрытия по клику вне области
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.movie-card')) {
            const allDescriptions = document.querySelectorAll('.description');
            const allButtons = document.querySelectorAll('.show-btn');
            
            allDescriptions.forEach(desc => {
                desc.classList.remove('show');
            });
            
            allButtons.forEach(btn => {
                btn.textContent = 'Показать описание';
            });
        }
    });
});

// Добавляем красивый эффект для кнопок при наведении
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
});