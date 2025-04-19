'use client';

import React from 'react';

interface Plan {
  title: string;
  price: number;
  storage: string;
  agents: string;
  features: string[];
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    title: 'Basic',
    price: 49,
    storage: '100 GB Free Storage',
    agents: '10 Agents',
    features: ['Full Access to Landingfolio', 'Unlimited Visitors', 'Live Chat Support'],
  },
  {
    title: 'Professional',
    price: 199,
    storage: '500 GB Free Storage',
    agents: '20 Agents',
    features: ['Full Access to Landingfolio', 'Unlimited Visitors', 'Live Chat Support'],
    highlight: true,
  },
  {
    title: 'Exclusive',
    price: 249,
    storage: '2 TB Free Storage',
    agents: 'Unlimited Agents',
    features: ['Full Access to Landingfolio', 'Unlimited Visitors', 'Live Chat Support'],
  },
];

const PricingSection: React.FC = () => {
  const [billing, setBilling] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-16 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-2">Choose what you need</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </p>

      <div className="inline-flex mb-12 rounded-md overflow-hidden">
        <button
          onClick={() => setBilling('monthly')}
          className={`px-6 py-2 text-sm font-medium transition ${
            billing === 'monthly'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              : 'bg-gray-800 text-gray-300'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('yearly')}
          className={`px-6 py-2 text-sm font-medium transition ${
            billing === 'yearly'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              : 'bg-gray-800 text-gray-300'
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border ${
              plan.highlight
                ? 'bg-gradient-to-br from-blue-600 to-blue-900 text-white border-blue-800'
                : 'bg-gray-900 border-gray-700'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <ul className="space-y-2 text-left mb-6 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
              <li>📦 {plan.storage}</li>
              <li>👥 {plan.agents}</li>
            </ul>
            <p className="text-lg font-bold mb-4">
              Starting from ${plan.price}/{billing}
            </p>
            <button
              className={`w-full py-2 rounded ${
                plan.highlight ? 'bg-white text-black' : 'bg-gray-800 text-white'
              }`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
