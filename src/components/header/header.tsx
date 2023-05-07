import Link from 'next/link';

export default function Header() {
  return (
    <header aria-label="Site Header" className="bg-white border-b-2">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="/">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            MyRentalPlace.ca
          </h1>
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-primary-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-600"
                href="#"
              >
                Login
              </Link>

              <Link
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary-500 transition hover:text-primary-500/75 sm:block"
                href="#"
              >
                List a Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
