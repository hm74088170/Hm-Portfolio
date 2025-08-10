import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-8"
        >
            <h2 className="text-4xl font-mono font-bold md:ml-[52px] m-[30px] ml-[12px] text-blue-950">Projects</h2>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:gap-[110px] gap-6">
                
                <div className="bg-white w-full max-w-[500px] lg:w-[300px] rounded-xl shadow overflow-auto">
                    <div className="h-[200px] w-full bg-gray-200 overflow-hidden">
                        <img
                            src="/blog.jpg"
                            alt="Blog preview"
                            className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl text-black font-semibold">Blogging App</h3>
                        <p className="text-sm text-gray-600">
                            React + Firebase based blog app with authentication & CRUD features.
                        </p>
                        <div className="flex justify-end">
                            <a href="https://theormi-blogs.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-blue-900 text-white px-4 py-1 border border-black/35 rounded-xl hover:bg-blue-700">Visit</a>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white w-full max-w-[500px] lg:w-[300px] rounded-xl shadow overflow-auto">
                    <div className="h-[200px] w-full bg-gray-200 overflow-hidden">
                        <img
                            src="/portfolio.jpg"
                            alt="portfolio preview"
                            className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl text-black font-semibold">Portfolio Website</h3>
                        <p className="text-sm text-gray-600">
                            This portfolio itself – built with Vite, React, Tailwind, Framer Motion, and React Router.
                        </p>
                        <div className="flex justify-end">
                            <a href="" className="mt-2 bg-blue-900 text-white px-4 py-1 border border-black/35 rounded-xl hover:bg-blue-700">Visit</a>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white w-full max-w-[500px] lg:w-[300px] rounded-xl shadow overflow-auto">
                    <div className="h-[200px] w-full bg-gray-200 overflow-hidden">
                        <img
                            src="/rec.jpg"
                            alt="recepie preview"
                            className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl text-black font-semibold">Food-Recipe</h3>
                        <p className="text-sm text-gray-600">
                            Implemented React functional components with hooks, using fetch API for data.
                        </p>
                        <div className="flex justify-end">
                            <a href="https://github.com/hm74088170/food-recipe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-blue-900 text-white px-4 py-1 border border-black/35 rounded-xl hover:bg-blue-700">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Projects
