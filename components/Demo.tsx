export default function Demo() {
  const screenshots = [
    {
      title: "Instant Reply Example",
      description: "See how leads get an immediate, personalized response"
    },
    {
      title: "Qualification Flow",
      description: "AI-powered questions to understand prospect needs"
    },
    {
      title: "Booking Confirmation",
      description: "Seamless calendar integration and appointment confirmation"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            See the Workflow <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Live demo available upon request
          </p>
          
          {/* Video Placeholder */}
          <div className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl border border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 font-medium">Demo Video Placeholder</p>
                <p className="text-gray-400 text-sm mt-2">Request access to see the full workflow demo</p>
              </div>
            </div>
          </div>
          
          {/* Screenshot Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-md border border-gray-200 flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 mx-auto text-blue-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-400 text-sm font-medium">Screenshot Placeholder</p>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
