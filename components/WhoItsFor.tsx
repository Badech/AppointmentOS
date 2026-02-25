export default function WhoItsFor() {
  const targetAudience = [
    "Agencies handling international student recruitment",
    "Teams managing high WhatsApp inquiry volume",
    "Agencies running ads for student leads",
    "Agencies looking to reduce manual follow-up"
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Built for Study Abroad Agencies <span className="gradient-text">That Want Structured Growth</span>
          </h2>
          
          {/* Target Audience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {targetAudience.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-start"
              >
                <div className="text-blue-600 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
