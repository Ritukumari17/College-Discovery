# College Discovery Platform

A full-stack, end-to-end college discovery platform allowing users to search, compare, review, and predict college admissions. Built with a highly scalable, modern architecture.

## 🏗️ System Architecture

This application utilizes a modern **Full-Stack Monorepo** approach (powered by Next.js 14). This industry-standard pattern allows both the Frontend UI and Backend API services to live in the same repository while maintaining strict architectural separation.

### 🎨 Frontend Architecture (Client-Side)
The frontend is highly interactive, responsive, and optimized for SEO.
- **Framework:** React & Next.js 14 (App Router)
- **Styling:** TailwindCSS for utility-first, responsive design
- **UI Components:** Custom built, incorporating Lucide React for iconography
- **Location in Repo:** `src/app/` (Pages), `src/components/` (Reusable UI components)
- **Key Features:** Side-by-side college comparisons, responsive navigation, aesthetic split-screen authentication.

### ⚙️ Backend Architecture (Server-Side)
The backend operates as a scalable API layer that handles business logic, database transactions, and user authentication securely.
- **API Framework:** Next.js Serverless API Routes
- **Database:** PostgreSQL
- **ORM / Schema:** Prisma (`prisma/schema.prisma`)
- **Authentication:** NextAuth.js (Auth.js) with bcrypt secure password hashing
- **Location in Repo:** `src/app/api/` (API Endpoints), `prisma/` (Database models)
- **Key Features:** Secure REST endpoints, user data management, review storage, and predictor algorithms.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ritukumari17/college-discovery.git
   cd college-discovery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your backend database connection:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/collegedb"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Initialize Database (Backend):**
   ```bash
   npx prisma db push
   ```

5. **Run the Application:**
   ```bash
   npm run dev
   ```
   The platform will be available at `http://localhost:3000`.

---

## 📸 Platform Features
- **Dynamic Homepage:** Curated colleges and aesthetic study place highlights.
- **Advanced Search & Filtering:** Filter colleges by fees, location, and rankings.
- **Interactive Comparisons:** Select multiple colleges and view their stats side-by-side.
- **Authentication System:** Secure, elegant split-screen login and registration.
- **User Dashboard:** Save colleges, track comparisons, and manage profiles.
