export default function UserCard({ user }) {
  // Calculate average rating if available
  const averageRating =
    user.ratings && user.ratings.length
      ? (
          user.ratings.reduce((acc, cur) => acc + cur.rating, 0) /
          user.ratings.length
        ).toFixed(1)
      : 'N/A';

  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition transform hover:scale-[1.02] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-300 rounded-full grid place-items-center text-sm text-black">
          Photo
        </div>
        <div>
          <h3 className="text-[rgba(228,77,58,1)] font-semibold text-lg">
            {user.name}
          </h3>
          <p className="text-sm text-gray-700">
            <strong>Skills Offered:</strong> {user.skillsOffered?.join(', ') || 'N/A'}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Skills Wanted:</strong> {user.skillsWanted?.join(', ') || 'N/A'}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <button className="bg-[#51a5fb] text-white py-2 px-6 rounded hover:bg-[rgba(228,77,58,1)] transition flex items-center">
          Request
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Rating:</strong> {averageRating}
        </p>
      </div>
    </div>
  );
}
