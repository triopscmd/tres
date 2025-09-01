# Guía Maestra del Proyecto: Organizador de Tareas Compartidas

## 1. Introducción

Este documento sirve como la guía principal para el desarrollo y entendimiento de la aplicación "Organizador de Tareas Compartidas". El objetivo de la aplicación es proporcionar una plataforma colaborativa para que los usuarios puedan gestionar tareas del hogar, proyectos de grupo o planificaciones de eventos, incluyendo la asignación de tareas, establecimiento de fechas límite y recordatorios automáticos.

El proyecto sigue una arquitectura de microservicios o monorepo híbrido, con un frontend y un backend claramente separados, comunicándose a través de una API RESTful.

## 2. Filosofía de Desarrollo

Este proyecto se rige por un proceso de Desarrollo Dirigido por Pruebas (TDD) y es gestionado por un Agente de IA autónomo. Esto implica que cada nueva funcionalidad o corrección de error comenzará con la escritura de pruebas unitarias y/o de integración que fallen, seguidas de la implementación del código mínimo necesario para que dichas pruebas pasen. La calidad, mantenibilidad y robustez del código son primordiales.

## 3. Tecnologías Clave

El ecosistema tecnológico está centrado en TypeScript para asegurar un tipado estricto y mejorar la mantenibilidad del código.

### 3.1. Frontend (Cliente)

*   **Framework:** React (con Hooks)
*   **Tooling:** Vite (para un desarrollo rápido y eficiente)
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS (para un diseño rápido y utilitario)
*   **Enrutamiento:** React Router DOM
*   **Comunicación API:** Axios

### 3.2. Backend (Servidor)

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Lenguaje:** TypeScript
*   **Base de Datos:** MongoDB (NoSQL)
*   **ODM:** Mongoose (para interactuar con MongoDB)
*   **Autenticación:** JSON Web Tokens (JWT) y BcryptJS (para hashing de contraseñas)
*   **Middleware:** CORS, Dotenv

### 3.3. Herramientas de Desarrollo y Calidad

*   **Linter:** ESLint (para mantener la consistencia del código)
*   **Formateador:** Prettier (para asegurar un estilo de código uniforme)
*   **Entorno de Desarrollo:** Nodemon y Ts-Node-Dev (para recarga automática del servidor)
*   **CI/CD:** GitHub Actions (para automatizar el proceso de integración y despliegue)

## 4. Estructura del Proyecto

El proyecto se organiza como un monorepo dividido en dos carpetas principales:

*   `client/`: Contiene todo el código fuente del frontend basado en React/Vite.
*   `server/`: Contiene todo el código fuente del backend basado en Node.js/Express.
*   `control/`: Documentación interna del proyecto, decisiones de arquitectura, configuración y guías para el agente de IA.

## 5. Fases del Proyecto (Resumen)

El desarrollo se ha planificado en fases para construir la aplicación de forma incremental:

### Fase 1: Fundamentos y Gestión Básica

Establecimiento de la base, incluyendo autenticación de usuarios, persistencia de datos (MongoDB), gestión CRUD para grupos/proyectos y funcionalidades básicas de creación/edición/vista de tareas.

### Fase 2: Colaboración y Detalle de Tareas

Ampliación de las funcionalidades con invitación y gestión de miembros, asignación de tareas, establecimiento de fechas límite, gestión de estados de tarea, vistas detalladas y autorización basada en roles.

### Fase 3: Automatización y Despliegue

Implementación de recordatorios automáticos, un robusto conjunto de pruebas unitarias y de integración, y la configuración de un pipeline de CI/CD para automatizar el despliegue.

## 6. Documentación Adicional

*   **Decisiones de Arquitectura:** `control/documentacion/decisiones_arquitectura.md`
*   **Configuración del Entorno:** `control/documentacion/configuracion.md`
*   **Seguimiento de Tareas:** `control/seguimiento/roadmap.md`
*   **Árbol de Directorios:** `control/seguimiento/arbol.md`
*   **Gestión de Dependencias:** `control/seguimiento/dependencias.md`