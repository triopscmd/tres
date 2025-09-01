```
.
├── .github
│   └── workflows
│       └── ci.yml
├── .gitignore
├── client
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.tsx
│   │   ├── api
│   │   │   └── index.ts
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── layout
│   │   │   │   └── Header.tsx
│   │   │   └── ui
│   │   │       └── Button.tsx
│   │   ├── hooks
│   │   │   └── useAuth.ts
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── pages
│   │       ├── AuthPage.tsx
│   │       └── HomePage.tsx
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite-env.d.ts
│   └── vite.config.ts
└── server
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── src
    │   ├── app.ts
    │   ├── config
    │   │   └── db.ts
    │   ├── controllers
    │   │   └── authController.ts
    │   ├── middleware
    │   │   └── authMiddleware.ts
    │   ├── models
    │   │   └── User.ts
    │   ├── routes
    │   │   └── authRoutes.ts
    │   ├── server.ts
    │   ├── services
    │   │   └── userService.ts
    │   └── utils
    │       └── jwt.ts
    └── tsconfig.json
```