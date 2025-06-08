# Employee Management System

A full-stack web application that allows users to manage employees using Google OAuth 2.0 login, CRUD operations, and a PostgreSQL database hosted on Railway.

## 🚀 Features

* Google OAuth 2.0 Login
* Add, Update, Delete, and View Employees
* Responsive frontend built with React + Vite
* Backend powered by Spring Boot
* PostgreSQL database hosted on Railway

---

## 📦 Technologies Used

* Frontend: React (Vite, Axios)
* Backend: Spring Boot (OAuth2, Spring Security)
* Database: PostgreSQL (hosted on Railway)
* Deployment: Vercel (Frontend), Railway (DB)

---

## 🔐 Google OAuth Setup

To enable login with Google:

1. Visit [https://console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Navigate to: APIs & Services > Credentials
4. Click "Create Credentials" > "OAuth 2.0 Client ID"
5. Choose "Web application"
6. Set the redirect URI:

   * `http://localhost:8080/login/oauth2/code/google`
   * Or your deployed domain
7. Copy your `Client ID` and `Client Secret`
8. Add them to your `application.properties`:

```properties
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET
```

## 🛠 Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/Siddharth20020/ems-app.git
cd ems-app
```

### 2. Backend (Spring Boot)

* Navigate to the backend directory
* Create `application.properties` in:
  `backend/ems/src/main/resources/`

Paste this:

```properties
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET

spring.datasource.url=jdbc:postgresql://centerbeam.proxy.rlwy.net:53343/railway
spring.datasource.username=postgres
spring.datasource.password=EauPnxFTwZYQQBFHoOcsVQJzGrCmCmlh
spring.jpa.hibernate.ddl-auto=update
```

> ✅ PostgreSQL Database Credentials:
>
> * Username: `postgres`
> * Password: `EauPnxFTwZYQQBFHoOcsVQJzGrCmCmlh`
> * Host: `centerbeam.proxy.rlwy.net`
> * Port: `53343`
> * DB Name: `railway`

Then run:

```bash
mvn spring-boot:run
```

### 3. Frontend (Vite + React)

```bash
cd frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Live Deployment (Optional)

* Frontend can be deployed to Vercel (connect GitHub repo)
* Backend can be deployed to Render, Fly.io, or Railway
* Database is already hosted on Railway ✅

---
