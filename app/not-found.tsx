// Importing "Link"
import Link from "next/link";

// Creating the NotFound Component
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <h2 className="text-4xl font-bold mb-4 mt-20 text-red-500">Oops! Page Not Found</h2>
            <p className="mb-6 text-lg text-gray-600">
                We couldn’t find the page you were looking for. It might have been removed, or the URL is incorrect.
            </p>
            <Link 
                href="/" 
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
                Go Back to Home
            </Link>
            <div className="not-found-img">
            </div>
        </div>
    );
}
