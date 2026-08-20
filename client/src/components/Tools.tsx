const tools = [
  {
    icon: "fas fa-compass",
    title: "Find a Good First AI Project",
    description: "A practical way to spot work where AI can save real time: intake, routing, summarizing, reporting, research, and knowledge lookup.",
    details: ["Happens often", "Has clear inputs", "Has a result someone can review"],
    linkText: "Find my first project",
    href: "/#contact",
  },
  {
    icon: "fas fa-robot",
    title: "Automate One Annoying Workflow",
    description: "Pick one manual process, define the steps, connect the tools, and turn it into something your team no longer has to babysit.",
    details: ["List the steps", "Name the tools involved", "Decide where a human approves it"],
    linkText: "Automate a workflow",
    href: "/#contact",
  },
  {
    icon: "fas fa-comments",
    title: "Build an Internal AI Assistant",
    description: "Create a chat-style helper that answers questions from your docs, policies, SOPs, sales notes, or support knowledge base.",
    details: ["Choose trusted sources", "Limit who can access it", "Test with real questions"],
    linkText: "Plan an assistant",
    href: "/#contact",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Check Privacy, Access, and Cost",
    description: "Review what data AI can see, who can use it, what it costs, and where a quick experiment could become a tomorrow morning problem.",
    details: ["Protect private data", "Track usage and cost", "Log mistakes and fixes"],
    linkText: "Check the risks",
    href: "/#contact",
  },
];

export default function Tools() {
  return (
    <>
      {/* Tools Header */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-archivo font-bold text-onyx mb-6 leading-tight">
              AI Resources & Tools
            </h1>
            <p className="text-lg md:text-xl text-onyx/80 mb-8 max-w-xl mx-auto">
              Plain-English starting points for choosing and building useful AI projects
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/" className="inline-block px-6 py-3 text-lg border-2 border-pumpkin text-pumpkin rounded-md hover:bg-pumpkin/10 transition-colors w-full sm:w-auto text-center">
                Back to Home
              </a>
              <a 
                href="/#contact" 
                className="btn-primary inline-block px-6 py-3 text-lg w-full sm:w-auto text-center"
              >
                Talk Through an Idea
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {tools.map((tool) => (
                <div key={tool.title} className="bg-ivory rounded-lg p-6 hover:shadow-md transition-shadow transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-onyx rounded-full flex items-center justify-center mr-4 shadow-md text-pumpkin">
                      <i className={`${tool.icon} text-2xl`}></i>
                    </div>
                    <h2 className="text-2xl font-archivo font-bold text-onyx">{tool.title}</h2>
                  </div>
                  <p className="text-onyx/80 mb-4">
                    {tool.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                    {tool.details.map((detail) => (
                      <div key={detail} className="bg-white rounded-md px-3 py-2 text-sm text-onyx/70 flex items-center">
                        <i className="fas fa-check text-pumpkin mr-2"></i>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={tool.href}
                      className="inline-flex items-center text-pumpkin font-medium hover:underline"
                    >
                      <i className="fas fa-arrow-right mr-2"></i>
                      {tool.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 md:py-20 bg-pumpkin text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-archivo font-bold mb-6">Want Help Making One Of These Real?</h2>
            <p className="text-lg md:text-xl mb-8">
              We can help you choose the right AI use case, build a quick working version, connect it to your tools, and make sure privacy, access, and cost are handled too.
            </p>
            <a href="/#contact" className="inline-block bg-white text-pumpkin px-8 py-3 rounded-md font-archivo font-medium text-lg hover:bg-opacity-90 transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
