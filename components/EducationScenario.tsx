export default function EducationScenario() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Example: <span className="gradient-text">Study Abroad Agency</span> Scenario
          </h2>
          
          {/* Scenario Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Imagine your agency receives <strong>30 student inquiries per week</strong>.
            </p>
            
            {/* Two Column Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without AppointmentOS */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Without Instant Structured Follow-Up
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">Some students lose interest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">Some contact multiple agencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">Some never receive proper qualification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">Some never book</span>
                  </li>
                </ul>
              </div>
              
              {/* With AppointmentOS */}
              <div className="space-y-4 bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  With AppointmentOS
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 font-medium">Every student receives instant reply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 font-medium">Qualification happens automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 font-medium">Booking becomes structured</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 font-medium">Follow-up reduces drop-off</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-800 font-medium">Your calendar becomes predictable</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
