import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in | SDT",
  description:
    "Log in to use SDT's AI tools. Enhance your web design projects with our advanced AI solutions tailored for web design agencies.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
