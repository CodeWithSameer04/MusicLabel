import './App.css';
// Update the import path to a relative path (adjust as needed based on your folder structure)
import { HeroSection } from "./components/blocks/galaxy-interactive-hero-section";
// from "./components/blocks/navbar-demo"; // Adjust the import path as necessary
import { Navbar } from "./components/blocks/navbar"; // Adjust the import path as necessary
export function HeroSectionBasic() {
  return (
    <main className="bg-black relative h-screen w-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}

function App() {
  return <HeroSectionBasic />;
}

export default App;
