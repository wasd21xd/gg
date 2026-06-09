import Nav from "./components/Nav";
import RevealWrapper from "./components/RevealWrapper";
import FaqItem from "./components/FaqItem";
import CTAForm from "./components/CTAForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бесплатный подбор квартир в Санкт-Петербурге | Горизонт",
  description:
    "Подбираем квартиры в новостройках СПб бесплатно. Ипотека по паспорту, 300+ ЖК, сопровождение под ключ. Официальные партнёры застройщиков с 2017 года.",
};

// ── Structured Data (JSON-LD) ─────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Горизонт — Центр недвижимости",
  url: "https://gorizont-spb.ru",
  logo: "https://gorizont-spb.ru/logo.png",
  image: "https://gorizont-spb.ru/og-image.jpg",
  description:
    "Бесплатный подбор новостроек в Санкт-Петербурге. Ипотека по паспорту, 300+ ЖК, сопровождение сделки.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Санкт-Петербург",
    addressRegion: "Санкт-Петербург",
    addressCountry: "RU",
  },
  telephone: "+7-812-425-65-65",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  foundingDate: "2017",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
  areaServed: { "@type": "City", name: "Санкт-Петербург" },
  priceRange: "Бесплатно",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1500",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://wa.me/78124256565",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Почему вы работаете бесплатно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Мы являемся официальными партнёрами большинства застройщиков и банков. Наши услуги оплачивают застройщики, как своему менеджеру из отдела продаж. Это позволяет вам получить объективную оценку всего рынка без скрытых наценок.",
      },
    },
    {
      "@type": "Question",
      name: "Одобряете ли ипотеку без официального дохода?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Для одобрения нужны только паспорт и СНИЛС. Мы работаем с более чем 20 банками и подбираем наиболее выгодные условия. Услуга бесплатна.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете с маткапиталом и субсидиями?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, работаем со всеми видами господдержки: материнский капитал, семейная ипотека, IT-ипотека, военная ипотека. Доступно 54 вида ипотечных программ.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли купить квартиру дистанционно?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Организуем полностью дистанционные сделки: онлайн-показы, электронное подписание, дистанционная регистрация.",
      },
    },
    {
      "@type": "Question",
      name: "С какими застройщиками вы работаете?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Официальные партнёры большинства крупных застройщиков СПб — в базе более 300 ЖК. Цены у нас не выше, чем в офисе застройщика.",
      },
    },
    {
      "@type": "Question",
      name: "Что включает приёмка квартиры?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Организуем профессионального приёмщика: проверит качество строительства, составит перечень замечаний для застройщика. Это позволяет добиться устранения всех недостатков до заселения.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://gorizont-spb.ru" },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────
const services = [
  { num: "01", title: "Подбор квартиры", text: "Отберём из более 300 ЖК варианты под ваш запрос по локации, цене и планировке. Рассчитаем разные способы оплаты, учтём все акции застройщиков." },
  { num: "02", title: "Показы объектов", text: "Организуем экскурсии в понравившиеся ЖК. Вы оцените темпы строительства, увидите шоурумы и готовые квартиры в сданных домах." },
  { num: "03", title: "Ипотека по паспорту", text: "Одобрим ипотеку по льготным ставкам без подтверждения дохода. Только паспорт и СНИЛС — этого достаточно." },
  { num: "04", title: "Индивидуальные скидки", text: "Согласуем максимально возможные скидки у застройщика. Организуем дистанционную сделку, если вы в другом регионе." },
  { num: "05", title: "Сопровождение сделки", text: "Ведём вас не только на сделке — организуем профессионального приёмщика при получении ключей. Всё чисто и спокойно." },
  { num: "06", title: "Программа лояльности", text: "Получайте подарки от нашей компании после сделки. Участвуйте в ежегодном розыгрыше и рекомендуйте нас друзьям." },
];

const steps = [
  { num: "01", title: "Знакомство и брифинг", text: "Проводим бесплатную консультацию: выясняем ваши задачи, бюджет, предпочтения по локации и типу жилья. Назначаем персонального менеджера." },
  { num: "02", title: "Подбор вариантов", text: "Анализируем рынок из 300+ объектов и готовим подборку под ваш запрос. Рассчитываем варианты оплаты, учитываем акции и скидки застройщиков." },
  { num: "03", title: "Показы и выбор", text: "Организуем экскурсии на объекты в удобное время. Помогаем трезво оценить каждый вариант, не упустить важные детали." },
  { num: "04", title: "Ипотека и документы", text: "Подаём заявку в банки, добиваемся лучших условий. Для одобрения нужен только паспорт и СНИЛС — больше ничего." },
  { num: "05", title: "Сделка и ключи", text: "Сопровождаем на сделке, проверяем все документы. Организуем профессиональную приёмку квартиры при получении ключей." },
];

