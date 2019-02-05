 // Проверяем готовность єлемента через ф-ю ready
 $(function() {
    //отлавливаем собітие при нажатии на кнопку
    $(this).keydown(function (e) { 
      // Создаем переменную, в которую помещаем div с подходящим data-key
      var key = $(this).find('.key[data-key='+event.which+']');
      // Создаем переменную, которой помещаем тег с нужным data-key, стартовая позиция аудио 0 ([0])
      var audio = $(this).find('audio[data-key='+event.which+']')[0];
      // Присваиваем key класс, чтобы подстветить кнопку
      key.toggleClass('playing');
       // проверяем существует ли audio тег с таким data-key
      if (!audio) return;
      //Запускаем аудио
      audio.play();
      //Сбрасываем таймер звуковой дорожки снова на 0
      audio.currentTime = 0; 
    })

    // Отслеживаем событие, когда пользователь отпускает клавишу
    $(this).keyup(function (e) { 
      // Снова cоздаем переменную, в которую помещаем div с подходящим data-key
      var key = $(this).find('.key[data-key='+event.which+']');
      // Убираем класс, который подствечивает кнопку
      key.toggleClass('playing');
    })
  });