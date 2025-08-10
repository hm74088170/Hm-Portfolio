import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";


const Home = () => {
    return (
        <div className="bg-custom flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="h-screen flex flex-col justify-center items-center text-center px-4"
            >

                <h1 className="text-3xl md:text-5xl font-bold font-mono leading-tight text-blue-900">
                    Crafting Scalable, Interactive Web Apps
                </h1>

                <p className="text-lg md:text-xl mt-10 text-gray-600 max-w-2xl">
                    I'm <span className="font-semibold font-mono text-2xl text-blue-900">Himanshu Mishra</span>, a frontend developer skilled in building fast, responsive, and real-world applications using <span className="text-blue-800 font-medium">React</span>, <span className="text-blue-800 font-medium">Firebase</span>, and <span className="text-blue-800 font-medium">Tailwind CSS</span>.
                </p>

                <div className="mt-[80px] w-full flex flex-wrap justify-center gap-6 sm:gap-12 px-4">
                    <a
                        href="https://www.linkedin.com/in/himanshu-mishra-559377312/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 hover:bg-blue-700 flex flex-wrap justify-center items-center gap-1 text-white font-semibold py-2 px-6 border border-black/35 rounded-xl shadow transition duration-300"
                    >
                        LinkedIn<FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/hm74088170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 hover:bg-gray-900 flex flex-wrap justify-center items-center gap-1 text-white font-semibold py-2 px-6 border border-black/35 rounded-xl shadow transition duration-300"
                    >
                        GitHub<FaGithubSquare />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-900 hover:bg-green-700 flex flex-wrap justify-center items-center gap-1 text-white font-semibold py-2 px-6 border border-black/35 rounded-xl shadow transition duration-300"
                    >
                        Resume<PiReadCvLogoBold />
                    </a>
                    
                </div>

            </motion.div>
        </div>
    );
};

export default Home;
