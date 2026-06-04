# 🚀 Инструкция по деплою на Vercel

## Шаг 1 — Создать репозиторий на GitHub

```bash
git init
git add .
git commit -m "Initial commit: Гризонт Next.js + SEO"
git branch -M main
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/gorizont-spb.git
git push -u origin main
```

## Шаг 2 — Задеплоить на Vercel

1. Зайти: https://vercel.com
2. «New Project» → импортировать GitHub репозиторий
3. Framework Preset: Next.js (автоопределяется)
4. Deploy!

## Шаг 3 — Подключить свой домен

1. В Vercel: Settings → Domains → Add Domain
2. Ввести: gorizont-spb.ru (или ваш домен)
3. Добавить DNS-записи у регистратора домена:
   - A-запись: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com

## Шаг 4 — Переменные окружения (если нужно)

В Vercel → Settings → Environment Variables:
```
NEXT_PUBLIC_YANDEX_METRIKA_ID = 12345678
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

## Шаг 5 — После деплоя

1. Проверить: https://gorizont-spb.ru
2. Зарегистрировать в Яндекс.Вебмастер
3. Зарегистрировать в Google Search Console
4. Отправить sitemap: https://gorizont-spb.ru/sitemap.xml
5. Проверить скорость: https://pagespeed.web.dev/?url=https://gorizont-spb.ru

## Автодеплой

После настройки каждый `git push` автоматически деплоит новую версию на Vercel.
