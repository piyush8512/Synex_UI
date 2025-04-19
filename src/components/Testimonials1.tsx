export default function Testimonials() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-pink-100 to-transparent rounded-full opacity-40 blur-2xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center mb-4 px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
          <span className="mr-2 animate-spin">🔄</span> Reviews
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Customers love our app</h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
          Read inspiring testimonials from users who successfully found jobs using our platform.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm flex gap-4 items-start">
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{t.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" from-purple-300 via-pink-400 to-transparent  h-60 w-60">

      </div>
    </section>
  );
}

// Mock data
const testimonials = [
  {
    name: 'Sarah Davis',
    message: 'This platform made job hunting so much easier! The tailored suggestions were exactly what I needed to stand out.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Alex Johnson',
    message: 'I never thought job searching could be this smooth. Thanks to the customized insights, I secured my dream role!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emily Clark',
    message: "With this app, finding the right opportunities felt effortless. It truly understands what you're looking for yourself.",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Michael Smith',
    message: 'I was struggling with my job search until I found this tool. The recommendations were spot on, leading to multiple interviews!',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Jessica Taylor',
    message: 'This application transformed my job search experience. The personalized recommendations helped me land interviews!',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'David Brown',
    message: 'The personalized job alerts made all the difference. I felt confident applying because they matched my skills perfectly.',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];
``