import { Sword, Zap, Trophy, TrendingUp, Users, Target } from "lucide-react";
import Link from "next/link";
import SignInBar from "@/components/SignInBar/SignInBar";
import "./page.css";
import Image from "next/image";
import PaladinDetails from "@/components/ClassDetails/PaladinDetails";
import RogueDetails from "@/components/ClassDetails/RogueDetails";
import BarbarianDetails from "@/components/ClassDetails/BarbarianDetails";
import styles from "@/app/choose-class/choose-class.module.css";
import { classData } from "@/lib/mockData";

export const metadata = {
  title: "Dumbbells and Dragons",
  description:
    "Dumbbells & Dragon transforms workouts into epic quests. Pick your hero, choose your class, and start training. Take on your workout bravely, like a true champion and gain experience, strength, and glory in Dumbbells & Dragons.",
  openGraph: {
    title: "Workouts | Dumbbells & Dragon",
    description:
      "A fantasy fitness quest inspired by Dungeons & Dragons. Train hard and unlock your true power.",
  },
};

export default async function LandingPage({ searchParams }) {
  const classChoice = await searchParams;

  return (
    <div className="page-wrapper">
      <SignInBar />

      {/* ---------------------------------------------------Hero section------------------------------------------------- */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-blob gradient-blob-1" />
          <div className="gradient-blob gradient-blob-2" />
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-gradient">
                <Image
                    src="/feature.png"
                    alt="feature graph"
                    width={500}
                    height={500}
                  />
                  LEVEL UP YOUR FITNESS
              </span>
            </h1>
            
            <p className="hero-description">
              Transform your workouts into an epic RPG adventure. Choose your
              class, earn XP, and watch your character grow stronger with every
              rep.
            </p>
            <div className="hero-buttons">
              <Link href="/sign-up" className="btn-primary">
                Start Your Quest
              </Link>
            </div>
          </div>

          {/* Mock up -------------------------------------------------------------> Hero Character Preview */}
          <div className="hero-preview">
            <div className="character-card">
              <div className="character-preview">
                <div className="character-avatar">
                  <Image
                    src="/barbarian.png"
                    alt="Barbarian"
                    width={200}
                    height={200}
                  />
                </div>
                {/* dice = placeholder till i have more time on the sprites/gifs -----------------------------*/}
                <div className="character-details">
                  <h3 className="character-name">Bob the Barbarian</h3>
                  <p className="character-class">Level 12 Barbarian</p>
                  <div className="xp-section">
                    <div className="xp-header">
                      <span className="xp-label">XP Progress</span>
                      <span className="xp-value">850 / 1200</span>
                    </div>
                    <div className="xp-bar-container">
                      <div className="xp-bar" style={{ width: "70%" }} />
                    </div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-label">💪 Strength</div>
                      <div className="stat-value">85</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-label">🏃 Stamina</div>
                      <div className="stat-value">42</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-label">❤️ Vitality</div>
                      <div className="stat-value">68</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works section ... could maybe add links / modal or more details. something to discuss */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">
              Three simple steps to transform your fitness
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card glass-card">
              <div className="step-emoji">🎯</div>
              <div className="step-number">01</div>
              <h3 className="step-title">Choose Your Class</h3>
              <p className="step-description">
                Pick a character class that matches your fitness goals and
                training style.
              </p>
            </div>

            <div className="step-card glass-card">
              <div className="step-emoji">💪</div>
              <div className="step-number">02</div>
              <h3 className="step-title">Train & Earn XP</h3>
              <p className="step-description">
                Log your workouts and watch them convert into experience points.
              </p>
            </div>

            <div className="step-card glass-card">
              <div className="step-emoji">🏆</div>
              <div className="step-number">03</div>
              <h3 className="step-title">Level Up</h3>
              <p className="step-description">
                Gain levels, unlock achievements, and see your character grow
                stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Path</h2>
            <p id="classDetails" className="section-description">
              Each class offers unique training programs and progression
            </p>
          </div>

          {/* Class Cards - Static for now we can add modals later or pages /about ... something to discuss */}
          <div className="class-selector">
            <div className="class-card glass-card">
              <Link href={`/?class=Barbarian#classDetails`}>
                <div className="class-icon">
                  <Image
                    src="/barbarian.png"
                    alt="Barbarian"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="class-name">Barbarian</h3>
                <p className="class-tagline">Master of Raw Strength</p>
                <p className="class-description">
                  Dominate with heavy compound lifts and progressive overload
                </p>
              </Link>
            </div>

            <div className="class-card glass-card">
              <Link href={`/?class=Rogue#classDetails`}>
                <div className="class-icon">
                  <Image
                    src="/rogue.gif"
                    alt="Rogue"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="class-name">Rogue</h3>
                <p className="class-tagline">Agility & Control</p>
                <p className="class-description">
                  Master bodyweight movements and calisthenics
                </p>
              </Link>
            </div>

            <div className="class-card glass-card">
              <Link href={`/?class=Paladin#classDetails`}>
                <div className="class-icon">
                  <Image
                    src="/knight_type_a.png"
                    alt="paladin"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="class-name">Paladin</h3>
                <p className="class-tagline">Balanced Warrior</p>
                <p className="class-description">
                  Combine strength training with endurance work
                </p>{" "}
              </Link>
            </div>
          </div>

          {/* Example Class Details mock up  */}
          {/* Annabel to make this dynamic like choose class */}
          {classChoice.class === "Barbarian" ? (
            <>
              <BarbarianDetails
                styles={styles}
                classData={classData}
                classChoice={classChoice}
              />
            </>
          ) : classChoice.class === "Rogue" ? (
            <>
              <RogueDetails
                styles={styles}
                classData={classData}
                classChoice={classChoice}
              />
            </>
          ) : classChoice.class === "Paladin" ? (
            <>
              <PaladinDetails
                styles={styles}
                classData={classData}
                classChoice={classChoice}
              />
            </>
          ) : null}
          {/* <div className="class-details-showcase glass-card">
            <div className="class-showcase-header">
              <div className="class-showcase-icon">🪓</div>
              <div>
                <h3 className="class-showcase-name">Barbarian</h3>
                <p className="class-showcase-tagline">Master of Raw Strength</p>
              </div>
            </div>
            <div className="class-showcase-content">
              <div className="class-showcase-info">
                <h4 className="showcase-title">Training Focus:</h4>
                <ul className="showcase-list">
                  <li>
                    <span className="showcase-bullet">▸</span> Heavy Squats
                  </li>
                  <li>
                    <span className="showcase-bullet">▸</span> Deadlifts
                  </li>
                  <li>
                    <span className="showcase-bullet">▸</span> Bench Press
                  </li>
                </ul>
              </div>
              <div className="class-showcase-stats">
                <h4 className="showcase-title">Starting Stats:</h4>
                <div className="showcase-stat">
                  <span>Strength</span>
                  <div className="showcase-bar-bg">
                    <div
                      className="showcase-bar barbarian-gradient"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="showcase-stat">
                  <span>Stamina</span>
                  <div className="showcase-bar-bg">
                    <div
                      className="showcase-bar barbarian-gradient"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
                <div className="showcase-stat">
                  <span>Agility</span>
                  <div className="showcase-bar-bg">
                    <div
                      className="showcase-bar barbarian-gradient"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Features to make it look more professional--------- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Epic Features</h2>
            <p className="section-description">
              Everything you need to gamify your fitness journey
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <Zap className="feature-icon" />
              </div>
              <h3 className="feature-title">XP System</h3>
              <p className="feature-description">
                Every rep counts. Turn your workouts into experience points and
                watch your character grow.
              </p>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <Target className="feature-icon" />
              </div>
              <h3 className="feature-title">Custom Programs</h3>
              <p className="feature-description">
                Get a training program tailored to your class with progressive
                overload built in.
              </p>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <Trophy className="feature-icon" />
              </div>
              <h3 className="feature-title">Achievements</h3>
              <p className="feature-description">
                Unlock badges, equipment, and titles as you hit milestones and
                build consistency.
              </p>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <TrendingUp className="feature-icon" />
              </div>
              <h3 className="feature-title">Track Progress</h3>
              <p className="feature-description">
                Visualize your gains with detailed stats, charts, and workout
                history.
              </p>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <Users className="feature-icon" />
              </div>
              <h3 className="feature-title">Join the Quest</h3>
              <p className="feature-description">
                Be part of a community transforming their fitness journey into
                an epic adventure.
              </p>
            </div>

            <div className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                <Sword className="feature-icon" />
              </div>
              <h3 className="feature-title">Level Up</h3>
              <p className="feature-description">
                Each workout brings you closer to your next level. Watch your
                character evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section ... not really needed but i think it really makes this a marketing page ...  */}
      <section className="section">
        <div className="container">
          <div className="cta-container glass-card">
            <h2 className="cta-title">Ready to Begin Your Quest?</h2>
            <p className="cta-description">
              Join thousands of warriors leveling up their fitness journey!
            </p>
            <Link href="/sign-up" className="btn-primary">
              Create Your Character - Free
            </Link>
            {/* just another sign up link ----- happy to remove if people dont link it */}
            <p className="cta-note">Take the guess work out of your training</p>
          </div>
        </div>
      </section>

      {/* Footer... nothing in this footer is function at all but i think it makes it look more professional .. i thought about adding my company PixelPainted Ltd as a placeholder but settled on "dumbbells and dragons" */}
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
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Classes</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
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
