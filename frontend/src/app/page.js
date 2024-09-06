import Image from "next/image";
import { LandingPage } from "../components/component/landing-page";

export default function Home() {
  return (
    <div className="grid grid-rows-[5px_1fr_5px] items-center justify-items-center  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LandingPage/>
      </main>
    </div>
  );
}
