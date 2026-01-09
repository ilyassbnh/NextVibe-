const services = [
  { title: "Bilan Nutritionnel", desc: "Analyse complète de vos habitudes.", price: "50€" },
  { title: "Suivi Mensuel", desc: "Plan alimentaire et ajustements hebdos.", price: "120€/mois" },
  { title: "Coaching Sportif", desc: "Programme d'entraînement associé.", price: "80€" },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Services</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Des solutions adaptées à votre métabolisme.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col justify-between rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-lg transition-shadow">
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.desc}</p>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{service.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}