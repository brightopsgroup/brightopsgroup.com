export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-pumpkin text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-05 bg-pattern pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-archivo font-bold mb-6 leading-tight">
          Ready to Turn <span className="underline decoration-ivory decoration-4 underline-offset-4">AI Ideas</span> Into <span className="underline decoration-ivory decoration-4 underline-offset-4">Useful Workflows</span>?
        </h2>
        <p className="text-lg md:text-xl mb-12 mx-auto opacity-90 max-w-3xl">
          Whether you need a practical plan, one workflow automated, or an internal AI assistant your team can trust, we can help you make AI useful without making everything complicated.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-block bg-white text-pumpkin px-8 py-4 rounded-lg font-archivo font-medium text-lg hover:bg-opacity-95 transition-all shadow-lg hover:-translate-y-1 focus:ring-2 focus:ring-white"
          >
            Talk Through My AI Ideas
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-block bg-transparent text-white px-8 py-4 rounded-lg font-archivo font-medium text-lg border-2 border-white hover:bg-white/10 transition-all transform hover:-translate-y-1 focus:ring-2 focus:ring-white"
          >
            Automate One Workflow
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm">
            <i className="fas fa-check-circle text-xl mr-3 text-ivory"></i>
            <span className="text-lg font-medium">No AI theater</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm">
            <i className="fas fa-check-circle text-xl mr-3 text-ivory"></i>
            <span className="text-lg font-medium">Free initial chat</span>
          </div>
          <div className="flex items-center justify-center bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm">
            <i className="fas fa-check-circle text-xl mr-3 text-ivory"></i>
            <span className="text-lg font-medium">Safe AI setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
