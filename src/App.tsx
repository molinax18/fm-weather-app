import Header from "./components/Header";

export default function App() {
  return (
    <div className="grid grid-rows-[min-content_1fr] gap-y-12 w-[90%] max-w-350 mx-auto min-h-screen">
      <Header />
      <main>Main</main>
    </div>
  );
}
