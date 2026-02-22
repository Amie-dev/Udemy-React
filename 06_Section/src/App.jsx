import React from "react";
import BasicProps from "./components/BasicProps";
import RefProps from "./components/RefProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggle, { ThemeProvider, useTheme } from "./components/ThemeToggle";

function Navigation() {
  const  isDark  = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-800"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive guide to understanding props in React
          </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-20">
            <BasicProps />
          </div>
          <div id="children" className="scroll-mt-20">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-20">
            <ComplexProps />
          </div>
          <div id="ref" className="scroll-mt-20">
            <RefProps />
          </div>
          <div id="theme" className="scroll-mt-20">
            <ThemeToggle />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with 💖 using Vite, React and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
