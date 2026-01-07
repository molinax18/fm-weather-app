import Search from "@/features/search/search";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`flex-col gap-lg ${style["hero-wrapper"]}`}>
      <h1 className="title text-preset-lg">How's the sky looking today?</h1>
      <Search />
    </section>
  );
}
