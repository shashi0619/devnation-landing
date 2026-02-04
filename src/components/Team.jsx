const team = [
  {
    name: 'Sathi-Shaikh',
    role: 'Founder & CEO',
    bio: 'Former engineer with 2+ years of experience. Passionate about democratizing tech education.',
    image: 'SC',
    color: 'from-indigo-500 to-purple-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Rahul',
    role: 'CTO',
    bio: 'Full-stack architect who has built scalable systems for Fortune 500 companies.',
    image: 'MJ',
    color: 'from-purple-500 to-pink-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Saniya',
    role: 'Head of Education',
    bio: 'EdTech specialist with a PhD in Computer Science Education from MIT.',
    image: 'ER',
    color: 'from-pink-500 to-rose-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sreeja',
    role: 'Lead Instructor',
    bio: 'Senior developer and educator who has trained 10,000+ students worldwide.',
    image: 'DK',
    color: 'from-cyan-500 to-blue-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Priya Patel',
    role: 'Community Lead',
    bio: 'Community builder who grew our Discord server from 100 to 50,000+ members.',
    image: 'PP',
    color: 'from-emerald-500 to-teal-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Virat',
    role: 'Product Manager',
    bio: 'Product strategist focused on creating delightful learning experiences.',
    image: 'AT',
    color: 'from-amber-500 to-orange-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
]

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Minds Behind Dev Nation
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our diverse team of industry experts, educators, and community builders
            are dedicated to helping you achieve your tech career goals.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-indigo-200/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{member.image}</span>
                </div>

                {/* Info */}
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-indigo-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Social links */}
                <div className="flex gap-4">
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.github}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-1">Want to join our team?</h4>
              <p className="text-gray-600">We're always looking for talented individuals.</p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-200"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
