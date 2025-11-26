let tg = window.Telegram.WebApp;
let selectedMovie = null;

tg.expand();
tg.MainButton.setText("Получить описание");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.hide();

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('movie-btn') || 
        event.target.closest('.movie-btn')) {
        
        const button = event.target.classList.contains('movie-btn') 
            ? event.target 
            : event.target.closest('.movie-btn');
        
        document.querySelectorAll('.movie-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        button.classList.add('selected');
        selectedMovie = button.getAttribute('data-item');
        
        tg.MainButton.show();
    }
});

tg.MainButton.onClick(function() {
    if (selectedMovie) {
        tg.sendData(selectedMovie);
        tg.close();
    }
});