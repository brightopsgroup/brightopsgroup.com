export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">AI Help That Buys Back Your Week</h2>
          <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
            Clear advice, useful automations, and AI helpers that answer questions or finish repetitive work without turning your business into a science fair project.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-lightbulb text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Find the Right AI Projects</h3>
            <p className="text-onyx/70 flex-grow">
              We find where AI can actually help: repeatable work, messy handoffs, buried knowledge, slow reporting, and expensive manual processes.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Find the wins</a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-robot text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Automate Repetitive Work</h3>
            <p className="text-onyx/70 flex-grow">
              We connect the tools your team already uses and automate the annoying parts: intake, routing, summarizing, reporting, and follow-up.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Automate it</a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-comments text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Internal AI Assistants</h3>
            <p className="text-onyx/70 flex-grow">
              Chat-style helpers that can answer questions from your policies, support docs, sales notes, SOPs, or knowledge base.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Build the assistant</a>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-sm border-l-4 border-pumpkin p-6 flex flex-col h-full hover:shadow-md transition-shadow hover:-translate-y-1">
            <div className="text-pumpkin mb-4">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-archivo font-semibold text-onyx mb-3">Set Up AI Safely</h3>
            <p className="text-onyx/70 flex-grow">
              We help with data access, permissions, cloud setup, logging, and cost controls so AI projects do not create new headaches.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="#contact" className="inline-block text-pumpkin font-medium hover:underline">Set it up right</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
