export default function TrustStrip() {
  const industries = [
    "Study Abroad Agencies",
    "International Student Recruiters",
    "Education Consultants"
  ]

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Label */}
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Built for:
          </p>
          
          {/* Industries */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center">
                <span className="text-sm md:text-base font-medium text-gray-800">
                  {industry}
                </span>
                {index < industries.length - 1 && (
                  <span className="mx-3 md:mx-4 text-gray-300">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
