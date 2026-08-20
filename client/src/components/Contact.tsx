export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-archivo font-bold text-onyx mb-4">Let's Talk AI</h2>
            <p className="text-lg text-onyx/80 max-w-2xl mx-auto">
              Tell us where work feels slow, repetitive, or weirdly manual. We'll help you figure out where AI can actually make a dent.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-onyx text-ivory p-6 md:p-8">
                <h3 className="text-xl font-archivo font-semibold mb-6">Where To Find Us</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-pumpkin">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-archivo font-medium">Email</h4>
                      <a href="mailto:brightopsgroup@gmail.com" className="text-ivory/80 hover:text-pumpkin transition-colors">brightopsgroup@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-pumpkin">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-archivo font-medium">Location</h4>
                      <p className="text-ivory/80">South Jordan, UT</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-archivo font-medium mb-4">Let's Connect</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/brightops-group" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-full border border-pumpkin flex items-center justify-center text-pumpkin hover:bg-pumpkin hover:text-white transition-colors" 
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8">
                <h3 className="text-xl font-archivo font-semibold text-onyx mb-4">Start With One Workflow</h3>
                <p className="text-onyx/80 mb-6">
                  Send a quick note with the process you want to improve. No polished brief needed. A messy description is usually enough to start.
                </p>
                <div className="bg-ivory rounded-lg p-5 mb-6">
                  <h4 className="font-archivo font-semibold text-onyx mb-4">Helpful things to include</h4>
                  <ul className="space-y-3 text-onyx/75">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-pumpkin mt-1 mr-3"></i>
                      <span>What your team repeats every week</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-pumpkin mt-1 mr-3"></i>
                      <span>Which tools or documents are involved</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-pumpkin mt-1 mr-3"></i>
                      <span>What a good result would look like</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="mailto:brightopsgroup@gmail.com?subject=AI%20workflow%20help"
                  className="w-full inline-block bg-pumpkin text-white py-3 rounded-md font-archivo font-medium hover:bg-pumpkin/90 transition-colors transform hover:-translate-y-1 text-center"
                >
                  Email BrightOps Group
                </a>
                <p className="text-sm text-onyx/60 mt-4 text-center">
                  Direct email: <a href="mailto:brightopsgroup@gmail.com" className="text-pumpkin hover:underline">brightopsgroup@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
