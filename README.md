Video Player App
Prueba técnica para Vidext de un reproductor de videos hecho con Next.js >15.

**ÍNDICE**
- [Instrucciones de Configuración](#instrucciones-de-configuración)
- [Cómo Ejecutar la Aplicación](#cómo-ejecutar-la-aplicación)
- [Pruebas de las Llamadas a la API](#pruebas-de-las-llamadas-a-la-api)
- [Cómo Usar la Aplicación](#cómo-usar-la-aplicación)
- [Capturas de Pantalla](#capturas-de-pantalla)


## **Instrucciones de Configuración**
  1. Clonar el repositorio:
```bash
npm install
npm run dev
  
bash
Copiar código
git clone https://github.com/your-username/video-player-app.git
cd video-player-app
Install Dependencies: Ensure you have Node.js (version 18+) and npm installed. Run:

bash
Copiar código
npm install
Environment Setup: Create a .env file in the root of the project with the following content:

env
Copiar código
DATABASE_URL=<your-database-url>
API_KEY=<your-api-key> # Replace these placeholders with actual values.
How to Run the App
Start the Development Server:

bash
Copiar código
npm run dev
The app will be available at http://localhost:3000.

Production Build: To create a production build:

bash
Copiar código
npm run build
npm run start
Run on a Different Port (Optional): Set a custom port with:

bash
Copiar código
PORT=4000 npm run dev
Testing the API Calls
Install Test Dependencies: Ensure you have jest and other test dependencies installed:

bash
Copiar código
npm install --save-dev jest supertest
Run the Tests: Execute all tests using:

bash
Copiar código
npm run test
Inspect Results: The tests will validate the API endpoints for functionalities like:

Fetching all videos.
Fetching a video by ID.
Liking and viewing videos.
How to Use the App
Home Page:

The homepage displays a list of all videos.
Each video has options to view or like it.
View Video:

Click on a video to see its details and increment the view count.
Like a Video:

Click the "Like" button to increase the like count.
Search Videos:

Use the search bar to find specific videos.
Screenshots
Home Page

Description: A list of videos available for interaction.

Video Details

Description: Detailed view of a selected video.

API Testing

Description: Jest test results validating API endpoints.

License
This project is licensed under the MIT License.

Notes:
Replace placeholders like <your-database-url> with actual values.
Add real screenshots where indicated.
This README not only provides technical setup and testing instructions but also visually showcases how to use the app, making it both developer and user-friendly.






