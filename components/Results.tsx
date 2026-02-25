export default function Results() {
  const results = [
    "Faster student response times",
    "More structured consultations",
    "Reduced lost inquiries",
    "Better calendar organization",
    "More predictable enrollment calls"
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Typical Results Businesses <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            When you implement a structured appointment workflow
          </p>
          
          {/* Results List */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
            <ul className="space-y-6">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl text-gray-800 font-medium">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
