# XRWM Full Stack Developer Capstone

## Repository Name
xrwm-fullstack_developer_capstone

## Project Name
Best Cars Dealership Reviews Web Application

## Project Overview

This project is developed as part of the IBM Full Stack Developer Capstone. 

In this project, I assume the role of a full stack software developer hired by **Best Cars Dealership**, a national car dealership with branches across the United States.

The goal of the project is to build a full-stack web application that provides:

- A central database of dealership reviews
- User registration and authentication
- Dealership listing and state filtering
- Review posting functionality
- Sentiment analysis on customer reviews

---

## Technologies Used

### Frontend
- HTML
- CSS
- Bootstrap
- React

### Backend
- Python
- Django
- SQLite

### Microservices
- Python Flask
- NLTK (Sentiment Analysis)

### Dealership & Review Service
- Node.js
- Express
- MongoDB

### DevOps & Deployment
- Git & GitHub
- GitHub Actions (CI/CD)
- Docker
- Kubernetes
- IBM Cloud Code Engine (Serverless)

---

## Application Features

- Homepage with navigation (About Us, Contact Us, View Dealerships)
- User Registration & Login
- View dealerships without login
- Write reviews (only for logged-in users)
- Filter dealerships by state
- View dealership-specific reviews
- Sentiment analysis for each review
- Review submission with:
  - Purchase date
  - Car make
  - Car year
  - Review text

---

## Architecture

The application follows a microservices architecture:

- Django handles user management and frontend views
- Node/Express handles dealership and review APIs
- Flask microservice performs sentiment analysis
- Docker & Kubernetes manage deployment

---

## Author
Lamija Karic
IBM Full Stack Developer Capstone Project