const advantages = [
  { icon: "", title: "Безопасность", text: "Работаем только с проверенными застройщиками. Все объекты — с надлежащей документацией." },
  { icon: "", title: "Скорость", text: "Первая подборка в день обращения. Ипотека одобряется за 1–2 дня с минимальным пакетом документов." },
  { icon: "", title: "Экспертиза", text: "7 лет на рынке СПб. Знаем репутацию каждого застройщика, особенности районов и реальные темпы строительства." },
  { icon: "", title: "Честность", text: "Скажем, если объект не стоит своих денег. Ваш результат — наша репутация. Мы работаем на рекомендациях." },
];

const reviews = [
  { text: "Купили квартиру в ЖК в Приморском районе. Менеджер провёл нас от А до Я — подбор, ипотека, сделка. Никакого стресса. Ребята реально знают своё дело.", name: "Алексей и Марина К.", detail: "Купили студию, 2023 г." },
  { text: "Одобрили ипотеку только по паспорту и СНИЛС, как и обещали. Ставку сделали лучше, чем если бы я сам обращался в банк. Очень доволен результатом.", name: "Дмитрий В.", detail: "Ипотека по паспорту, 2024 г." },
  { text: "Переезжала из Москвы — вся сделка дистанционно. Не верила, что такое возможно. Через два месяца держала ключи в руках. Горизонт — лучший выбор для иногородних.", name: "Ольга П.", detail: "Дистанционная сделка, 2024 г." },
];

const faqs = [
  { question: "Почему вы работаете бесплатно?", answer: "Мы являемся официальными партнёрами большинства застройщиков и банков. Наши услуги оплачивают застройщики, как своему менеджеру из отдела продаж. Это позволяет вам получить объективную оценку всего рынка без скрытых наценок." },
  { question: "Одобряете ли ипотеку без официального дохода?", answer: "Да. Для одобрения нужны только паспорт и СНИЛС. Мы работаем с более чем 20 банками и подбираем наиболее выгодные условия. Услуга бесплатна." },
  { question: "Работаете с маткапиталом и субсидиями?", answer: "Да, работаем со всеми видами господдержки: материнский капитал, семейная ипотека, IT-ипотека, военная ипотека, субсидированная застройщиком. Доступно 54 вида ипотечных программ." },
  { question: "Можно ли купить квартиру дистанционно?", answer: "Да. Организуем полностью дистанционные сделки: онлайн-показы, электронное подписание документов, дистанционная регистрация." },
  { question: "С какими застройщиками вы работаете?", answer: "Официальные партнёры большинства крупных застройщиков СПб — в базе более 300 ЖК. Цены у нас не выше, чем в офисе застройщика." },
  { question: "Что включает приёмка квартиры?", answer: "Организуем профессионального приёмщика: проверит качество строительства, составит перечень замечаний. Это позволяет добиться устранения всех недостатков до заселения." },
];

