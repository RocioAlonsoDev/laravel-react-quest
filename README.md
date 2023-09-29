## Quest

Quest is a web app that allows users to find events and activities near them and to meet new people with similar interests.

## Functionalities

- Create events
- Enroll in events
- User Authentication
- Leave comments

## Requirements

- PHP 8 or above
- Laravel 10 or above
- Server (Apache)
- MySQL database
- Tailwind CSS

## Installation guide

1. Clone this repository
2. Navigate into the project directory
3.  Install dependencies:
`composer install`
4. Copy `.env.example` file contents into a new one called `.env`:
`cp .env.example .env`
5. Generate key: 
`php artisan key:generate`
6. Change the database name in `.env`
7. Migrations : `php artisan migrate`
8. Move into the react project and install dependencies:
   * `cd react`
   * `npm intall`
   * `npm install tailwindcss`
   * `npx tailwindcss -o public/css/app.css`
10. Initialize server: `php artisan serve`

