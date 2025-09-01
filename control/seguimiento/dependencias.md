# Mapa de Dependencias (Imports)

Este documento es un registro de los imports de cada archivo. Ayuda a entender el acoplamiento entre los distintos módulos del sistema.

**Formato:** `[Ruta del Archivo]` -> `[Dependencia Importada]`

---

### client/src/App.tsx
- `react-router-dom`
- `./pages/HomePage`
- `./pages/AuthPage`
- `./components/layout/Header`

### client/src/api/index.ts
- `axios`

### client/src/components/layout/Header.tsx
- `react`
- `react-router-dom`
- `../ui/Button`

### client/src/components/ui/Button.tsx
- `react`

### client/src/hooks/useAuth.ts
- `react`
- `../api`

### client/src/main.tsx
- `react`
- `react-dom/client`
- `./App.tsx`

### client/src/pages/AuthPage.tsx
- `react`
- `../components/ui/Button`
- `../api`

### client/src/pages/HomePage.tsx
- `react`

### client/vite.config.ts
- `vite`
- `@vitejs/plugin-react`

### server/src/app.ts
- `express`
- `cors`
- `./routes/authRoutes`

### server/src/config/db.ts
- `mongoose`

### server/src/controllers/authController.ts
- `express`
- `bcryptjs`
- `jsonwebtoken`
- `../models/User`
- `../utils/jwt`

### server/src/middleware/authMiddleware.ts
- `express`
- `jsonwebtoken`

### server/src/models/User.ts
- `mongoose`

### server/src/routes/authRoutes.ts
- `express`
- `../controllers/authController`
- `../middleware/authMiddleware`

### server/src/server.ts
- `dotenv`
- `./app`
- `./config/db`

### server/src/services/userService.ts
- `../models/User`

### server/src/utils/jwt.ts
- `jsonwebtoken`

