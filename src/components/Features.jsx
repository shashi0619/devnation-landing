import {
  CodeBracketIcon,
  CubeTransparentIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

const features = [
  {
    icon: CodeBracketIcon,
    title: 'Interactive Coding Labs',
    description: 'Practice coding in real-time with our browser-based IDE. No setup required.',
    color: 'indigo',
  },
  {
    icon: VideoCameraIcon,
    title: 'HD Video Tutorials',
    description: 'Learn from industry experts through high-quality video content and live sessions.',
    color: 'purple',
  },
  {
    icon: CubeTransparentIcon,
    title: 'Project-Based Learning',
    description: 'Build real-world projects that you can showcase in your portfolio.',
    color: 'pink',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Community Support',
    description: '24/7 access to our community forums, Discord server, and mentor support.',
    color: 'blue',
  },
  {
    icon: TrophyIcon,
    title: 'Certifications',
    description: 'Earn industry-recognized certifications to validate your skills.',
    color: 'amber',
  },
  {
    icon: DocumentTextIcon,
    title: 'Comprehensive Docs',
    description: 'Access detailed documentation, cheat sheets, and reference materials.',
    color: 'emerald',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Workspace',
    description: 'Personal cloud workspace to save and sync your projects across devices.',
    color: 'cyan',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Career Guidance',
    description: 'Resume reviews, interview prep, and job placement assistance.',
    color: 'rose',
  },
]

const colorClasses = {
  indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
  purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  amber: 'bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
  emerald: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  cyan: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
  rose: 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
}

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for beginners exploring development',
    features: [
      'Access to basic courses',
      'Community forum access',
      'Weekly newsletters',
      '5 project templates',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious developers ready to level up',
    features: [
      'All Starter features',
      'Unlimited courses access',
      'Live mentoring sessions',
      'Certification programs',
      'Priority support',
      'Cloud workspace',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'All Pro features',
      'Custom learning paths',
      'Dedicated account manager',
      'Team analytics',
      'SSO & API access',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform is packed with powerful features designed to accelerate your
            learning journey and help you build a successful career in tech.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${colorClasses[feature.color]}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Pricing
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h3>
          <p className="text-gray-600">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/30 scale-105'
                  : 'bg-white border-2 border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 text-sm font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h4 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.popular ? 'text-indigo-200' : 'text-gray-500'}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-indigo-200' : 'text-indigo-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/30'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
