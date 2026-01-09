import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          La nutrition intelligente pour une vie saine
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Un accompagnement sur-mesure pour atteindre vos objectifs sans frustration. 
          Perte de poids, prise de masse ou rééquilibrage alimentaire.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/services" className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500">
            Voir mes services
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            En savoir plus <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}