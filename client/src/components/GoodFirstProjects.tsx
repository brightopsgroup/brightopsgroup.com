const projects = [
  "Triage customer emails or support tickets",
  "Summarize long calls, notes, or documents",
  "Answer questions from SOPs and policies",
  "Draft proposals, follow-ups, or status updates",
  "Clean up CRM notes and next steps",
  "Build weekly reports from scattered inputs",
];

export default function GoodFirstProjects() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">Good First AI Projects</h2>
            <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
              The best first projects are boring in the best way: frequent, clear, measurable, and annoying enough that people will actually use the fix.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project} className="bg-white rounded-lg p-5 flex items-start border border-onyx/10 hover:shadow-md transition-shadow">
                <i className="fas fa-check-circle text-pumpkin mt-1 mr-3"></i>
                <p className="text-onyx/80 font-medium">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
