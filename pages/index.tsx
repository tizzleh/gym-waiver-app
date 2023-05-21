import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            {/* SVG patterns */}
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            {/* SVG patterns */}
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Our Climbing Gym!
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Please sign our waiver before you begin your climbing session.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/waiver">
                  <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign the waiver
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default IndexPage;

