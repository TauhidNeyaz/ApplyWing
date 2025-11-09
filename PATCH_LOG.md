# PATCH LOG

## Changes Made on 2025-11-09

### Frontend
- Migrated to Vite and TypeScript.
- Added TailwindCSS configuration.
- Created pages: `Landing.tsx`, `Login.tsx`, `Signup.tsx`, `DashboardStub.tsx`.
- Implemented `AuthContext` for authentication.
- Added `.env` file for API URL.
- Added test: `Signup.test.tsx`.

### Backend
- Created backend stub under `server/`.
- Added endpoints for signup and login with in-memory user store.
- Added `package.json`, `tsconfig.json`, and `README.md` for the backend.

### Documentation
- Updated `frontend/README.md` and `server/README.md` with setup instructions.