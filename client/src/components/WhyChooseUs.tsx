export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-onyx text-ivory bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold mb-6">Why Teams Breathe Easier After Talking to Us</h2>
            <p className="text-lg text-ivory/80 mb-8">We're not here to sell AI theater. We're here to help you ship useful systems your team will actually use.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-rocket text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Operator DNA</h3>
                  <p className="text-ivory/70">We care about the messy middle: handoffs, tools, approvals, data quality, and all the small things that make work slow.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">AI That Respects Your Data</h3>
                  <p className="text-ivory/70">We help you move fast without casually spraying private data into tools nobody reviewed.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-cloud text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Cloud-Smart AI</h3>
                  <p className="text-ivory/70">Models are only part of the system. We understand the infrastructure, integrations, and costs underneath.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-pumpkin rounded-lg p-6 hover:bg-onyx/80 transition-colors hover:-translate-y-1 transform hover:shadow-glow">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-pumpkin">
                  <i className="fas fa-user-friends text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-archivo font-semibold text-lg mb-2">Actual Humans</h3>
                  <p className="text-ivory/70">We answer emails, explain tradeoffs clearly, and teach your team how the thing works after it ships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
