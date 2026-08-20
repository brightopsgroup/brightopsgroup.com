const steps = [
  {
    icon: "fas fa-search",
    title: "Pick one real problem",
    description: "We look for repetitive work with clear inputs and outputs: emails, tickets, reports, handoffs, docs, or approvals.",
  },
  {
    icon: "fas fa-list-check",
    title: "Map how it works today",
    description: "We document the current steps, tools, edge cases, data access, and who needs to trust the result.",
  },
  {
    icon: "fas fa-screwdriver-wrench",
    title: "Build a working version",
    description: "We connect the right tools, test the workflow with real examples, and keep humans in the loop where judgment matters.",
  },
  {
    icon: "fas fa-chart-simple",
    title: "Hand it over cleanly",
    description: "Your team gets simple instructions, cost visibility, and a path for improving the workflow after it launches.",
  },
];

export default function HowWeMakeAIUseful() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">How We Make AI Useful</h2>
          <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
            Start small, prove it works, then expand from there. No giant transformation deck required.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-ivory rounded-lg p-6 border-t-4 border-pumpkin hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-onyx rounded-full flex items-center justify-center text-pumpkin">
                  <i className={`${step.icon} text-xl`}></i>
                </div>
                <span className="font-archivo text-3xl text-onyx/20">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-archivo font-semibold text-onyx mb-3">{step.title}</h3>
              <p className="text-onyx/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
