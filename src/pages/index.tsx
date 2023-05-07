import Head from 'next/head';
import Header from '@/components/header/header';
import ImageCard from '@/components/image-card/image-card';
import Footer from '@/components/footer/footer';
import { POPULAR_PLACES } from '@/data/landing-page';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Rental Place | House For Rent In Canada</title>
      </Head>
      <Header />
      <main>
        <section className="bg-gray-50">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                House for Rent in Canada.
              </h2>

              <p className="hidden text-gray-500 sm:mt-4 sm:block">
                Canada&apos;s largest network of houses for rent.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
              <form>
                <div className="relative">
                  <label htmlFor="PropertySearch" className="sr-only">
                    Search...
                  </label>

                  <input
                    type="text"
                    id="PropertySearch"
                    placeholder="Search..."
                    className="w-full rounded-md border-gray-200 py-2.5 px-2.5 shadow-sm sm:text-sm"
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                      type="button"
                      className="rounded-full bg-primary-500 p-0.5 text-white hover:bg-primary-600"
                    >
                      <span className="sr-only">Submit</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Popular Places
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {POPULAR_PLACES.map(({ id, ...rest }) => (
              <ImageCard key={id} {...rest} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
