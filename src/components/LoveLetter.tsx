import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import confetti from "canvas-confetti";
import { Calendar } from "@/components/ui/calendar";
import { FloatingHearts } from "@/components/FloatingHearts";
import { TulipCorners } from "@/components/TulipCorners";
import { Tulip } from "@/components/Tulip";
import { format } from "date-fns";

const ACTIVITIES = [
  { id: "pizza", label: "Pizza Date", emoji: "🍕" },
  { id: "jollibee", label: "Jollibee Date", emoji: "🍗" },
  { id: "mcdo", label: "McDonald's Date", emoji: "🍔" },
  { id: "chowking", label: "Chowking Date", emoji: "🥡" },
  { id: "coffee", label: "Coffee Date", emoji: "☕" },
  { id: "cinema", label: "Cinema Date", emoji: "🎬" },
<<<<<<< HEAD
  { id: "icecream", label: "Ice Cream Date", emoji: "🍦" },
  { id: "arcade", label: "Arcade Date", emoji: "🎮" },
  { id: "mall", label: "Mall Stroll Date", emoji: "🛍️" },
=======
>>>>>>> 68eb5a3eb49ba1310e924daa2f08367f7822f868
] as const;

type Stage = "hero" | "proposal" | "celebrate";

export function LoveLetter() {
  const [stage, setStage] = useState<Stage>("hero");
  const [activity, setActivity] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [validationMsg, setValidationMsg] = useState<string | null>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const proposalRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const selectedActivity = ACTIVITIES.find((a) => a.id === activity);

  useEffect(() => {
    if (stage === "proposal") {
      setTimeout(() => proposalRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [stage]);

  useEffect(() => {
    if (activity) {
      setTimeout(() => dateRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 400);
    }
  }, [activity]);

  const dodgeNo = () => {
    const maxX = typeof window !== "undefined" ? Math.min(window.innerWidth / 3, 200) : 150;
    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * 160;
    setNoPos({ x, y });
  };

  const handleYes = () => {
    if (!activity || !date) {
      setValidationMsg("Please choose our date plan first, my love 🥺❤️");
      setTimeout(() => setValidationMsg(null), 3500);
      return;
    }
    setStage("celebrate");
    fireCelebration();
  };

  const fireCelebration = () => {
    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ["#ff8fab", "#ffc2d1", "#e0aaff", "#ffd6e0", "#c8b6ff"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
        colors,
        scalar: 1.2,
        shapes: ["circle"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors,
        scalar: 1.2,
        shapes: ["circle"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      scalar: 1.5,
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <TulipCorners />

      {/* HERO */}
      <AnimatePresence mode="wait">
        {stage === "hero" && (
          <motion.section
            key="hero"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
              className="text-7xl sm:text-8xl mb-4"
            >
              💌
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-romantic font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-tight"
            >
<<<<<<< HEAD
              Hi Kat, My Baby ❤️
=======
              Hi Love ❤️
>>>>>>> 68eb5a3eb49ba1310e924daa2f08367f7822f868
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              I have something special to ask you...
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage("proposal")}
              className="mt-12 rounded-full px-10 py-5 text-lg sm:text-xl font-semibold text-primary-foreground animate-glow-pulse"
              style={{ background: "var(--gradient-rose)" }}
            >
              Click Me 🌷
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>

      {/* PROPOSAL */}
      {stage === "proposal" && (
        <motion.section
          ref={proposalRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 sm:px-6 py-16 sm:py-24 max-w-5xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="text-8xl sm:text-9xl mb-6 inline-block"
            >
              ❤️
            </motion.div>
            <h2 className="text-romantic font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Will You Go On A Date With Me? 🥺❤️
            </h2>
            <p
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Every moment with you is my favorite. I'd love to spend a special day together.
            </p>
          </div>

          {/* Activity cards */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-center font-display text-2xl sm:text-3xl font-semibold mb-8">
              🌷 Pick Our Date Plan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {ACTIVITIES.map((a, i) => {
                const selected = activity === a.id;
                return (
                  <motion.button
                    key={a.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActivity(a.id)}
                    className={`glass relative rounded-3xl p-5 sm:p-7 text-center transition-all ${
                      selected ? "animate-glow-pulse ring-2 ring-primary" : ""
                    }`}
                  >
                    <div className="text-5xl sm:text-6xl mb-3">{a.emoji}</div>
                    <div className="font-display text-lg sm:text-xl font-semibold">{a.label}</div>
                    <AnimatePresence>
                      {selected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-2 -right-2 text-3xl animate-heart-beat"
                        >
                          💖
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Date picker */}
          <AnimatePresence>
            {activity && (
              <motion.div
                ref={dateRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="mt-16 sm:mt-20"
              >
                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-romantic">
                    📅 Choose Our Special Day ❤️
                  </h3>
                  <p
                    className="mt-3 text-muted-foreground text-lg"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    Pick the day you'd like us to spend together.
                  </p>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute -left-4 -top-6 hidden sm:block animate-sway">
                    <Tulip size={56} color="#ff8fab" />
                  </div>
                  <div
                    className="absolute -right-4 -top-6 hidden sm:block animate-sway"
                    style={{ animationDelay: "1s" }}
                  >
                    <Tulip size={56} color="#c8b6ff" />
                  </div>
                  <motion.div
                    key={date?.toISOString() ?? "empty"}
                    animate={date ? { scale: [1, 1.04, 1] } : {}}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-3xl p-4 sm:p-6 pointer-events-auto"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < today}
                      className="pointer-events-auto"
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {date && selectedActivity && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="mt-8 glass rounded-3xl p-6 sm:p-8 max-w-lg mx-auto text-center"
                    >
                      <div className="text-3xl mb-2">🌷 Our Date</div>
                      <div className="mt-3 space-y-1 text-lg">
                        <p>
                          <span className="font-semibold">Activity:</span> {selectedActivity.emoji}{" "}
                          {selectedActivity.label}
                        </p>
                        <p>
                          <span className="font-semibold">Date:</span> {format(date, "EEEE, MMMM d, yyyy")}
                        </p>
                      </div>
                      <p
                        className="mt-4 text-muted-foreground"
                        style={{ fontFamily: "var(--font-script)", fontSize: "1.2rem" }}
                      >
                        I'll be counting down the days until our special date ❤️
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Love message */}
          <AnimatePresence>
            {activity && date && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 text-center max-w-2xl mx-auto"
              >
                <p className="font-display text-2xl sm:text-3xl text-romantic font-semibold">
                  I can't wait to spend time with you ❤️
                </p>
                <p
                  className="mt-3 text-muted-foreground text-lg"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  No matter what you choose, being with you is my favorite part.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Yes/No */}
          <div className="mt-16 relative flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[180px]">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ scale: { duration: 1.6, repeat: Infinity } }}
              onClick={handleYes}
              className="rounded-full px-10 py-5 text-lg sm:text-xl font-bold text-primary-foreground animate-glow-pulse"
              style={{ background: "var(--gradient-rose)" }}
            >
              ❤️ YES, I'D LOVE TO
            </motion.button>

            <motion.button
              animate={{ x: noPos.x, y: noPos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              onMouseEnter={dodgeNo}
              onTouchStart={(e) => {
                e.preventDefault();
                dodgeNo();
              }}
              onClick={dodgeNo}
              className="rounded-full px-8 py-4 text-lg font-semibold glass text-muted-foreground"
            >
              💔 NO
            </motion.button>
          </div>

          <AnimatePresence>
            {validationMsg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center"
              >
                <span className="glass inline-block rounded-full px-6 py-3 text-rose-500 font-semibold">
                  {validationMsg}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      )}

      {/* CELEBRATE */}
      <AnimatePresence>
        {stage === "celebrate" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            style={{ background: "var(--gradient-romantic)" }}
          >
            {/* Falling petals */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute text-3xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: 0,
                    animation: `petal-fall ${6 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`,
                  }}
                >
                  {["🌷", "💗", "✨", "🌸"][i % 4]}
                </span>
              ))}
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
                className="text-8xl sm:text-9xl mb-6 animate-heart-beat"
              >
                💖
              </motion.div>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-romantic font-display text-6xl sm:text-8xl font-bold"
              >
                YAY! ❤️
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 text-xl sm:text-2xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                You just made me the happiest person alive.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="glass rounded-3xl p-6 sm:p-8 mt-10 max-w-md w-full text-left space-y-3"
              >
                <p className="text-lg">
                  <span className="font-semibold">🌷 Date Plan:</span>{" "}
                  {selectedActivity?.emoji} {selectedActivity?.label}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">📅 Date:</span>{" "}
                  {date && format(date, "EEEE, MMMM d, yyyy")}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-lg"
                style={{ fontFamily: "var(--font-script)" }}
              >
                I can't wait to make beautiful memories with you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-3 font-display text-2xl sm:text-3xl text-romantic font-bold"
              >
                I love you so much ❤️🌷
              </motion.p>

              <div className="flex gap-4 mt-10 justify-center">
                <Tulip size={50} color="#ff8fab" className="animate-sway" />
                <Tulip size={60} color="#c8b6ff" className="animate-sway" />
                <Tulip size={50} color="#ffb3c6" className="animate-sway" />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-muted-foreground">
        <p style={{ fontFamily: "var(--font-script)", fontSize: "1.15rem" }}>
          Made with all my love, just for you ❤️🌷
        </p>
      </footer>
    </div>
  );
}
