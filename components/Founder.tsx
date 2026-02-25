export default function Founder() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="text-center">
              {/* Founder Name */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Built by <span className="gradient-text">Bader Echchalh</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                AppointmentOS was created to help study abroad agencies eliminate manual lead handling and implement a structured enrollment workflow designed for student-driven businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
