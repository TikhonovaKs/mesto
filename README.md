# Проект: Место

## Обзор
* Интро
* Вёрстка
* Описание
* Ссылка на GitHub Pages

### Интро

Учебный проект "Место", адаптивная вёрстка.
Построение верстки согласно макету в Figma;
При построение адаптивной верстки я отталкивалась от размеров экрана: 320, 768, 1024 и 1280 пикселей (согласно макету).
Сайт должен отображаться корректно в Firefox, Google Chrome или Yandex Browser;

## Вёрстка

### Основные требования
* Внешний вид сайта соответствует макету: https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
* Именования классов по правилам БЭМ и выстраивание файловой структуры проекта по правилам Nested БЭМ;
* Вёрстка адаптивная: Минимальная ширина: 320px (одна карточка в ряд). Максимальная: 1280px (три карточки в ряд).

### Попап редактирования профиля
Диалоговое окно из макета — «Редактировать профиль» с полями: «Имя» и «О себе», а также с кнопкой «Сохранить».
Открытие попапа происходит при помощи модификатора popup_opened.

### Переполнение содержимого в блоках
Переполнение блоков с появляющимся многоточием в конце реализовано при помощи следующего набора свойст CSS:
.block {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

## JavaScript

### Открытие и закрытие попапа
Попап открыватся по нажатию кнопки «Редактировать», и закрыватся — при клике по крестику в правом верхнем углу.

### Поля формы
При открытии формы поля «Имя» и «О себе» заполнены теми значениями, которые отображаются на странице. Если пользователь закрывает попап нажав на крестик, то введённые значения не сохраняются.

### Редактирование имени и информации о себе
Попап умеет редактировать соответствующие поля страницы. После внесения изменений и нажатия кнопки «Сохранить» информация на странице обновится, а попап автоматически закрывается.

## Git
Для реализации небольших единиц функциональности создавались "функциональные" ветки Features.
Для быстрых исправлений создавались ветки Hotfixes.
Все коммиты бфли смержены в ветку develop, протестированы и исправлены.

### Ссылка на GitHub Pages:
* https://tikhonovaks.github.io/mesto/
