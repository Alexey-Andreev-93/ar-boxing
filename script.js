// Инициализация AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Плавная прокрутка для стрелки вниз
  const heroChevron = document.querySelector(".hero-foot a");
  if (heroChevron) {
    heroChevron.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector("#about");

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  }

// Исправленная фильтрация галереи
  const filterButtons = document.querySelectorAll('.filter-button');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Убираем активный класс со всех кнопок
      filterButtons.forEach(btn => btn.classList.remove('is-active'));
      
      // Добавляем активный класс к текущей кнопке
      this.classList.add('is-active');
      
      // Получаем значение фильтра
      const filterValue = this.getAttribute('data-filter');
      
      // Фильтруем элементы галереи
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          // Добавляем анимацию появления
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          // Анимация скрытия
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  const tabs = document.querySelectorAll('.achievements-tabs .tabs li');
  // Добавляем обработчик клика на вкладки
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Убираем активный класс со всех вкладок
      tabs.forEach(t => t.classList.remove('is-active'));
      
      // Добавляем активный класс к clicked вкладке
      tab.classList.add('is-active');
      
      // Скрываем все содержимое вкладок
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('is-active');
      });
      
      // Показываем соответствующее содержимое
      const tabName = tab.getAttribute('data-tab');
      document.getElementById(tabName).classList.add('is-active');
    });
  });
})


// Активация бургер-меню
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Плавная прокрутка
  document.querySelectorAll(".navbar-item, .button").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        this.getAttribute("href") &&
        this.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });

          // Закрываем меню на мобильных устройствах
          document
            .querySelector(".navbar-burger")
            .classList.remove("is-active");
          document
            .getElementById("navbarBasicExample")
            .classList.remove("is-active");
        }
      }
    });
  });
});
