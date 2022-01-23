# Wiki

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Реализовано SPA, которое предоставляет возможность поиска в Wikipedia.
Для реализации используется Angular, в приложении присутствует:
I. Поисковая строка;
II. Панель с настройкой запроса и краткой информацией по найденным объектам.
Для настройки запроса используется:
а) Сортировка. Сортировать можно по:
- Релевантности
- Дате изменения/создания (новые-старые)
- Дате изменения/создания (старые-новые)
б) В качестве краткой информации выводится:
- Заголовок статьи (активный);
- Ссылка на статью (активная);
- Отрывок текста из найденной статьи;
- Кол-во слов в статье;
- Последняя дата редактирования статьи;
III. Панель с историей поиска
а) Историю поисковых запросов реализована с помощью локального хранилища браузера (LocalStorage).

