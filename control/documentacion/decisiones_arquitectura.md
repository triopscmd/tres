# Decisiones de Arquitectura: Organizador de Tareas Compartidas

Este documento detalla las decisiones arquitectónicas clave tomadas para el proyecto "Organizador de Tareas Compartidas", explicando el porqué de cada elección.

## 1. Visión General de la Arquitectura

La aplicación sigue una arquitectura cliente-servidor con una API RESTful. El frontend y el backend están separados, lo que permite una mayor flexibilidad, escalabilidad y una clara separación de responsabilidades. Se optó por un enfoque de monorepo para simplificar la gestión del código de ambos componentes en un solo repositorio.

## 2. Frontend (Cliente)

### 2.1. Framework: React con TypeScript

*   **Racional:** React es elegido por su popularidad, su ecosistema maduro, su enfoque en componentes reutilizables y su rendimiento optimizado para UIs dinámicas. La adición de TypeScript es crucial para asegurar un tipado estricto, lo que mejora la detectabilidad de errores en tiempo de desarrollo, la refactorización y la mantenibilidad del código a largo plazo.

### 2.2. Herramienta de Build: Vite

*   **Racional:** Vite ofrece una experiencia de desarrollo frontend significativamente más rápida que otras herramientas de build gracias a su uso de módulos ES nativos para el desarrollo y Rollup para el build de producción. Esto se traduce en recargas en caliente (HMR) casi instantáneas y tiempos de inicio del servidor de desarrollo muy bajos.

### 2.3. Manejo de Estado: React Hooks

*   **Racional:** Los hooks de React (`useState`, `useEffect`, `useContext`, etc.) se utilizan para manejar el estado local y global de la aplicación. Esto fomenta un código más funcional y conciso, evitando la complejidad de las clases y facilitando la reutilización de lógica de estado. Para un estado más complejo o global, se considerará el uso de `useContext` o librerías de gestión de estado dedicadas si es necesario.

### 2.4. Enrutamiento: React Router DOM

*   **Racional:** Es la solución estándar y más utilizada para el enrutamiento declarativo en aplicaciones React, permitiendo la navegación entre diferentes vistas y la gestión de URLs amigables.

### 2.5. Estilos: Tailwind CSS

*   **Racional:** Tailwind CSS es un framework CSS de primera utilidad que permite construir diseños complejos rápidamente sin salir del HTML/JSX. Su enfoque en clases utilitarias personalizables acelera el desarrollo, reduce el tamaño del CSS final y facilita la consistencia del diseño. Se combina con PostCSS y Autoprefixer para un procesamiento eficiente del CSS.

### 2.6. Comunicación API: Axios

*   **Racional:** Axios es un cliente HTTP basado en promesas para el navegador y Node.js. Es preferido por su facilidad de uso, manejo robusto de errores, capacidad de interceptar solicitudes/respuestas y soporte para `withCredentials` para el envío de cookies, esencial para la autenticación basada en JWT.

### 2.7. Gestión de Autenticación en el Cliente

*   **Racional:** Se utiliza un hook personalizado (`useAuth`) para encapsular la lógica de autenticación, incluyendo la recuperación del perfil de usuario, el manejo del token JWT (almacenado en `localStorage`) y la funcionalidad de cierre de sesión. Esto centraliza la lógica de autenticación y la hace fácilmente reutilizable en diferentes componentes.

## 3. Backend (Servidor)

### 3.1. Framework: Node.js con Express y TypeScript

*   **Racional:** Node.js es una excelente opción para APIs RESTful debido a su naturaleza asíncrona y no bloqueante, lo que lo hace eficiente para aplicaciones I/O intensivas. Express.js es un framework web mínimo y flexible para Node.js, que proporciona una base sólida para construir APIs. TypeScript se integra para el mismo beneficio de tipado estricto que en el frontend, garantizando la calidad y mantenibilidad del código del lado del servidor.

