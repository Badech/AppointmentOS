export default function ExampleScenario() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Example Scenario
          </h2>
          
          {/* Scenario Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-sm">
            {/* Opening Statement */}
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">
              Imagine receiving 30 inquiries per week.
            </p>
            
            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Without AppointmentOS */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Without instant structured follow-up:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Some leads forget</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Some book competitors</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Some never get called</span>
                  </li>
                </ul>
              </div>
              
              {/* With AppointmentOS */}
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-200">
                <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  With AppointmentOS:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Every lead gets instant response</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Only qualified prospects book</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Follow-ups reduce no-shows</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Calendar becomes predictable</span>
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
