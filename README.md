# NodeJS User Authentication

A simple authentication system built with `Node.js` and `MySQL`. Featuring login, registration and a basic profile page. 

[![React](https://img.shields.io/badge/React.js-v18-61DAFB)](https://nodejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v23-5FA04E)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-vlatest-CB3837)](https://www.npmjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-v10-4479A1)](https://www.mysql.com/)

[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Code Style](https://img.shields.io/badge/Code%20Style-Standard-brightgreen)](https://standardjs.com/)


## Table of Contents 

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features
- User login and registration with `jwt` and `bcrypt`.
- Session management. 
- Basic profile page _(currently under development)_.
- Simple, clean UI for demonstration using `React` with `TypeScript`.

## Requirements 

- `Node.js` >= 23
- `MySQL` >= 10
- `npm` (latest version)



## Installation

1. Clone the repository
```bash
git clone https://github.com/p-alvarenga/nodejs_auth-user-server
cd nodejs_auth-user-server
```
2. Install dependencies
```bash
npm install 
```
3. Set up the database (see [Database Setup](#database-setup))
4. Configure environment variables (see [Environment Variables](#environment-variables)
5. Start the server with
```bash
  node server.js
  # or
  npm start
```
6. Open your browser and go to: `http://localhost:3000`

> [!NOTE]
> The front-end is already built and it's inside `dist/`. If you want to make any 
> changes to it, you need to build it again with: 
> ```bash
> npm run build # build command was updated to automatically move the directory to project's root
> ```
> That way your changes will take effect when serving from `node server.js` or `npm start`. 


## Database Setup

This project uses `MySQL`. Create the database using the provided schema: 
```bash
mysql -uroot -p < create-db/schema
```

> Make sure your MySQL server is running and you have the correct credentials.

## Environment Variables
Copy the example file and edit with your own configuration: 

```bash
cp .env.example .env
```

--- 

## Usage 
- Navigate to `/` to log in
- Navigate to `/sign-up` to register
- Profile page is at `/profile`.


## Screenshots

##### Log-in form 
<img width="576" height="397" alt="image" src="https://github.com/user-attachments/assets/d75a43e1-f1b0-4531-a531-a6949b301328" />

##### Sign-up form 
<img width="576" height="397" alt="image" src="https://github.com/user-attachments/assets/0524b16d-81dc-4b0a-a3ad-d56d72f97b3c" />

#### Profile Page (under development)
<img width="665" height="409" alt="image" src="https://github.com/user-attachments/assets/f01744f4-e908-487e-8e61-45a940361f40" />

## Future improvements
- [ ] Full featured profile page with settings (change profile picture, description etc.)
- [ ] Email verification
- [x] Responsive front-end design (React added) 

## License 
This project is under the **MIT License**. See [License](LICENSE)
