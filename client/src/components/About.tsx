export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-6">Who's Making AI Useful?</h2>
            <p className="text-lg text-onyx/80 mb-6">
              We're BrightOps Group - practical AI, cloud, and automation folks who make the complicated stuff usable.
            </p>
            <p className="text-lg text-onyx/80 mb-8">
              We saw too many teams getting buried in AI hype, scattered tools, and half-working automations. So we help turn the promising ideas into systems your people can actually trust, use, and improve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-check-circle text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">No Hype. Just Results.</h3>
              <p className="text-onyx/70">We skip the shiny-object circus and focus on AI that saves time, reduces friction, or opens a real opportunity.</p>
            </div>
            
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-comment-dots text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">Human Language Only</h3>
              <p className="text-onyx/70">We translate AI, automation, and cloud-speak into decisions normal humans can actually make. Revolutionary, right?</p>
            </div>
            
            <div className="bg-ivory rounded-lg p-6 text-center hover:shadow-md transition-shadow transform hover:-rotate-1">
              <div className="mb-4 text-pumpkin">
                <i className="fas fa-coins text-4xl"></i>
              </div>
              <h3 className="font-archivo font-semibold text-lg text-onyx mb-3">Costs Stay Sane</h3>
              <p className="text-onyx/70">AI can get expensive fast. We help you build useful systems without surprise bills or fragile infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
