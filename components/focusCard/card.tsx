import { FocusCards } from "@/components/focusCard/focusCard";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "NextJS",
      src: "nextjs",
    },
    {
      title: "React",
      src: "reactjs",
    },
    {
      title: "Python",
      src: "python",
    },
    {
      title: "Javascript",
      src: "js",
    },
    {
      title: "ViteJS",
      src: "vitejs",
    },
    {
      title: "NodeJS",
      src: "nodejs",
    },
    // --------------
    {
      title: "PWA",
      src: "pwa",
    },
    {
      title: "Android",
      src: "android",
    },
    {
      title: "Grafana",
      src: "grafana",
    },
    {
      title: "ThreeJS",
      src: "threejs",
    },
    {
      title: "Tailwind",
      src: "tailwindcss",
    },
    {
      title: "Adobe",
      src: "adobe",
    },
    // --------------
    {
      title: "AWS",
      src: "aws",
    },
    {
      title: "Google Cloud",
      src: "gcloud",
    },
    {
      title: "Netlify",
      src: "netlify",
    },
    {
      title: "Auth0",
      src: "auth0",
    },
    {
      title: "Google Analytics",
      src: "analytics",
    },
    {
      title: "Open AI",
      src: "openai",
    },
  ];

  return <FocusCards cards={cards} />;
}
