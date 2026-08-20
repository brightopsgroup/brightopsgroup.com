export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-archivo font-bold text-onyx mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-archivo font-bold text-onyx mb-4">This Page Wandered Off</h2>
        <p className="text-lg text-onyx/80 mb-8">
          The page is missing, but we can still get you back to the useful stuff.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="/"
            className="btn-primary inline-block px-8 py-4 text-lg w-full sm:w-auto text-center transform transition-all duration-300 hover:scale-105 rounded-lg shadow-lg hover:shadow-glow"
          >
            Back to Home
          </a>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 text-lg border-2 border-pumpkin text-pumpkin rounded-lg hover:bg-pumpkin/10 transition-all w-full sm:w-auto text-center transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