const marqueeItems = ["Бесплатный подбор", "Ипотека по паспорту", "300+ ЖК в базе", "Официальные партнёры застройщиков", "7 лет на рынке СПб", "Сделка под ключ"];

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        aria-label="Главный экран"
        className="min-h-screen flex items-end px-6 md:px-[60px] pb-20 relative overflow-hidden bg-[#0a0a0a]"
      >
        <div className="absolute top-1/2 left-1/2 font-serif font-black text-white/[0.04] whitespace-nowrap pointer-events-none tracking-[-0.02em] animate-float-bg select-none" style={{ fontSize: "clamp(120px,18vw,280px)", transform: "translate(-50%,-50%)" }} aria-hidden="true">
          ГОРИЗОНТ
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] w-full relative z-10 items-end">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#b0ada5] mb-6 flex items-center gap-3 before:content-[''] before:w-8 before:h-px before:bg-[#6b6860]">
              Санкт-Петербург — с 2017 года
            </p>
            <h1 className="font-serif font-bold text-white leading-[1.0] tracking-[-0.02em] mb-8" style={{ fontSize: "clamp(48px,5.5vw,88px)" }}>
              Ваша квартира<br />начинается здесь.<br />
              <em className="font-serif italic text-[#b0ada5]">С нами — бесплатно.</em>
            </h1>
            <p className="text-[15px] text-[#b0ada5] max-w-[400px] leading-[1.8] mb-12">
              Профессиональный подбор новостроек, одобрение ипотеки и сопровождение сделки от первого звонка до получения ключей.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#cta" className="bg-white text-[#0a0a0a] px-10 py-4 text-[13px] tracking-[0.08em] uppercase font-semibold no-underline hover:bg-[#e8e6e0] hover:-translate-y-0.5 transition-all">
                Начать поиск
              </a>
              <a href="#how" className="border border-white/30 text-white px-10 py-4 text-[13px] tracking-[0.08em] uppercase no-underline hover:border-white hover:-translate-y-0.5 transition-all">
                Как это работает
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end gap-8">
            <div className="flex gap-12">
              {[{ num: "7+", label: "Лет на рынке" }, { num: "1500+", label: "Семей с ключами" }, { num: "0₽", label: "Стоимость услуг" }].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-serif text-5xl font-bold text-white leading-none block">{s.num}</span>
                  <span className="text-[11px] text-[#6b6860] tracking-[0.1em] uppercase mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 text-[#6b6860] text-[11px] tracking-[0.15em] uppercase" aria-hidden="true">
              <span className="w-px animate-scroll-line bg-[#302e2b]" style={{ height: 48 }} />
              Листать
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-[#0a0a0a] text-white py-5 overflow-hidden border-t border-[#302e2b] border-b border-b-[#302e2b]" aria-hidden="true">
        <div className="flex animate-marquee gap-0 w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-[13px] tracking-[0.15em] uppercase text-[#b0ada5] px-10 after:content-['◆'] after:text-[8px] after:text-[#302e2b] after:ml-10">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" aria-labelledby="about-title" className="py-[120px] px-6 md:px-[60px] bg-[#f5f4f0]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">О компании</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] mt-[72px] items-start">
          <RevealWrapper>
            <div className="relative">
             <div className="relative w-full aspect-[3/4] overflow-hidden">

  <Image
  src="/comand1.jpg"
  alt="Команда Горизонт"
  fill
  className="object-contain"
  priority
/>

</div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#0a0a0a] text-white p-5 md:p-6">
                <h3 className="font-serif text-lg mb-1">Горизонт — это люди</h3>
                <p className="text-[12px] text-[#b0ada5] tracking-[0.08em] uppercase">Команда экспертов рынка недвижимости</p>
              </div>
              <div className="absolute top-6 -right-6 bg-[#f5f4f0] border border-[#e8e6e0] py-3 px-5 text-[12px] tracking-[0.08em] uppercase text-[#6b6860] hidden md:block" style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>
                Центр недвижимости
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper className="pt-6">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">Добро пожаловать</p>
            <h2 id="about-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-8" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
              Мы помогаем<br />находить дом.
            </h2>
            <p className="text-[19px] font-light leading-[1.7] text-[#302e2b] mb-8 border-l-2 border-[#0a0a0a] pl-6">
              Горизонт — это команда экспертов, которые за вас отфильтруют весь рынок, выберут лучшее и проведут за руку по всем этапам покупки.
            </p>
            <p className="text-[15px] text-[#6b6860] leading-[1.85]">
              Мы официальные партнёры большинства застройщиков Санкт-Петербурга. Уже более семи лет помогаем купить квартиру мечты, одобрить ипотеку и выгодно инвестировать в новостройки. Наши услуги бесплатны для клиентов — нас оплачивают застройщики как своему отделу продаж.
            </p>
            <div className="grid grid-cols-2 gap-px bg-[#e8e6e0] mt-12 border border-[#e8e6e0]">
              {[{ num: "300+", label: "Жилых комплексов в базе" }, { num: "1500+", label: "Семей с ключами" }, { num: "54", label: "Вида ипотечных программ" }, { num: "0₽", label: "Стоимость услуг для вас" }].map((v) => (
                <div key={v.label} className="bg-[#f5f4f0] p-6">
                  <div className="font-serif text-4xl font-bold leading-none mb-1">{v.num}</div>
                  <div className="text-[12px] text-[#6b6860] tracking-[0.05em]">{v.label}</div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" aria-labelledby="services-title" className="py-[120px] px-6 md:px-[60px] bg-[#0a0a0a] text-white">
        <div className="flex justify-between items-end mb-[72px] flex-wrap gap-6">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#302e2b]">Что мы делаем</p>
            <h2 id="services-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
              Полный<br />сервис.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] text-[#b0ada5] leading-[1.8]">
            От первого разговора до получения ключей — берём на себя каждый шаг, чтобы покупка стала удовольствием, а не стрессом.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#302e2b]">
          {services.map((s) => (
            <RevealWrapper key={s.num}>
              <article className="bg-[#0a0a0a] p-12 md:p-[48px_36px] relative overflow-hidden group hover:bg-[#302e2b] transition-colors duration-300 h-full">
                <div className="font-serif text-[64px] font-bold text-white/[0.06] leading-none mb-6 group-hover:text-white/[0.12] transition-colors">{s.num}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 relative z-10">{s.title}</h3>
                <p className="text-[14px] text-[#b0ada5] leading-[1.75] relative z-10">{s.text}</p>
                <span className="absolute bottom-6 right-8 text-[#302e2b] text-2xl group-hover:text-[#6b6860] transition-colors" aria-hidden="true">↗</span>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── HOW ── */}
      <section id="how" aria-labelledby="how-title" className="py-[120px] px-6 md:px-[60px] bg-[#f5f4f0]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">Процесс работы</p>
        <h2 id="how-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-[72px]" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
          Как мы<br />работаем.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
          <div>
            {steps.map((step, i) => (
              <RevealWrapper key={step.num}>
                <div className={`flex gap-6 py-8 border-b border-[#e8e6e0] group ${i === 0 ? "pt-0" : ""}`}>
                  <div className="font-serif text-5xl font-bold text-[#e8e6e0] leading-none min-w-[60px] flex-shrink-0 group-hover:text-[#0a0a0a] transition-colors">{step.num}</div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#6b6860] leading-[1.75]">{step.text}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper>
            <div className="bg-[#0a0a0a] text-white p-12 h-fit">
              <h3 className="font-serif text-2xl font-bold mb-6">Почему это бесплатно?</h3>
              <p className="text-[#b0ada5] text-[15px] leading-[1.8] mb-8">
                Мы — официальные партнёры большинства застройщиков. Они платят нам за привлечение покупателей так же, как платят своему отделу продаж. Это позволяет вам получить объективную оценку всего рынка.
              </p>
              <ul className="space-y-4">
                {["Вы платите ровно столько же, сколько в офисе застройщика", "Мы не заинтересованы продать вам конкретный объект", "Наша цель — найти лучшее именно для вас", "7 лет репутации и 1500+ довольных клиентов"].map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] text-[#b0ada5]">
                    <span className="text-white mt-1 flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="inline-block mt-8 border border-white/30 text-white px-8 py-4 text-[13px] tracking-[0.06em] uppercase hover:border-white transition-colors">
                Получить консультацию
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── WHY ── */}
      <section id="why" aria-labelledby="why-title" className="py-[120px] px-6 md:px-[60px] bg-[#f5f4f0]">
        <RevealWrapper>
          <div className="mb-[72px]">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">Преимущества</p>
            <h2 id="why-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
              Почему<br />выбирают нас.
            </h2>
            <p className="text-[#6b6860] max-w-xl">Мы собрали всё, что важно при покупке недвижимости, в одном месте. Никаких лишних шагов — только результат.</p>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8e6e0]">
          {advantages.map((a) => (
            <RevealWrapper key={a.title}>
              <article className="bg-[#e8e6e0] hover:bg-[#f5f4f0] transition-colors p-9 md:p-[36px_28px]">
                <div className="text-3xl mb-5" role="img" aria-label={a.title}>{a.icon}</div>
                <h3 className="font-serif text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-[13px] text-[#6b6860] leading-[1.75]">{a.text}</p>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section id="founders" aria-labelledby="founders-title" className="py-[120px] px-6 md:px-[60px] bg-[#f5f4f0]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">Основатели</p>
        <RevealWrapper>
          <h2 id="founders-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-[72px]" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
            Люди за<br />компанией.
          </h2>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ role: "Основатели", quote: "Мы создали эту компанию, чтобы помочь большому количеству людей найти место, которое они будут называть домом." },
            { role: "Наша команда — 15 экспертов для вас", quote: "Каждый специалист нашей команды — эксперт своего направления. Вместе мы закрыли более 1500 сделок и продолжаем расти." }].map((f, i) => (
            <RevealWrapper key={i}>
              <article className="border border-[#e8e6e0] p-8">
                <div className="w-full aspect-square bg-[#e8e6e0] flex items-center justify-center text-[#b0ada5] text-sm mb-6">Фото</div>
                <p className="text-[12px] text-[#6b6860] tracking-[0.08em] uppercase mb-6">{f.role}</p>
                <p className="text-[15px] text-[#6b6860] leading-[1.8] italic">&ldquo;{f.quote}&rdquo;</p>
              </article>
            </RevealWrapper>
          ))}
          <RevealWrapper>
            <div className="bg-[#0a0a0a] text-white p-8 flex flex-col justify-between">
              <div>
                <div className="font-serif text-6xl font-bold text-white/10 mb-4" aria-hidden="true">7</div>
                <h3 className="font-serif text-xl font-bold mb-4">История, которая началась с собственной покупки</h3>
                <p className="text-[14px] text-[#b0ada5] leading-[1.8]">
                  Несколько лет мы сами шли к своей квартире. Было страшно, волнительно и непонятно. Но когда попали в правильные руки — мечта стала реальностью. Теперь мы собрали целую команду, которая за вас отфильтрует весь рынок, выберет лучшие предложения и проведёт по всем этапам покупки. И, конечно, это бесплатно.
                </p>
              </div>
              <a href="#cta" className="mt-8 inline-block border border-white/30 text-white px-6 py-3 text-[13px] tracking-[0.06em] uppercase hover:border-white transition-colors text-center">
                Начать поиск
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" aria-labelledby="reviews-title" className="py-[120px] px-6 md:px-[60px] bg-[#0a0a0a] text-white">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#302e2b]">Отзывы клиентов</p>
        <h2 id="reviews-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-[72px]" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
          Что говорят<br />наши клиенты.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#302e2b]" itemScope itemType="https://schema.org/Organization">
          {reviews.map((r) => (
            <RevealWrapper key={r.name}>
              <article
                className="bg-[#0a0a0a] p-10 md:p-12 flex flex-col gap-6"
                itemScope itemProp="review" itemType="https://schema.org/Review"
              >
                <span className="text-[#302e2b] font-serif text-6xl leading-none" aria-hidden="true">&ldquo;</span>
                <p className="text-[15px] text-[#b0ada5] leading-[1.8] flex-1" itemProp="reviewBody">{r.text}</p>
                <div itemScope itemProp="author" itemType="https://schema.org/Person">
                  <div className="font-serif font-bold" itemProp="name">{r.name}</div>
                  <div className="text-[12px] text-[#6b6860] tracking-[0.08em] uppercase mt-1">{r.detail}</div>
                  <meta itemProp="reviewRating" content="5" />
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" aria-labelledby="faq-title" className="py-[120px] px-6 md:px-[60px] bg-[#f5f4f0]" itemScope itemType="https://schema.org/FAQPage">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-[80px]">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#6b6860] mb-4 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-[#b0ada5]">Вопросы и ответы</p>
            <h2 id="faq-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
              FAQ
            </h2>
            <p className="text-[15px] text-[#6b6860] leading-[1.8]">
              Отвечаем на самые частые вопросы о нашей работе и процессе покупки недвижимости.
            </p>
          </div>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" aria-labelledby="cta-title" className="py-[120px] px-6 md:px-[60px] bg-[#0a0a0a] text-white text-center">
        <RevealWrapper>
          <h2 id="cta-title" className="font-serif font-bold leading-[1.05] tracking-[-0.02em] mb-6" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
            Ваша квартира<br />ждёт. <em className="italic text-[#b0ada5]">Найдём вместе.</em>
          </h2>
          <p className="text-[15px] text-[#b0ada5] max-w-xl mx-auto leading-[1.8] mb-2">
            Оставьте номер телефона — мы перезвоним в течение 15 минут и начнём подбор вариантов сразу. Бесплатно и без обязательств.
          </p>
          <CTAForm />
          <p className="text-[12px] text-[#302e2b] mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16 text-[#6b6860]">
            <a href="tel:+78124256565" className="text-[15px] text-[#b0ada5] hover:text-white transition-colors no-underline">
              📞 +7 (812) 425-65-65
            </a>
            <a href="https://wa.me/78124256565" className="text-[15px] text-[#b0ada5] hover:text-white transition-colors no-underline" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
            <span className="text-[15px]">📍 Санкт-Петербург</span>
          </div>
        </RevealWrapper>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-[#302e2b] px-6 md:px-[60px] py-12" role="contentinfo">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-serif text-xl font-bold tracking-widest text-white">ГОРИЗОНТ</div>
            <div className="text-[12px] text-[#6b6860] tracking-[0.08em] uppercase mt-1">Центр недвижимости</div>
          </div>
          <nav aria-label="Нижняя навигация">
            <ul className="flex flex-wrap gap-6 list-none">
              {[["#about","О нас"],["#services","Услуги"],["#founders","Команда"],["#reviews","Отзывы"],["#faq","FAQ"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[13px] text-[#6b6860] hover:text-white tracking-[0.05em] no-underline transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-[12px] text-[#302e2b]">© 2024 Горизонт. Все права защищены.</div>
        </div>
      </footer>
    </>
  );
}
