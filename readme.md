# Escape Room — Advanced Quest Booking Service (TypeScript & OOP Showcase)

An advanced interactive web application for browsing, filtering, and booking immersion escape rooms. This project serves as a comprehensive demonstration of Object-Oriented Programming (OOP) principles, strict design patterns, and rigorous modular type-safety using TypeScript.

- **Developer:** Denis Belokopytov
- **Time spent on development:** 38 hours

*Note: The UI/UX layouts, styling, and DOM templates were provided as a base by HTML Academy. My singular focus was to architect the end-to-end frontend execution logic, manage component state lifecycle events, construct modular data objects, and implement domain boundaries using pure TypeScript.*

## 🛠 Tech Stack & Engineering Core
- **Primary Architecture:** Pure TypeScript (Strict Mode, 100% compilation safety)
- **State Management:** Redux Toolkit (`createSlice`, standalone asynchronous Thunks, typed selectors)
- **Programming Paradigm:** Object-Oriented Programming (OOP) with clean encapsulation, abstraction layers, and explicit class access modifiers (`private`, `protected`, `public`).
- **Styling Pipeline:** Component-scoped encapsulation via Styled Components (`styled-components`) supporting custom theme providers and isolated namespace mapping (`import * as S`).

## 💡 Key Technical & Architectural Features Engineered by Me:
- **100% Offline Autonomy:** Completely decoupled the client runtime from local server dependencies (`json-server`). Integrated a structured local database (`mocks/quests.ts`) hosting 9 native quest profiles with deep parameters (complexity tiers, duration bounds, and dynamic participant counts).
- **Rigid Data Domain Enforcement:** Established explicit TypeScript interfaces and complex structural types to guarantee complete data contract security across the layout-to-network pipeline.
- **Interactive Multi-Tiered Filtering:** Designed an optimized client-side layout filtering controller. Users can dynamically sort quest instances simultaneously by genre (Sci-Fi, Horror, Detective, Mystical, Adventures) and complexity levels (Easy, Medium, Hard) without incurring UI rendering latency.
- **Standalone Form Lifecycles:** Configured an asynchronous transaction interceptor layer for processing user reservations. Replaced legacy server endpoints with an instantaneous local promise-resolution architecture that validates payloads and gracefully dispatches mock execution contexts to trigger UI modal dismissals.

## ⚙️ How to Run Locally & Available Scripts

1. **Clone the repository:**
   ```bash
   git clone https://github.com/denis-heise/Escape-Room
   ```

2. **Install all required dependencies:**
   ```bash
   npm install
   ```

3. **Launch the application:**
   ```bash
   npm run start
   ```
   *This boots up the standalone client application in development mode directly via the integrated legacy provider compatibility layer. Open [http://localhost:3000](http://localhost:3000) to view it reactively in your browser.*

### Additional Production Commands:

- `npm run build` — Builds the client-side single-page application for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance, including automated filename hashing.
- `npm run start:eslint` — Runs the absolute code quality pipeline through ESLint configurations to enforce strict production code standards.
