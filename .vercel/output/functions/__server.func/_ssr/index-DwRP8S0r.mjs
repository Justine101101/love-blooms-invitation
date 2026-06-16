import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { f as format } from "../_libs/date-fns.mjs";
import { g as getDefaultClassNames, D as DayPicker } from "../_libs/react-day-picker.mjs";
import { C as ChevronLeft, a as ChevronRight, b as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/date-fns__tz.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn(className2), ...props2 });
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { ...props2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}
function FloatingHearts({ count = 18 }) {
  const hearts = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 14,
      size: 12 + Math.random() * 22,
      opacity: 0.3 + Math.random() * 0.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", "aria-hidden": "true", children: hearts.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute",
      style: {
        left: `${h.left}%`,
        bottom: `-40px`,
        fontSize: `${h.size}px`,
        opacity: h.opacity,
        animation: `float-up ${h.duration}s linear ${h.delay}s infinite`
      },
      children: Math.random() > 0.5 ? "💗" : "🌷"
    },
    h.id
  )) });
}
function Tulip({ className, color = "#f48fb1", stemColor = "#7cb685", size = 60 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className,
      width: size,
      height: size * 1.6,
      viewBox: "0 0 60 96",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30 38 Q28 60 30 92", stroke: stemColor, strokeWidth: "3", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M30 68 Q14 60 10 76 Q20 78 30 72 Z",
            fill: stemColor,
            opacity: "0.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M30 8 Q12 12 12 30 Q12 42 30 44 Q48 42 48 30 Q48 12 30 8 Z",
            fill: color
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M30 8 Q22 18 22 32 Q22 42 30 44 Q38 42 38 32 Q38 18 30 8 Z",
            fill: color,
            opacity: "0.75"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "30", cy: "14", rx: "4", ry: "6", fill: "white", opacity: "0.35" })
      ]
    }
  );
}
function TulipCorners() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-0", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -left-4 animate-sway", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 70, color: "#f8a5c2" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-6 animate-sway", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 64, color: "#e0aaff", stemColor: "#8db580" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-2 animate-sway", style: { animationDelay: "0.5s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 80, color: "#ffb3c6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 animate-sway", style: { animationDelay: "1.5s" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 74, color: "#c8b6ff", stemColor: "#8db580" }) })
  ] });
}
const ACTIVITIES = [
  { id: "pizza", label: "Pizza Date", emoji: "🍕" },
  { id: "jollibee", label: "Jollibee Date", emoji: "🍗" },
  { id: "mcdo", label: "McDonald's Date", emoji: "🍔" },
  { id: "chowking", label: "Chowking Date", emoji: "🥡" },
  { id: "coffee", label: "Coffee Date", emoji: "☕" },
  { id: "cinema", label: "Cinema Date", emoji: "🎬" },
  { id: "icecream", label: "Ice Cream Date", emoji: "🍦" },
  { id: "arcade", label: "Arcade Date", emoji: "🎮" },
  { id: "mall", label: "Mall Stroll Date", emoji: "🛍️" }
];
function LoveLetter() {
  const [stage, setStage] = reactExports.useState("hero");
  const [activity, setActivity] = reactExports.useState(null);
  const [date, setDate] = reactExports.useState();
  const [validationMsg, setValidationMsg] = reactExports.useState(null);
  const [noPos, setNoPos] = reactExports.useState({ x: 0, y: 0 });
  const proposalRef = reactExports.useRef(null);
  const dateRef = reactExports.useRef(null);
  const today = reactExports.useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const selectedActivity = ACTIVITIES.find((a) => a.id === activity);
  reactExports.useEffect(() => {
    if (stage === "proposal") {
      setTimeout(() => proposalRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  }, [stage]);
  reactExports.useEffect(() => {
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
    const duration = 4e3;
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
        shapes: ["circle"]
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
        colors,
        scalar: 1.2,
        shapes: ["circle"]
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      scalar: 1.5
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingHearts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TulipCorners, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: stage === "hero" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.6 },
        className: "relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scale: 0, rotate: -180 },
              animate: { scale: 1, rotate: 0 },
              transition: { type: "spring", stiffness: 80, delay: 0.2 },
              className: "text-7xl sm:text-8xl mb-4",
              children: "💌"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5, duration: 0.8 },
              className: "text-romantic font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-tight",
              children: "Hi Kat, My Baby ❤️"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.9, duration: 0.8 },
              className: "mt-6 text-xl sm:text-2xl text-muted-foreground max-w-xl",
              style: { fontFamily: "var(--font-script)" },
              children: "I have something special to ask you..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 1.3, type: "spring", stiffness: 200 },
              whileHover: { scale: 1.08, y: -4 },
              whileTap: { scale: 0.95 },
              onClick: () => setStage("proposal"),
              className: "mt-12 rounded-full px-10 py-5 text-lg sm:text-xl font-semibold text-primary-foreground animate-glow-pulse",
              style: { background: "var(--gradient-rose)" },
              children: "Click Me 🌷"
            }
          )
        ]
      },
      "hero"
    ) }),
    stage === "proposal" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        ref: proposalRef,
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "relative z-10 px-4 sm:px-6 py-16 sm:py-24 max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.15, 1] },
                transition: { duration: 1.4, repeat: Infinity },
                className: "text-8xl sm:text-9xl mb-6 inline-block",
                children: "❤️"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-romantic font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight", children: "Will You Go On A Date With Me? 🥺❤️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto",
                style: { fontFamily: "var(--font-script)" },
                children: "Every moment with you is my favorite. I'd love to spend a special day together."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 sm:mt-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-display text-2xl sm:text-3xl font-semibold mb-8", children: "🌷 Pick Our Date Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: ACTIVITIES.map((a, i) => {
              const selected = activity === a.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: i * 0.08 },
                  whileHover: { y: -6, scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  onClick: () => setActivity(a.id),
                  className: `glass relative rounded-3xl p-5 sm:p-7 text-center transition-all ${selected ? "animate-glow-pulse ring-2 ring-primary" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl sm:text-6xl mb-3", children: a.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg sm:text-xl font-semibold", children: a.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        exit: { scale: 0, opacity: 0 },
                        className: "absolute -top-2 -right-2 text-3xl animate-heart-beat",
                        children: "💖"
                      }
                    ) })
                  ]
                },
                a.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              ref: dateRef,
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0 },
              transition: { duration: 0.7 },
              className: "mt-16 sm:mt-20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl sm:text-4xl font-bold text-romantic", children: "📅 Choose Our Special Day ❤️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "mt-3 text-muted-foreground text-lg",
                      style: { fontFamily: "var(--font-script)" },
                      children: "Pick the day you'd like us to spend together."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 -top-6 hidden sm:block animate-sway", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 56, color: "#ff8fab" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -right-4 -top-6 hidden sm:block animate-sway",
                      style: { animationDelay: "1s" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 56, color: "#c8b6ff" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: date ? { scale: [1, 1.04, 1] } : {},
                      transition: { duration: 0.6 },
                      className: "glass rounded-3xl p-4 sm:p-6 pointer-events-auto",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Calendar,
                        {
                          mode: "single",
                          selected: date,
                          onSelect: setDate,
                          disabled: (d) => d < today,
                          className: "pointer-events-auto"
                        }
                      )
                    },
                    date?.toISOString() ?? "empty"
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: date && selectedActivity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    className: "mt-8 glass rounded-3xl p-6 sm:p-8 max-w-lg mx-auto text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "🌷 Our Date" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-lg", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Activity:" }),
                          " ",
                          selectedActivity.emoji,
                          " ",
                          selectedActivity.label
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Date:" }),
                          " ",
                          format(date, "EEEE, MMMM d, yyyy")
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "mt-4 text-muted-foreground",
                          style: { fontFamily: "var(--font-script)", fontSize: "1.2rem" },
                          children: "I'll be counting down the days until our special date ❤️"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activity && date && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              className: "mt-16 text-center max-w-2xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl sm:text-3xl text-romantic font-semibold", children: "I can't wait to spend time with you ❤️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mt-3 text-muted-foreground text-lg",
                    style: { fontFamily: "var(--font-script)" },
                    children: "No matter what you choose, being with you is my favorite part."
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[180px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileHover: { scale: 1.12 },
                whileTap: { scale: 0.96 },
                animate: { scale: [1, 1.05, 1] },
                transition: { scale: { duration: 1.6, repeat: Infinity } },
                onClick: handleYes,
                className: "rounded-full px-10 py-5 text-lg sm:text-xl font-bold text-primary-foreground animate-glow-pulse",
                style: { background: "var(--gradient-rose)" },
                children: "❤️ YES, I'D LOVE TO"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                animate: { x: noPos.x, y: noPos.y },
                transition: { type: "spring", stiffness: 300, damping: 18 },
                onMouseEnter: dodgeNo,
                onTouchStart: (e) => {
                  e.preventDefault();
                  dodgeNo();
                },
                onClick: dodgeNo,
                className: "rounded-full px-8 py-4 text-lg font-semibold glass text-muted-foreground",
                children: "💔 NO"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: validationMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0 },
              className: "mt-6 text-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass inline-block rounded-full px-6 py-3 text-rose-500 font-semibold", children: validationMsg })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: stage === "celebrate" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.section,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "fixed inset-0 z-50 overflow-y-auto",
        style: { background: "var(--gradient-romantic)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden", "aria-hidden": "true", children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute text-3xl",
              style: {
                left: `${Math.random() * 100}%`,
                top: 0,
                animation: `petal-fall ${6 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`
              },
              children: ["🌷", "💗", "✨", "🌸"][i % 4]
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { type: "spring", stiffness: 120, delay: 0.2 },
                className: "text-8xl sm:text-9xl mb-6 animate-heart-beat",
                children: "💖"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.5 },
                className: "text-romantic font-display text-6xl sm:text-8xl font-bold",
                children: "YAY! ❤️"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 },
                className: "mt-4 text-xl sm:text-2xl",
                style: { fontFamily: "var(--font-script)" },
                children: "You just made me the happiest person alive."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1 },
                className: "glass rounded-3xl p-6 sm:p-8 mt-10 max-w-md w-full text-left space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "🌷 Date Plan:" }),
                    " ",
                    selectedActivity?.emoji,
                    " ",
                    selectedActivity?.label
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "📅 Date:" }),
                    " ",
                    date && format(date, "EEEE, MMMM d, yyyy")
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.3 },
                className: "mt-8 text-lg sm:text-xl text-muted-foreground max-w-lg",
                style: { fontFamily: "var(--font-script)" },
                children: "I can't wait to make beautiful memories with you."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.6 },
                className: "mt-3 font-display text-2xl sm:text-3xl text-romantic font-bold",
                children: "I love you so much ❤️🌷"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-10 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 50, color: "#ff8fab", className: "animate-sway" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 60, color: "#c8b6ff", className: "animate-sway" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tulip, { size: 50, color: "#ffb3c6", className: "animate-sway" })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 py-10 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "var(--font-script)", fontSize: "1.15rem" }, children: "Made with all my love, just for you ❤️🌷" }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LoveLetter, {});
}
export {
  Index as component
};
