let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText("Получить описание фильма");
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.hide();

let selectedMovie = null;

function selectMovie(movieId, button) {
    document.querySelectorAll('.movie-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    button.classList.add('selected');
    selectedMovie = movieId;

    tg.MainButton.show();
}

document.getElementById('hachiko-btn').addEventListener('click', function() {
    selectMovie('1', this);
});

document.getElementById('titanic-btn').addEventListener('click', function() {
    selectMovie('2', this);
});

tg.MainButton.onClick(function() {
    if (selectedMovie) {
        console.log("Отправляем данные:", selectedMovie);
        tg.sendData(selectedMovie);
    } else {
        alert("Сначала выберите фильм!");
    }
});

console.log("Web App initialized successfully");