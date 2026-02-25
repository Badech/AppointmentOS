export default function Workflow() {
  const steps = [
    {
      number: "1",
      title: "Student Inquiry",
      description: "From any channel: web form, WhatsApp, social media, or phone",
      protection: "No student inquiry goes unnoticed"
    },
    {
      number: "2",
      title: "Instant AI Response",
      description: "Automatic reply within seconds, 24/7, even outside business hours",
      protection: "Capture student attention before they contact competitors"
    },
    {
      number: "3",
      title: "Smart Qualification",
      description: "AI asks the right questions to understand study goals and intent",
      protection: "Filter serious students from casual browsers"
    },
    {
      number: "4",
      title: "Consultation Booking",
      description: "Calendar link sent instantly with available consultation slots",
      protection: "Convert interest into scheduled appointments immediately"
    },
    {
      number: "5",
      title: "Follow-Up Reminders",
      description: "Smart automated reminders to reduce no-shows and re-engage",
      protection: "Keep prospects engaged until consultation day"
    },
    {
      number: "6",
      title: "Enrollment-Ready Call",
      description: "Qualified student shows up prepared for a productive consultation",
      protection: "Maximize enrollment conversion on every call"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            How AppointmentOS Protects Your Enrollment Pipeline
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            A proven workflow that transforms every student inquiry into a structured enrollment opportunity
          </p>
          
          {/* Workflow Steps - Desktop Horizontal */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs flex-grow mb-2">
                      {step.description}
                    </p>
                    <p className="text-blue-600 text-xs font-medium italic">
                      → {step.protection}
                    </p>
                  </div>
                </div>
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Workflow Steps - Mobile/Tablet Vertical */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {step.description}
                      </p>
                      <p className="text-blue-600 text-xs font-medium italic">
                        → {step.protection}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
