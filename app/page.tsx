export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black text-white">
      <header className="w-full h-screen flex flex-col justify-center items-center text-center border-b border-gray-700">
        <h1 className="text-5xl font-bold">Bienvenue sur mon Portfolio</h1>
        <p className="mt-2 text-lg text-white">
          Fauquet Sacha élève en dernière année de BUT Informatique à l'IUT de Lens
        </p>
        <p className="mt-2 text-lg text-white">
          Vous trouverez ici mes projets et compétences en développement web.
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
        >
          Voir mon CV
        </a>
      </header>

      <main className="flex flex-col items-center w-full">
        <section className="w-full h-screen flex flex-col justify-center items-center text-center border-b border-gray-700">
          <h2 className="text-3xl font-semibold mb-4">Compétences</h2>
          <ul className="text-lg grid grid-cols-2 gap-4">
            <li>⚙️ Symfony</li>
            <li>📜 JavaScript</li>
            <li>🌐 HTML</li>
            <li>🐘 PHP</li>
            <li>🎨 CSS</li>
            <li>📱 Flutter</li>
            <li>📱 Kotlin</li>
            <li>🔧 Git</li>
            <li>☕ Java</li>
            <li>🐍 Python</li>
            <li>🎯 Dart</li>
            <li>⚙️ Laravel</li>
          </ul>
        </section>

        <section className="w-full h-screen flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold mb-6">Projets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            <a
              href="https://github.com/SachaFauquet/ParaDice"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold">ParaDice</h3>
              <p className="text-gray-400">Une application mobile Flutter pour gérer des parties de jeux de dés.</p>
            </a>
            <a
              href="https://github.com/SachaFauquet/mangateque"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold">Mangateque</h3>
              <p className="text-gray-400">Une application mobile Flutter pour organiser et suivre votre collection de mangas.</p>
            </a>
            <a
              href="https://github.com/SachaFauquet/quizGame"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold">Quiz Game</h3>
              <p className="text-gray-400">Un jeu de quiz développé en Symfony.</p>
            </a>
            <a
              href="https://github.com/SachaFauquet/CT_Scan_Lung_cancer_classification"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold">CT Scan Lung Cancer Classification</h3>
              <p className="text-gray-400">Un modèle d'IA pour détecter les cancers du poumon à partir de scans CT.</p>
            </a>
          </div>
          <a
            href="https://github.com/SachaFauquet"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Voir mon GitHub
          </a>
        </section>
      </main>
    </div>
  );
}
