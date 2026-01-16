import DanceCard from './components/DanceCard'


function App() {
  return (
    <div>
      {/* Hero */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 px-4">
        <h1 className="text-white text-5xl font-bold mb-4">The World Is Dancing 🌍</h1>
        <p className="text-white text-lg max-w-xl mb-8">
          Discover cultural dances from across the globe.
        </p>
        <button className="bg-white text-purple-500 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition">
          Explore Dances
        </button>
      </header>

      {/* Dance Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Dances</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <DanceCard title="African Dance" description="Traditional rhythms and movements from Africa." />
          <DanceCard title="Latin Dance" description="Salsa, Bachata and Tango from Latin America." />
          <DanceCard title="Indian Dance" description="Classical and folk dances from India." />
        </div>
      </section>
    </div>
  );
}

export default App;
