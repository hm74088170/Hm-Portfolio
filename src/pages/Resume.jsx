import { motion } from 'framer-motion'
import { PiReadCvLogoBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="p-8 text-center"
        >
            <div className="mt-[80px] w-full flex flex-wrap justify-center items-center gap-4 sm:gap-12 px-4">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 min-w-[210px] flex justify-center items-center gap-1 text-white px-4 py-2 border border-black/35 rounded-xl  hover:bg-blue-700"
                >
                    View Resume <PiReadCvLogoBold />
                </a>

                <a
                    href="/resume.pdf"
                    download="My_Resume.pdf"
                    className="bg-blue-900 min-w-[210px] flex justify-center items-center gap-1 text-white px-4 py-2 border border-black/35 rounded-xl  hover:bg-green-700"
                >
                    Download Resume <FaDownload />
                </a>
            </div>

        </motion.div>

    )
}

export default Resume
