import Image from 'next/image'

interface CourseHeroProps {
  title: string
  description: string
  imageSrc: string
  duration: string
  mode: string
  certification: string
}

export default function CourseHero({
  title,
  description,
  imageSrc,
  duration,
  mode,
  certification,
}: CourseHeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Duration</h4>
                <p className="text-lg">{duration}</p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Mode</h4>
                <p className="text-lg">{mode}</p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Certification</h4>
                <p className="text-lg">{certification}</p>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download Brochure
            </button>
          </div>
          
          <div className="relative h-80 lg:h-96">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}