# **Courses API**
This is a RESTful API for managing online courses. The API provides endpoints to retrieve details about available courses, including descriptions, instructors, ratings, and more.

## **Base URL**
The base URL for the API is:

```json
https://courses-api-qnvw.onrender.com/courses
```
Endpoints
GET /courses
Retrieve a list of all courses.

URL: /courses
Method: GET
Response:
Returns an array of course objects, each containing:
id: Unique identifier for the course
name: Name of the course
description: Brief description of the course
duration: Duration of the course
level: Course difficulty level
category: Course category
image: URL for the course image
instructor: Object containing instructor details (name, bio, avatar)
price: Price of the course
language: Course language
enrollment_count: Number of enrolled students
ratings: Average course ratings
Example Response:

```json
[
  {
    "id": 1,
    "name": "Apprendre JavaScript",
    "description": "Un cours complet sur les bases du JavaScript pour les débutants.",
    "duration": "4 heures",
    "level": "Débutant",
    "category": "Développement Web",
    "image": "https://example.com/javascript-course.jpg",
    "instructor": {
      "id": 105,
      "name": "Sophie Durand",
      "bio": "Développeuse JavaScript et formatrice.",
      "avatar": "https://example.com/sophie-avatar.jpg"
    },
    "price": 24.99,
    "language": "Spanish",
    "enrollment_count": 1800,
    "ratings": 4.6
  }
]
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

