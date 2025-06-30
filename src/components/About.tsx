function About() {
    return (
        <div>
            {/* Computer Display */}
            <div className="max-lg:hidden flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">About Me</h1>
                <p>
                As stated on the home page, I am currently working on getting my undergraduate degree (B.S.) in computer science and mathematics at THE Ohio State University, 
                with a planned graduation date of May 2026. With this being said, I have learned a great deal from my time completing coursework and conducting research at Ohio State. 
                I am deeply passionate about the ever-evolving field of software and web development and I am most intrigued in learning robust technologies that allow for better, more
                accessible software.
                </p>
                <p>
                I also have a deep interest in developing pedagogical methods to streamline education within mathematics, and I hope to start development on projects which will 
                provide more targeted tools to students who may not have access to many resources for learning math in general. Some of the hobbies I enjoy doing during my free 
                time are trying new and delicious food, weightlifting, running, playing video games, and reading. Feel free to look at some of the projects I have been working 
                on and contact me with the info included on my resume!
                </p>
            </div>

            {/* Mobile Display */}
            <div className="lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-100 dark:bg-slate-900 w-[100%] ml-auto mr-auto animate-fadeIn p-[1.5em]">
                <h1 className="font-[Offside] text-[40px] text-center font-bold">About Me</h1>
                <p>
                As stated on the home page, I am currently working on getting my undergraduate degree (B.S.) in computer science and mathematics at THE Ohio State University, 
                with a planned graduation date of May 2026. With this being said, I have learned a great deal from my time completing coursework and conducting research at Ohio State. 
                I am deeply passionate about the ever-evolving field of software and web development and I am most intrigued in learning robust technologies that allow for better, more
                accessible software.
                </p>
                <p>
                I also have a deep interest in developing pedagogical methods to streamline education within mathematics, and I hope to start development on projects which will 
                provide more targeted tools to students who may not have access to many resources for learning math in general. Some of the hobbies I enjoy doing during my free 
                time are trying new and delicious food, weightlifting, running, playing video games, and reading. Feel free to look at some of the projects I have been working 
                on and contact me with the info included on my resume!
                </p>
            </div>

        </div>
    )
}

export default About