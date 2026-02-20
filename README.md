==================================================================================================================================
**⚔️ Dumbbells & Dragons**
==================================================================================================================================


> Transform your fitness journey into an epic RPG adventure

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=flat-square)](https://clerk.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

**Live Demo:** [dumbbells-and-dragons.vercel.app](https://dumbbells-and-dragons.vercel.app)

==================================================================================================================================

## 📖 Table of Contents

- [Overview](#overview)
- [Problem Domain](#problem-domain)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [User Stories](#user-stories)
- [Planning & Design](#planning--design)
- [How It Works](#how-it-works)
- [Team Member Roles](#Team--Member-Roles)
- [Future Roadmap](#future-roadmap)
- [Challenges & Learnings](#challenges--learnings)
- [Reflections](#Reflections)



==================================================================================================================================

## 🎮 Overview

**Dumbbells & Dragons** is a gamified fitness tracking application that transforms traditional strength training into an epic RPG adventure. Users create characters, choose a class — Barbarian, Rogue, or Paladin (with more coming in future chapters) — complete real workouts to earn experience points, and watch their virtual character grow stronger alongside their real-world gains.

Programs and workouts are specifically designed around your selected class. Choose the Barbarian powerbuilding path to build raw strength and explosive power, with added functional sandbag and kettlebell training so you don’t just look like a barbarian — you move like one too.

Unlike other gamified fitness apps with pay-to-win mechanics, Dumbbells & Dragons has zero shortcuts — the only way to level up is through real training. Every point of strength. Every level gained. Earned in the gym.

==================================================================================================================================
## 🎯 Problem Domain

Creating a fitness tracking platform that meaningfully gamifies training by tying real workout progress directly to character progression, eliminating shortcuts and ensuring in-game power reflects real-world effort.

==================================================================================================================================
## ✨ Features

### Core Functionality
- **🎭 Character Creation & Classes**
  - Choose between Barbarian (strength-focused - strongman/functional athlete hybrid), Rogue (speed-focused - MMA / Martarial art style ciruit training), or Paladin (muscular endurance - classic body building with some functionality thrown in)
  - Character avatars that evolve with level progression
  - Class-specific training programs

- **💪 8-Week Progressive Programs**
  - Structured program with built-in progressive overload
  - Training split across 7-day weeks
  - Rest days integrated into program structure

- **📊 Real-Time Workout Tracking**
  - Log sets, reps, and weights
  - Automatic XP calculation (weight × reps)
  - Rest timer with customizable controls
  - Exercise progression tracking

- **🎯 RPG Leveling System**
  - Square root leveling formula for satisfying progression
  - First Chapter = 8-week program = Level 10
  - Level-up notifications and celebration
  - Visual XP progress bars

- **🏆 The Tavern** *(Update coming soon)*
  - Leaderboards and community features
  - Achievement showcase
  - Social sharing

- **🔐 User Authentication**
  - Clerk authentication integration
  - User-specific workout data
  - Character progression tied to user accounts

### Additional Features
- Responsive design (mobile, tablet, desktop)
- Dynamic routing for workouts and program weeks
- Program overview with week/day navigation
- Character stat display

==================================================================================================================================
## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js (App Router)
- **Library:** React 18
- **Language:** JavaScript
- **Styling:** CSS Modules & Vanilla CSS
- **Icons:** Lucide React

### Backend
- **API:** Next.js API Routes
- **Database:** PostgreSQL (Supabase)
- **Connection Pool:** node-postgres (pg)

### Authentication
- **Service:** Clerk

### Deployment
- **Platform:** Vercel
- **Database Hosting:** Supabase

### Development Tools
- **Version Control:** Git & GitHub
- **Project Management:** Trello
- **Design:** Figma
- **Code Editor:** VS Code

### Required packages
 
**@clerk/nextjs**
**lucide-react**
**pg**
**@radix-ui/react-dropdown-menu**
**@radix-ui/react-alert-dialogue**
**@radix-ui/react-hover-card**
**@radix-ui/react-dialog****
**@radix-ui/react-navigation-menu**

## "dependencies": {
    "@clerk/nextjs": "^6.37.5",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "lucide-react": "^0.563.0",
    "next": "16.1.6",
    "pg": "^8.18.0",
    "react": "19.2.3",
    "react-dom": "19.2.3"

==================================================================================================================================
## 📝 User Stories

==================================================================================================================================
## 🎨 Planning & Design

### Wireframes
We created detailed wireframes in Figma covering:
- Landing page with hero section and class selection preview
- Character creation flow (class selection → character details)
- Dashboard with stats, today's workout, and recent activity
- Program overview (8 weeks, daily structure)
- Workout logging page with set tracking and XP calculation
- The Tavern (leaderboards and community features)

**Key Design Decisions:**
- Glassmorphism mixed with pixel art aesthetic for RPG fantasy feel that blends modern gym apps with that nostalgic gamer feel
- Green gradient (#10b981 → #059669) as primary brand color
- Dark theme with glowing accents
- Mobile-first responsive design

==================================================================================================================================
## 🎯 How It Works

### XP Calculation (Updated overhaul of XP Calculation soon...)

Every set you complete earns XP:
```javascript
XP per set = weight (kg) × reps

// Examples:
Bench Press: 4 sets × 4 reps @ 50kg = 800 XP
Deadlift: 4 sets × 4 reps @ 80kg = 1,280 XP
Bodyweight exercises = 50 XP per set
```

### Leveling System

The leveling formula uses a square root curve for satisfying RPG-style progression:
```javascript
level = FLOOR(SQRT(total_xp / 1000)) + 1
```

**Level Requirements:**
| Level | Total XP required | Xp to next level |
| ----- | ----------------- | ---------------- |
| 1     | 0                 | 1000             |
| 2     | 1000              | 3000             |
| 3     | 4000              | 5000             |
| 5     | 16,000            | 9000             |
| 10    | 81,000            | 19,000           |
**Complete the 8-week program ≈ Level 10!** 🎉

### Progressive Overload

Each week increases weight/volume:
- Week 1: Base weights
- Week 2: +2.5kg on compounds, +5 reps on accessories
- Week 3-8: Continued progression

==================================================================================================================================
### Team Members & Roles

**Rory** - Full-Stack Developer & Concept Creator & UI/UX design
- Conceptualized the project idea and overall vision
- Built landing page, sign-in bar, about page with full CSS
- Developed program page (components + CSS + API)
- Created workout logging page (components + CSS + API)
- Implemented workout completion API with XP/leveling logic
- Database schema additions and SQL modifications
- Co-led Figma design process with Annabel
- Created various reusable components
- Created all assets
- Created seed data files for 8-week program

**Annabel** - Full-Stack Developer & UI/UX design
- Built the Tavern page (leaderboards & social features)
- Developed choose-class page and character creation flow
- Created my-character profile page
- Implemented all authentication-related API routes
- Styled all pages she built with custom CSS
- Co-led Figma design process
- Component architecture and routing
- Created seed data for the user/classes 

**Nene** - Full-Stack Developer Database Architect & Project Manager
- Designed and built entire database schema
- Set up PostgreSQL with Supabase
- Managed Trello board and task allocation
- Built privacy policy, terms of service, and contact pages
- Implemented metadata for SEO optimization
- Ensured data integrity and relationships
- Set up Clerk Auth
- Lead on project slideshow creation 

**Dylan** - Full-Stack Developer & UI/UX
- Built and styled the dashboard page
- Created dynamic dashboard with real-time stats (unfortunatly removed last min before codelock)
- Designed and implemented navigation bar
- CSS refinements across multiple pages
- Input on the figma design process 
- Responsive design improvements
- UI/UX enhancements for better user experience

### Collaboration Process

**Tools Used:**
- **Discord:** Daily standups, pair programming sessions, resource sharing
- **Trello:** Task management and sprint planning
- **GitHub:** Version control with feature branches and pull requests
- **Figma:** Collaborative design and wireframing

**Git Workflow:**
- Feature branches for all development
- Pull requests reviewed by at least one team member before merging
- Regular syncing with main branch to avoid conflicts
- Clear, descriptive commit messages

**Communication:**
- Daily check-ins on Discord
- Pair programming for complex features
- Screen sharing for debugging sessions
- Clear task ownership on Trello

==================================================================================================================================

## 🚀 Future Roadmap

### MVP Completed ✅
- [x] Character creation with 3 classes
- [x] 8-week structured programs with progressive overload
- [x] Workout logging with real-time XP tracking
- [x] Character leveling system
- [x] User authentication with Clerk
- [x] Responsive design
- [x] Program overview page

### In Progress 🔄
- [ ] The Tavern (leaderboards & social features)
- [ ] Dynamic character avatars based on level/class
- [ ] Workout history page

### Stretch Goals 🎯
- [ ] Achievement system with badges
- [ ] Quest system (weekly challenges)
- [ ] Guild/party features
- [ ] Custom program builder
- [ ] Exercise video library
- [ ] Social features (following, workout sharing)
- [ ] Progressive Web App (PWA) for offline logging
- [ ] Wearable device integration
- [ ] Nutrition tracking
- [ ] Standalone game that entergrates your character

### Technical Improvements 📈
- [ ] Migrate to TypeScript
- [ ] Implement useContext for global state
- [ ] Add comprehensive error handling
- [ ] Unit and integration testing
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Accessibility improvements (ARIA labels, keyboard nav)

==================================================================================================================================
## 🧗 Challenges & Learnings

### Technical Challenges

**1. Junction Table Ordering**
- **Problem:** Exercises appeared in wrong order despite careful SQL insertion
- **Solution:** Added `exercise_order` column to junction table, ordered by this field in queries
- **Learning:** Relying on insertion order (`ORDER BY id`) is unreliable in many-to-many relationships

**2. Week Data Sharing Bug**
- **Problem:** Week 1 and Week 2 shared the same workout rows, causing data corruption
- **Solution:** Added `week_num` column to `dd_workouts` table to separate weeks
- **Learning:** Database schema needs to account for reusable data with context-specific attributes

**3. Next.js Prerender Errors**
- **Problem:** Workout page crashed during build due to `useSearchParams()` in server component
- **Solution:** Moved workout logging to client component wrapped in Suspense
- **Learning:** Dynamic runtime data (query params, user auth) requires client-side rendering

**4. Leveling Formula Balance**
- **Problem:** Initial linear formula (XP / 100) resulted in Level 820 after 8 weeks
- **Solution:** Implemented square root formula: `FLOOR(SQRT(XP / 1000)) + 1`
- **Learning:** Game balance requires iterative testing and adjustment

### Non-Technical Challenges

**1. Feature Scope Management**
- **Problem:** Initial scope included social features, achievements, 3 character classes, and more gamification
- **Solution:** Prioritized MVP features, moved stretch goals to future roadmap
- **Learning:** Better to have polished core features than many half-finished features

**2. Merge Conflicts**
- **Problem:** Multiple developers working on overlapping files caused frequent conflicts
- **Solution:** Better task division, more frequent pulls from main, clear ownership
- **Learning:** Communication prevents conflicts better than technical solutions

==================================================================================================================================
## Reflections

 **Requirements met**
We successfully met all of our core requirements, creating the MVP we wanted to make, and achieved the stretch goal of the user leveling up as they earn XP

As far as assignment requirements, our project was successfully built upon strong designing and planning, collaboration and communication. We met the technical requirements of having a dynamic application, having a nextjs app with server side rendering for database integration, using that to fetch user data dynamically, tight and effiecient database schema design, and successful user authentication using clerk, which allowed for page restriction and user specific content / pages.

 **Individual reflections**

 **Rory**
 This project was both creatively and technically fulfilling. Turning a concept — combining RPG mechanics with strength training — into a functional product required balancing vision with feasibility.

One major learning point was the importance of database planning early on. Several schema adjustments (such as adding exercise_order and week_num) reinforced how critical relational structure is for scalable applications. I also gained deeper confidence working with Next.js server/client component boundaries, especially when handling dynamic data.

If I were to improve one thing, it would be allocating more time for testing and polish before code lock. Some features worked functionally but could benefit from refactoring and optimization.

Overall, this project strengthened my ability to architect full-stack applications from concept to deployment.

 **Dylan**
- On an individual note, the dashboard didn't end up quite where I wanted it to, and had to be reverted to a previous state last minute
Mostly due to complex SQL queries taking longer than anticipated to get working, due to the large scope of our database
- Group planning and communication was excellent
- Technical issues caused slowed progress at multiple points during the project, could have re-distributed better from my end when these were happening
- Describing errors or bugs you encountered while completing your assignment
- We had multiple issues with vercel deployment, stemming from fetch issues and client/server component structuring

**Nene**
- Working collaboratively under the agile methodology was difficult at first as the pace of the project was very much break-neck for the amount of things we wanted to accomplish
- The better part of day 3 was a loss for me after system issues caused a blue screen of death to rear its head and take all my coding for that day with - this put me on the back foot on day 4 but I caught up nonetheless
- Working with familiar tools such as Trello, DrawSQL, Supabase, Clerk and Next.js helped greatly in keeping me engaged - I did have to revise many-to-many DB relationships which also ate into time but was much needed
- On a more personal note, I can say that it was probably one of the most challenging things I have done in recent history. The entire course culminating in this project was a fantastic end to a mad ride and I could not have asked for a better team than the one we forged together. Smooth communciation, minimal conflict, well-organised project management, on mission and overall a professionally executed project. I am proud of what we have achieved!

**Annabel**
We really started out strong with a great idea from Rory and a great amount of organisation from Nene for planning and keeping us on task. Our discussions were fluid and the discord server that I created for the group (something that I thought would be useful and therefore proud of) allowed for easy communication in text, planning, admin details, and also if we wanted to hop into the different voice channels to work in pairs or practice mob development. 

Everything was moving forward delightfully but as our planning progressed, we found ourselves at loggerheads with the sql tables. Some of us went to research for missing information which was the best idea as we were able to finalise that afterwards. I saw a great use amount of development from Dylan, who worked on a lot of SQL queries and really showed some impressive skills in backend work.

This was the most complex database that I have ever used throughout the course and I think without Rory this would not have been as fluid in practice as it turned out to be. I must say that handling the SQL queries for this project was a feat that definitely felt as if it aged me... as by the end of the project, I had to rush some things because of the code lock. Some technical issues saw me struggling to complete a bit of code to test; we were not able to review a couple pages which ended up having some SQL typos.

This whole experience was a brilliant learning opportunity, other than learning from my colleagues, I was able to learn from my own mistakes and learn new skills such as completing a conflict review in the command line, which was something that I hadn't previously completed.  

There are definitely more things that I would want to add but the core and stretch features that I was most committed to were completed; I would have just preffered time to clean up some styling.
