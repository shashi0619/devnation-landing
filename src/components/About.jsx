import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: AcademicCapIcon,
    title: 'Learn & Grow',
    description: 'Access comprehensive learning resources designed to take you from beginner to expert.',
  },
  {
    icon: UserGroupIcon,
    title: 'Community First',
    description: 'Connect with like-minded developers, share knowledge, and grow together as a community.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Build Projects',
    description: 'Apply your skills to real-world projects and build an impressive portfolio.',
  },
  {
    icon: SparklesIcon,
    title: 'Stay Updated',
    description: 'Keep pace with the latest technologies and industry trends through our curated content.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We're on a Mission to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Empower Developers
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dev Nation was founded with a simple belief: everyone deserves access to quality
            education and a supportive community to help them succeed in tech.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 p-8 lg:p-12">
              <div className="w-full h-full rounded-2xl bg-white shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <span className="text-4xl font-bold text-white">DN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Dev Nation</h3>
                  <p className="text-gray-600">Building Tomorrow's Developers, Today</p>

                  {/* Tech stack icons */}
                  <div className="flex justify-center gap-4 mt-8">
                    {['React', 'Node', 'Python', 'AWS'].map((tech) => (
                      <div
                        key={tech}
                        className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700"
                      >
                        {tech.slice(0, 2)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full -z-10 opacity-40" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                From Passion Project to Global Community
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a small group of developers sharing knowledge has grown into
                a vibrant global community of over 50,000 members across 100+ countries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that the best way to learn is by doing, collaborating, and
                teaching others. Our platform combines structured learning paths with
                hands-on projects and peer collaboration to create a truly transformative
                educational experience.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50">
                <p className="text-3xl font-bold text-indigo-600">5+</p>
                <p className="text-gray-600 text-sm mt-1">Years of Excellence</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50">
                <p className="text-3xl font-bold text-purple-600">100+</p>
                <p className="text-gray-600 text-sm mt-1">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                index % 2 === 0
                  ? 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                  : 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
              } transition-colors duration-300`}>
                <value.icon className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
