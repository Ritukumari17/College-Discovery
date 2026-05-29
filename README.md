# College Discovery Platform

A full-stack, end-to-end college discovery platform allowing users to search, compare, review, and predict college admissions. Built with a scalable and modern tech stack.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), React, TailwindCSS, Lucide React
- **Backend**: Next.js API Routes (Serverless)
- **Database**: PostgreSQL (via Prisma ORM)
- **Authentication**: NextAuth.js (Auth.js) with bcrypt password hashing

## Features
- **College Search & Filter**: Find colleges by location, fees, stream, and rankings.
- **Predictor Tool**: Simulate admission chances based on exam scores and categories.
- **College Comparison**: Compare up to 4 colleges side-by-side on fees, placements, and facilities.
- **Forums & Reviews**: Authentic user-generated reviews and discussion boards.
- **Dashboards**: Separate portals for Users (Saved colleges, settings) and Admins (Analytics, moderation).

## Local Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Database Configuration**
   - You need a running PostgreSQL instance. 
   - Option A: Use Docker Compose.
     ```bash
     docker-compose up -d
     ```
   - Option B: Create a free cloud database on [Supabase](https://supabase.com/) or [Neon](https://neon.tech/).
   
   - Update the `.env` file with your Database connection string:
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/college_discovery?schema=public"
     ```

3. **Initialize Prisma**
   Push the schema to the database and generate the Prisma Client:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment (Production Readiness)

This application is highly optimized for deployment on **Vercel**.

1. Push your repository to GitHub.
2. Import the project in the Vercel Dashboard.
3. Configure the following Environment Variables in Vercel:
   - `DATABASE_URL` (Your production PostgreSQL connection string)
   - `NEXTAUTH_SECRET` (Generate a random string: `openssl rand -base64 32`)
   - `NEXTAUTH_URL` (Your production domain, e.g., `https://yourdomain.com`)
4. Vercel will automatically detect Next.js, run `npm run build`, and deploy your frontend and serverless API routes globally.

## Architecture & Scalability
- **Server Components**: Leverages React Server Components for fast initial page loads and excellent SEO.
- **API Fallbacks**: The API routes are designed to gracefully fall back to mock data if the database connection fails, ensuring the UI remains explorable during setup.
- **Relational Integrity**: Prisma schema enforces strict relations with cascading deletes (e.g., deleting a User removes their Reviews and Comments).
