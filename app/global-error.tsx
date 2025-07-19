"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="text-center space-y-6 max-w-md mx-auto p-8 bg-white/10 rounded-xl backdrop-blur-sm shadow-2xl">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-400">{error.message}</p>
            </div>
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
