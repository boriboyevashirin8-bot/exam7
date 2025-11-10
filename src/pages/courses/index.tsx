import { useQueryHandler } from "../../hooks/useQueryHandler";

function Course() {
  const { data } = useQueryHandler({
    pathname: "courses",
    url: "api/course/get-courses",
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Kurslar</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between group"
          >
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm mb-4">{item.description}</p>

              <div className="flex justify-between items-center mb-4 text-gray-700 font-medium text-sm">
                <span>{item.duration}</span>
                <span>15 talaba</span>
              </div>

              <p className="text-lg font-bold text-indigo-600">
                {Number(item.price).toLocaleString()} so'm
              </p>
            </div>

            <div className="flex gap-2 mt-auto">
              <button className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-indigo-700 transition">
                Edit
              </button>
              <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg text-sm font-medium hover:from-red-600 hover:to-red-700 transition">
                O'chirish
              </button>
              <button className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition">
                Muzlatish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

