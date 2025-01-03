# **Courses API**
This is a RESTful API for managing online courses. The API provides endpoints to retrieve details about available courses, including descriptions, instructors, ratings, and more.

## **Base URL**
The base URL for the API is:

```json
https://courses-api-qnvw.onrender.com/courses
```
# Courses API

This API serves a collection of courses for educational purposes. You can retrieve all courses or a specific course by its ID.

## Endpoints

### 1. Get All Courses

**URL:** `/courses`

**Method:** `GET`

**Description:** Retrieves a list of all available courses.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Apprendre JavaScript",
    "description": "Un cours complet sur les bases du JavaScript pour les débutants.",
    "duration": "4 heures",
    "level": "Débutant",
    "category": "Développement Web",
    "image": "https://th.bing.com/th/id/OIP.zGtB9WyPaKOzVKsxzI_NlAHaEo?rs=1&pid=ImgDetMain",
    "link": "https://some-link.com",
    "instructor": {
      "id": 105,
      "name": "Sophie Durand",
      "bio": "Développeuse JavaScript et formatrice.",
      "avatar": "https://some-avatar-link.com"
    },
    "price": 24.99,
    "language": "Spanish",
    "enrollment_count": 1800,
    "ratings": 4.6
  },
  ...
]
```
### 2. Get Course by ID

**URL:** `/courses/:id`

**Method:** `GET`

**Description:** Retrieves a specific course by its ID.

**URL Params:**
- `id` (required) — The ID of the course you want to retrieve.

**Response:**
```json
{
  "id": 1,
  "name": "Apprendre JavaScript",
  "description": "Un cours complet sur les bases du JavaScript pour les débutants.",
  "duration": "4 heures",
  "level": "Débutant",
  "category": "Développement Web",
  "image": "https://th.bing.com/th/id/OIP.zGtB9WyPaKOzVKsxzI_NlAHaEo?rs=1&pid=ImgDetMain",
  "link": "https://some-link.com",
  "instructor": {
    "id": 105,
    "name": "Sophie Durand",
    "bio": "Développeuse JavaScript et formatrice.",
    "avatar": "https://some-avatar-link.com"
  },
  "price": 24.99,
  "language": "Spanish",
  "enrollment_count": 1800,
  "ratings": 4.6
}
```

## **Features**
1. Fetch details about courses and instructors.
2. Supports different categories and languages.
3. Provides information on enrollment and ratings.
## **Technologies Used**
🔥Backend Framework: Node.js
🔥Hosting: Render
## **Setup and Deployment**
1. Clone the repository.
2. Install dependencies using npm install.
3. Start the server locally with npm start.
4. Deploy to Render or your preferred hosting service.
## **Contributions**
Contributions are welcome! Feel free to submit a pull request or report issues.

