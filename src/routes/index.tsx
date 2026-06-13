import { createFileRoute } from "@tanstack/react-router";
import { LoveLetter } from "@/components/LoveLetter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Will You Go On A Date With Me? 🌷❤️" },
      { name: "description", content: "A magical digital love letter — will you go on a date with me?" },
      { property: "og:title", content: "Will You Go On A Date With Me? 🌷❤️" },
      { property: "og:description", content: "A magical digital love letter — will you go on a date with me?" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Dancing+Script:wght@500;600;700&family=Quicksand:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LoveLetter />;
}
