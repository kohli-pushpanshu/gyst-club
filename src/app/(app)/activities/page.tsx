'use client'

import Image from 'next/image'
import Carousel from '../../../../components/ui/carousel'
import Footer from '../../../../components/ui/Footer'

const slideData = [
  {
    title: 'Youth Festival',
    button: { text: 'Explore Now', href: '/activity/expression' },
    src: '/record.jpg',
  },
  {
    title: 'Value Educations',
    button: { text: 'Explore Now', href: '/activity/value-education' },
    src: '/valueEdu.jpg',
  },
  {
    title: 'De-addiction Program',
    button: { text: 'Explore Now', href: '/activity/de-addiction' },
    src: '/de.jpg',
  },
  {
    title: 'Seminars',
    button: { text: 'Explore Now', href: '/activity/seminar' },
    src: '/Manage.jpg',
  },
  {
    title: 'Centers',
    button: { text: 'Explore Now', href: '/activity/center' },
    src: '/gurudev.jpg',
  },
]

export default function ActivitiesPage() {
  return (
    <div className="w-full bg-white text-black">
      
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src="/activities.jpg"
          alt="Activities Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
              Explore Our Impactful Activities
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
              Real transformation through youth engagement and spiritual wisdom.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Activities
        </h2>
        <Carousel slides={slideData} />
      </section>


      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
            Building Character Through Service & Awareness
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            We guide youth toward self-awareness, compassion, and leadership.
            Our activities—from cultural festivals to seminars and de-addiction
            drives—empower individuals to serve society and grow spiritually.
          </p>
        </div>
      </section>


      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
          Our Impact
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-6">
          Over <span className="font-bold">10,000+ individuals</span> have
          participated in our programs,
          bringing real change in their lives and communities.
        </p>
        <p className="italic text-gray-800 font-medium">
          `Youth is the time to mold character through spiritual wisdom and discipline.`
        </p>
      </section>


      <Footer />
    </div>
  )
}
