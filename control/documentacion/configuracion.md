# Configuración del Entorno y Ejecución del Proyecto

Este documento proporciona las instrucciones necesarias para configurar el entorno de desarrollo y ejecutar la aplicación "Organizador de Tareas Compartidas" en sus modos de cliente (frontend) y servidor (backend).

## 1. Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

*   **Node.js:** Versión 18 o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager) o **Yarn / pnpm:** Generalmente viene incluido con Node.js.
*   **MongoDB:** Una instancia de MongoDB. Puedes instalarla localmente ([MongoDB Community Server](https://www.mongodb.com/try/download/community)) o usar un servicio en la nube como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## 2. Configuración General del Proyecto

1.  **Clonar el Repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd shared-task-organizer
    ```

## 3. Configuración y Ejecución del Backend (Servidor)

El backend está ubicado en la carpeta `server/`.

### 3.1. Variables de Entorno

El servidor utiliza variables de entorno para su configuración. Debes crear un archivo `.env` en la raíz de la carpeta `server/`.

1.  **Copia el archivo de ejemplo:**
    ```bash
    cd server
    cp .env.example .env
    ```

2.  **Edita el archivo `.env`** con tus configuraciones:

    *   `PORT`: Puerto en el que el servidor escuchará (por defecto: `5000`).
    *   `MONGO_URI`: La cadena de conexión a tu base de datos MongoDB. Ejemplo:
        *   Local: `mongodb://localhost:27017/sharedtasks`
        *   Atlas: `mongodb+srv://<user>:<password>@<cluster-url>/sharedtasks?retryWrites=true&w=majority`
    *   `JWT_SECRET`: Una cadena secreta larga y aleatoria para firmar y verificar los JSON Web Tokens. Puedes generar una con `node -e 