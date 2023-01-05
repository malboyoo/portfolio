import BottomSection from "./components/BottomSection";
import TopSection from "./components/TopSection";

function Home() {
  return (
    <main className="flex-col flex-auto bg-dark-2">
      <TopSection />
      <BottomSection />
    </main>
  );
}

export default Home;
