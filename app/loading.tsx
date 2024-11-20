// Custom Loading page
export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center bg-white text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Loading...</h1>
        <p className="mb-6 text-lg text-gray-600">Wait a few seconds!</p>
      </div>
    );
  }