"use client";

// Custom page for server related errors
export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-red-500">There is an issue with the server.</h1>
        <p className="mb-6 text-lg text-gray-600">Come back later!</p>
      </div>
    );
  }