/*  // ИНИЦИАЛИЗАЦИЯ С ЭФФЕКТОМ "КАРТОЧКИ"
  const swiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    loop: true, // ключевой момент: ощущение "уходит вниз колоды"
    speed: 300,
    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true
    }
  });
   */
  
  
    let swiper = new Swiper('.swiper', {
      effect: "cards",
      grabCursor: true,
        cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: true
    }
      });


/* 
  // -------- ЛОГИКА ОПРЕДЕЛЕНИЯ НАПРАВЛЕНИЯ И ПРОВЕРКИ --------
  let startX = null;      // точка начала касания
  let lastSwipedEl = null; // ссылка на карточку, которую уводим

  // 1) фиксируем старт касания
  swiper.on('touchStart', (s, e) => {
    const t = e.touches ? e.touches[0] : e;
    startX = t.clientX;
  });

  // 2) когда анимация смены карточки завершилась — это «финал свайпа»
  swiper.on('slideChangeTransitionEnd', function () {
    // карточка, которая только что ушла (была сверху)
    const prevIdx = this.previousIndex;
    const prevSlide = this.slides[prevIdx];
    if (!prevSlide) return;

    // определяем направление:
    // если активный индекс стал больше предыдущего — листнули "вперёд" (обычно свайп влево),
    // если меньше — "назад" (обычно свайп вправо).
    const direction = (this.activeIndex > prevIdx) ? 'left' : 'right';

    // сверяем с правильным ответом карточки
    const correctAnswer = prevSlide.dataset.answer; // "left" | "right"
    const isCorrect = (direction === correctAnswer);

    // короткая визуальная подсветка на ушедшей карточке
    prevSlide.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
    setTimeout(() => {
      prevSlide.classList.remove('flash-correct', 'flash-wrong');
    }, 250);

    // здесь можно вести счёт, показывать тосты и т.п.
    console.log(
      `${prevSlide.querySelector('h2')?.textContent || 'Карточка'} — ${
        isCorrect ? 'верно' : 'неверно'
      } (свайп: ${direction}, надо: ${correctAnswer})`
    );

    // ВАЖНО: мы НИЧЕГО не удаляем — благодаря loop:true карточка окажется внизу колоды.
  });

  // (опционально) если хочешь более надёжно ловить направление
  // по фактическому жесту, добавь порог по dx:
  swiper.on('touchEnd', (s, e) => {
    if (startX == null) return;
    const t = e.changedTouches ? e.changedTouches[0] : e;
    const dx = t.clientX - startX;
    // можно сохранить направление жеста, если нужно для аналитики:
    s._lastGestureDir = dx > 0 ? 'right' : 'left';
    startX = null;
  }); */