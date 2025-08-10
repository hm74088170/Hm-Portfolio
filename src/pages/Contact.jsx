import { motion } from 'framer-motion';
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: Timestamp.now()
            });
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please try again.");
        }
        setLoading(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="p-8 bg-black flex flex-wrap gap-6 justify-center"
        >
            {/* Contact Info */}
            <div className="w-full md:w-2/5 p-6 rounded-lg">
                <h2 className="text-4xl font-mono font-extrabold mb-4 text-white">
                    Let’s Build Something <br /> Great
                </h2>
                <p className="mb-4 text-gray-300">
                    Have a project idea, collaboration proposal, or just want to say hello?
                    I’m always open to connecting with like-minded developers, designers, and innovators.
                </p>
                <div>
                    <p className="mb-2 mt-8">
                        Email:{' '}
                        <a href="mailto:hm74088170@gmail.com" className="text-blue-600 hover:underline">
                            hm74088170@gmail.com
                        </a>
                    </p>
                    <p>
                        GitHub:{' '}
                        <a
                            href="https://github.com/hm74088170"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/hm74088170
                        </a>
                    </p>
                    <p>
                        Linkedin:{' '}
                        <a
                            href="https://www.linkedin.com/in/himanshu-mishra-559377312/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            www.linkedin.com/in/himanshu-mishra-559377312
                        </a>
                    </p>
                </div>
            </div>

           
            <div className="w-full md:w-2/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-200">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full border border-gray-300 text-black rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-300 text-black rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-200">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Write your message..."
                            required
                            className="w-full border border-gray-300 text-black rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-900 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition min-w-[200px] disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Contact;
