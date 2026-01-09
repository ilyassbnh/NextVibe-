export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} NutriVibe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}