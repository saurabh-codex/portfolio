import { FaGithub, FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return(
        <footer className="bg-zinc-900 text-white">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-400">
            <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                <li> <a href="#home">Home</a></li>
                <li> <a href="#experience">Experience</a></li>
                <li> <a href="#techstack">Tech Stack</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#about">About</a></li>
            </ul>
            <div className="flex flex-col justify-center pt-6 lg:pt-0">
                <div className="flex justify-center space-x-4">
                    <a rel="noopener noreferrer" href="https://www.instagram.com/" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900">
                        <FaInstagram className="w-8 h-8"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://github.com/Saurabh-codex" title="Github" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900">
                        <FaGithub className="w-8 h-8"/>
                    </a>
                    <a rel="noopener noreferrer" href="https://twitter.com/" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900">
                       <RiTwitterXFill className/>
                    </a>
                    <a rel="noopener noreferrer" href="mailto:saurabhsoni74083@gmail.com" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer