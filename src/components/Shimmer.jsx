
const Shimmer = () => {

    return (
        <div className="w-full px-4 sm:px-12 lg:px-32 flex flex-wrap justify-start gap-10 lg:gap-13 mt-4">
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="w-72 p-4  rounded-lg shadow-xl max-w-sm max-lg:mx-auto cursor-pointer animate-pulse">
                    <div className="w-64 h-44 bg-gray-300 rounded-md shimmer"></div>
                    <div className="content mt-4">
                        <h2 className="w-36 h-6 bg-gray-300 mb-4 rounded-md shimmer"></h2>
                        <div className="flex gap-2">
                            <div className="flex gap-2 font-semibold justify-center">
                                <div className="bg-gray-300 rounded-full w-6 h-6 shimmer"></div>
                                <div className="w-42 h-6 bg-gray-300 mb-4 rounded-md shimmer"></div>
                            </div>
                        </div>
                        <div className="text-zinc-500 line-clamp-1">
                            <div className="w-32 h-6 bg-gray-300 mb-4 rounded-md shimmer"></div>
                        </div>
                        <div className="text-zinc-500">
                            <div className="w-46 h-6 bg-gray-300 mb-2 rounded-md shimmer"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer;