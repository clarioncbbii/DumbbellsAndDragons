import Link from "next/link";
import { Sword, Dumbbell, Gamepad2, Trophy, Target, Zap, Star, Users } from "lucide-react";

import Image from "next/image";
import "./about.css";
import NavBar from "@/components/Navigation/NavBar";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <NavBar />

      {/* ---------------------------------------------------Hero section------------------------------------------------- */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-blob gradient-blob-1" />
          <div className="gradient-blob gradient-blob-2" />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="about-tag">⚔️ Our Story</div>
            <h1 className="hero-title">
              <span className="hero-title-gradient">
                Built by Warriors,<br />For Warriors
              </span>
            </h1>
            <p className="hero-description">
              We got tired of gym apps that feel like spreadsheets and games that
              don&apos;t respect your grind. So we built something that does both —
              properly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------The Problem section------------------------------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Problem with Existing Apps</h2>
            <p className="section-description">
              We&apos;ve used them all. Here&apos;s what&apos;s wrong.
            </p>
          </div>

          <div className="problems-grid">
            <div className="problem-card glass-card">
              <div className="problem-icon">📊</div>
              <h3 className="problem-title">Gym Apps Are Boring</h3>
              <p className="problem-description">
                Most workout trackers are just digital spreadsheets. Log your sets,
                see a number go up. There&apos;s no reward, no story, no reason to
                keep coming back beyond willpower alone.
              </p>
            </div>

            <div className="problem-card glass-card">
              <div className="problem-icon">🎮</div>
              <h3 className="problem-title">Gamified Apps Miss the Mark</h3>
              <p className="problem-description">
                The apps that try to gamify fitness either treat it as an
                afterthought — slapping badges on a boring log — or they&apos;re
                so focused on the game that the actual workout tracking is
                terrible.
              </p>
            </div>

            <div className="problem-card glass-card">
              <div className="problem-icon">🗓️</div>
              <h3 className="problem-title">No Real Programs</h3>
              <p className="problem-description">
                Most apps let you log whatever you feel like. That&apos;s fine for
                experienced lifters, but beginners need structured progressive
                overload programs designed by people who actually know training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------Our Solution section------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Fix It</h2>
            <p className="section-description">
              Two worlds, one app — done properly
            </p>
          </div>

          {/* the big vision card */}
          <div className="vision-card glass-card">
            <div className="vision-header">
              <div className="vision-icons">
                <Dumbbell className="vision-icon" />
                <span className="vision-plus">+</span>
                <Gamepad2 className="vision-icon" />
              </div>
              <h3 className="vision-title">The Vision</h3>
            </div>
            <p className="vision-description">
              Dumbbells & Dragons is designed to work as a <strong>great standalone gym app</strong> first.
              The workout tracking, progressive overload programs, and exercise logging
              are all built to a professional standard — something you&apos;d actually
              want to use even if there was no game attached.
            </p>
            <p className="vision-description">
              Then, the gamification layer sits on top in a way that actually
              means something. The XP you earn in the gym doesn&apos;t just fill a
              bar — it <strong>directly powers your character</strong> in the game.
              Your core attributes — Strength, Stamina, Vitality — can <strong>only
              be increased by training in real life</strong>. Loot and gear can still
              upgrade your skills, but your base stats? Those are earned in the gym.
            </p>
            <div className="vision-callout">
              <Zap className="callout-icon" />
              <span>Your real-world gains = your in-game power. No shortcuts.</span>
            </div>
          </div>

          {/* two column how it works */}
          <div className="solution-grid">
            <div className="solution-card glass-card">
              <div className="solution-header">
                <Dumbbell className="solution-icon" />
                <h3 className="solution-title">As a Gym App</h3>
              </div>
              <ul className="solution-list">
                <li><span className="list-bullet">▸</span> Professionally designed 8-week programs</li>
                <li><span className="list-bullet">▸</span> Built-in progressive overload across all 8 weeks</li>
                <li><span className="list-bullet">▸</span> Rest timer, set tracking, weight logging</li>
                <li><span className="list-bullet">▸</span> Workout notes and PR tracking</li>
                <li><span className="list-bullet">▸</span> Programs tailored to your chosen class</li>
              </ul>
            </div>

            <div className="solution-card glass-card">
              <div className="solution-header">
                <Gamepad2 className="solution-icon" />
                <h3 className="solution-title">As a Game</h3>
              </div>
              <ul className="solution-list">
                <li><span className="list-bullet">▸</span> XP earned in gym = character XP in game</li>
                <li><span className="list-bullet">▸</span> Core attributes only increase through real training</li>
                <li><span className="list-bullet">▸</span> Loot and items still upgrade skills</li>
                <li><span className="list-bullet">▸</span> Your class in the gym is your class in the game</li>
                <li><span className="list-bullet">▸</span> Level 50 in the app = genuinely powerful character</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------The Team section------------------------------------------------- */}
      {/* I was thinking we could add pictures on here and bios that we each write to work in our favour as a porfolio piece */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who Built This</h2>
            <p className="section-description">
              A team with the right mix of obsessions
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card glass-card">
              <div className="team-emoji">🏋️</div>
              <h3 className="team-role">The Personal Trainer</h3>
              <p className="team-description">
                We have a qualified PT on the team who has used dozens of gym apps
                professionally. They know exactly what makes a good workout log,
                what progressive overload actually looks like in practice, and
                what coaches and clients need from a training app.
              </p>
              <div className="team-tag">Knows what works in the gym</div>
            </div>

            <div className="team-card glass-card">
              <div className="team-emoji">🎮</div>
              <h3 className="team-role">The Gamers</h3>
              <p className="team-description">
                We&apos;ve spent thousands of hours in RPGs. We know what makes a
                levelling system feel rewarding, what makes you want to grind,
                and what makes progression feel meaningful rather than arbitrary.
                That knowledge is baked into every design decision.
              </p>
              <div className="team-tag">Knows what makes games fun</div>
            </div>

            <div className="team-card glass-card">
              <div className="team-emoji">💻</div>
              <h3 className="team-role">The Developers</h3>
              <p className="team-description">
                Built with Next.js, Supabase, and Clerk — a proper production
                stack. Not a prototype, not a mockup. A real app designed to
                scale with a community of warriors who take both their training
                and their gaming seriously.
              </p>
              <div className="team-tag">Builds things that actually work</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------Stats / credibility section------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="stats-showcase glass-card">
            <div className="stats-header">
              <h2 className="stats-title">Designed to Last</h2>
              <p className="stats-subtitle">
                Not a gimmick. A system built for the long haul.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-block">
                <div className="stat-number">8</div>
                <div className="stat-label">Week Programs</div>
                <div className="stat-note">with real progressive overload</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">10</div>
                <div className="stat-label">Level</div>
                <div className="stat-note">takes a full 8 weeks to reach</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">3</div>
                <div className="stat-label">Classes</div>
                <div className="stat-note">Barbarian, Rogue, Paladin</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">0</div>
                <div className="stat-label">Shortcuts</div>
                <div className="stat-note">core stats earned in the gym only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------CTA------------------------------------------------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-container glass-card">
            <h2 className="cta-title">Ready to Begin Your Quest?</h2>
            <p className="cta-description">
              Choose your class. Start your program. Build your character — for real.
            </p>
            <Link href="/sign-up" className="btn-primary">
              Create Your Character - Free
            </Link>
            <p className="cta-note">Your gains are your power. No shortcuts.</p>
          </div>
        </div>
      </section>

      {/*  same as landing page */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">⚔️</div>
                <span className="footer-logo-text">Dumbbells & Dragons</span>
              </div>
              <p className="footer-tagline">
                Level up your fitness with RPG mechanics
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Classes</Link></li>
                <li><Link href="#">Pricing</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2026 Dumbbells & Dragons. All rights reserved. Built by
              warriors, for warriors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}