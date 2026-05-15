function About() {
    return (
        <div>
            {/* Computer Display */}
            <div className="max-lg:hidden flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
                <h1 className="font-head text-[40px] text-center font-bold">About Me</h1>
                <p><q><i>
                As long as a branch of science offers an abundance of problems, so long it is alive; a lack of problems foreshadows extinction or the cessation of independent development.
                </i></q></p>
                <p className="text-right mt-[-2em]">
                David Hilbert, 1900
                </p>
                <p>
                Having recently finished my B.S. in Computer Science and Engineering (CSE) from THE Ohio State University, I am currently interested in applying my software engineering,
                programming, and mathematical skills to problems in <b>data science and machine learning</b>. Particularly, I find building models for pattern recognition in real-world data
                extremely interesting and informative!
                </p>
                <p>
                As for research, I am currently interested in <b>computability and complexity theory</b>. During my coursework in data structures, algorithms, and computability theory,
                I discovered that this field develops from an elegant intersection between both theoretical mathematics and programmatic logic; two areas I thoroughly enjoyed all throughout
                my eductation. As quantum computing opens thousands of doors in the realm of computer science, I find that complexity theory is an extraordinarily powerful tool which can lead us
                towards revolutionary ideas pertaining to the algorithms we use on a daily basis.
                </p>
                <p>
                Aside from my professional aspirations and interests, I enjoy reading books, recreational mathematics, going for hikes, playing video games, and trying new and delicious
                foods!
                </p>
            </div>

            {/* Mobile Display */}
            <div className="lg:hidden flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-100 dark:bg-slate-900 w-[100%] ml-auto mr-auto animate-fadeIn p-[1.5em]">
                <h1 className="font-head text-[40px] text-center font-bold">About Me</h1>
                <p><q><i>
                As long as a branch of science offers an abundance of problems, so long it is alive; a lack of problems foreshadows extinction or the cessation of independent development.
                </i></q></p>
                <p className="text-right mt-[-2em]">
                David Hilbert, 1900
                </p>
                <p>
                Having recently finished my B.S. in Computer Science and Engineering (CSE) from THE Ohio State University, I am currently interested in applying my software engineering,
                programming, and mathematical skills to problems in <b>data science and machine learning</b>. Particularly, I find building models for pattern recognition in real-world data
                extremely interesting and informative!
                </p>
                <p>
                As for research, I am currently interested in <b>computability and complexity theory</b>. During my coursework in data structures, algorithms, and computability theory,
                I discovered that this field develops from an elegant intersection between both theoretical mathematics and programmatic logic; two areas I thoroughly enjoyed all throughout
                my eductation. As quantum computing opens thousands of doors in the realm of computer science, I find that complexity theory is an extraordinarily powerful tool which can lead us
                towards revolutionary ideas pertaining to the algorithms we use on a daily basis.
                </p>
                <p>
                Aside from my professional aspirations and interests, I enjoy reading books, recreational mathematics, going for hikes, playing video games, and trying new and delicious
                foods!
                </p>
            </div>

        </div>
    )
}

export default About