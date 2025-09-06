// pricing.js - Данные и логика для секции цен

const pricingData = {
  adults: [
    {
      title: "Разовое занятие",
      price: "1 500 ₽",
      period: "занятие",
      popular: false,
      features: [
        "Пробное занятие",
        "120 минут тренировки",
        "Все необходимое оборудование",
      ],
    },
    {
      title: "Месячный абонемент",
      price: "8 000 ₽",
      period: "месяц",
      popular: true,
      savings: "Экономия 2 000 ₽",
      features: [
        "8 занятий в месяц",
        "Персональная программа",
        "Прогресс-отслеживание",
        "Скидка на экипировку 10%",
      ],
    },
    {
      title: "Годовой абонемент",
      price: "75 000 ₽",
      period: "год",
      popular: false,
      savings: "Экономия 21 000 ₽",
      features: [
        "96 занятий в год",
        "Персональный шкафчик",
        "Скидка 15% на экипировку",
        "Бесплатная фитнес-диагностика",
      ],
    },
  ],
  children: [
    {
      title: "Разовое занятие",
      price: "1 200 ₽",
      period: "занятие",
      popular: false,
      features: [
        "Пробное занятие",
        "90 минут тренировки",
        "Все необходимое оборудование",
        "Инструктаж по безопасности",
      ],
    },
    {
      title: "Месячный абонемент",
      price: "6 000 ₽",
      period: "месяц",
      popular: true,
      savings: "Экономия 1 800 ₽",
      features: [
        "8 занятий в месяц",
        "Персональная программа",
        "Прогресс-отслеживание",
        "Сертификат об участии",
      ],
    },
    {
      title: "Годовой абонемент",
      price: "60 000 ₽",
      period: "год",
      popular: false,
      savings: "Экономия 16 800 ₽",
      features: [
        "96 занятий в год",
        "Персональный шкафчик",
        "Фирменная форма",
        "Участие в турнирах",
      ],
    },
  ],
  individual: [
    {
      title: "Индивидуальное занятие",
      price: "2 500 ₽",
      period: "занятие",
      popular: false,
      features: [
        "Персональный тренер",
        "120 минут тренировки",
        "Индивидуальная программа",
        "Гибкое расписание",
      ],
    },
    {
      title: "Пакет 10 занятий",
      price: "20 000 ₽",
      period: "пакет",
      popular: true,
      savings: "Экономия 5 000 ₽",
      features: [
        "10 индивидуальных занятий",
        "Персональная программа",
        "Видеоанализ техники",
        "Nutrition консультация",
      ],
    },
    {
      title: "Персональный коучинг",
      price: "45 000 ₽",
      period: "месяц",
      popular: false,
      savings: "Экономия 15 000 ₽",
      features: [
        "Неограниченные занятия",
        "Персональный план развития",
        "Ежедневная поддержка",
        "Full сопровождение",
      ],
    },
  ],
  family: [
    {
      title: "Семейное разовое",
      price: "2 500 ₽",
      period: "занятие",
      popular: false,
      features: [
        "2 члена семьи",
        "120 минут тренировки",
        "Совместные занятия",
        "Семейная скидка",
      ],
    },
    {
      title: "Семейный месячный",
      price: "12 000 ₽",
      period: "месяц",
      popular: true,
      savings: "Экономия 3 600 ₽",
      features: [
        "2 члена семьи - 8 занятий",
        "Совместные тренировки",
        "Семейные турниры",
        "Фотосессия",
      ],
    },
    {
      title: "Семейный годовой",
      price: "120 000 ₽",
      period: "год",
      popular: false,
      savings: "Экономия 36 000 ₽",
      features: [
        "2 члена семьи - 96 занятий",
        "Персональные шкафчики",
        "Эксклюзивные мероприятия",
        "Семейный абонемент",
      ],
    },
  ],
};

// Функция для генерации HTML карточки тарифа
function createPricingCard(tariff, isPopular = false) {
  return `
    <div class="column is-one-third" data-aos="fade-up" data-aos-delay="${
      300 + Math.random() * 200
    }">
      <div class="pricing-card ${isPopular ? "pricing-card--popular" : ""}">
        ${isPopular ? '<div class="pricing-card__badge">ВЫГОДНО</div>' : ""}
        <div class="pricing-card__header">
          <h3 class="title is-3">${tariff.title}</h3>
          <div class="pricing-card__price">
            <span class="pricing-card__amount">${tariff.price}</span>
            <span class="pricing-card__duration">/${tariff.period}</span>
          </div>
          ${
            tariff.savings
              ? `<p class="pricing-card__savings">${tariff.savings}</p>`
              : ""
          }
        </div>

        <div class="pricing-card__features">
          ${tariff.features
            .map(
              (feature) => `
            <div class="pricing-card__feature">
              <span class="icon has-text-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </span>
              <span>${feature}</span>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="pricing-card__action">
          <a class="button ${
            isPopular ? "is-danger" : "is-outlined"
          } is-fullwidth" href="#contacts">
            ${isPopular ? "Выбрать тариф" : "Записаться"}
          </a>
        </div>
      </div>
    </div>
  `;
}

// Функция для отображения контента таба
function showPricingTab(tabId) {
  const contentContainer = document.getElementById("pricing-content");
  const tariffs = pricingData[tabId];

  if (!tariffs || !contentContainer) return;

  // Показываем контейнер (на случай если был hidden для SEO)
  contentContainer.style.display = "block";

  contentContainer.innerHTML = `
    <div class="tab-pane is-active" id="${tabId}-tab">
      <div class="columns is-centered is-variable is-5">
        ${tariffs
          .map((tariff, index) => createPricingCard(tariff, tariff.popular))
          .join("")}
      </div>
    </div>
  `;

  // Инициализируем AOS для новых элементов
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

// Инициализация табов цен
function initPricingTabs() {
  const tabLinks = document.querySelectorAll("#pricing-tabs li");

  if (tabLinks.length === 0) return;

  // Показываем первый таб по умолчанию
  showPricingTab("adults");

  // Обработчики кликов на табы
  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabLinks.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const tabId = tab.getAttribute("data-tab");
      showPricingTab(tabId);
    });
  });
}

window.initPricingTabs = initPricingTabs;