### 3.2. Base de Datos: MongoDB

*   **Racional:** MongoDB es una base de datos NoSQL basada en documentos. Se elige por su flexibilidad de esquema, lo que permite un desarrollo ágil y se adapta bien a la evolución de los requisitos de datos. Es adecuado para almacenar los tipos de datos que se esperan en un organizador de tareas (usuarios, grupos, tareas, etc.), donde las relaciones pueden ser variadas y no estrictamente relacionales.

### 3.3. ODM: Mongoose

*   **Racional:** Mongoose es una biblioteca de modelado de objetos de MongoDB para Node.js. Proporciona una forma orientada a objetos de interactuar con MongoDB, definiendo esquemas, modelos y ofreciendo validación de datos incorporada, simplificando las operaciones CRUD y la gestión de la integridad de los datos.

### 3.4. Autenticación y Autorización

*   **Hashing de Contraseñas (BcryptJS):** Las contraseñas de los usuarios nunca se almacenan en texto plano. BcryptJS se utiliza para hashear y salar las contraseñas, asegurando que incluso si la base de datos es comprometida, las contraseñas originales permanezcan seguras.
*   **Tokens JWT (jsonwebtoken):** Para la autenticación de usuarios, se utilizan JSON Web Tokens. Después de un inicio de sesión exitoso, el servidor emite un JWT al cliente, que luego se incluye en las cabeceras de `Authorization` de las solicitudes posteriores. Esto permite una autenticación sin estado, lo que es escalable y adecuado para APIs RESTful.
*   **Middleware de Protección (`authMiddleware.ts`):** Un middleware dedicado verifica la validez del JWT en las rutas protegidas. Si el token es válido, decodifica la información del usuario (ID) y la adjunta al objeto `request`, permitiendo que las rutas accedan a la identidad del usuario autenticado.

### 3.5. Estructura de Carpetas del Servidor

*   **`src/controllers`:** Contiene la lógica de negocio que maneja las solicitudes HTTP y coordina la interacción con los modelos y servicios.
*   **`src/models`:** Define los esquemas y modelos de Mongoose para la base de datos.
*   **`src/routes`:** Define las rutas de la API y las asocia con los controladores correspondientes.
*   **`src/middleware`:** Aloja funciones de middleware como la autenticación (`authMiddleware.ts`) y la validación.
*   **`src/config`:** Contiene la configuración de la base de datos y otras configuraciones del servidor.
*   **`src/utils`:** Para funciones de utilidad compartidas, como la generación y verificación de JWT (`jwt.ts`).

### 3.6. Variables de Entorno: Dotenv

*   **Racional:** Las configuraciones sensibles y específicas del entorno (como `MONGO_URI`, `JWT_SECRET`, `PORT`, `CLIENT_URL`) se gestionan mediante variables de entorno cargadas con la librería `dotenv`. Esto asegura que las credenciales y configuraciones no estén hardcodeadas en el código fuente y puedan ser fácilmente modificadas para diferentes entornos (desarrollo, producción).

### 3.7. CORS: Cross-Origin Resource Sharing

*   **Racional:** El middleware `cors` de Express se configura para permitir solicitudes desde el frontend (que opera en un origen diferente, `http://localhost:5173` en desarrollo) al backend. Esto es esencial para que la aplicación web pueda comunicarse con la API. Se configuran `origin` y `credentials` para manejar correctamente las cookies y la seguridad.

## 4. CI/CD: GitHub Actions

*   **Racional:** GitHub Actions se utiliza para automatizar el pipeline de Integración Continua y Despliegue Continuo. Cada `push` o `pull_request` a la rama principal dispara un flujo de trabajo que se encarga de: clonar el repositorio, instalar dependencias para cliente y servidor, construir ambos proyectos, y ejecutar verificaciones de linting. En el futuro, este pipeline incluirá la ejecución de pruebas y el despliegue automático.