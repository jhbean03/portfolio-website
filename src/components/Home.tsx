import portrait from '../assets/jackson.jpg'

function Home() {
    return (
        <div className="flex 2xl:flex-row flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] rounded-4xl p-[2em]">
            <img src={portrait} className="h-[27rem] w-auto rounded-4xl object-cover"/>
            <div className="flex flex-col gap-[2em] p-[1em]">
            <h1 className="font-[Offside] text-[40px] font-bold">Welcome!</h1>
            <p>
                Hi! My name is Jackson, and I am an Honors Computer Science & Engineering (CSE) and Theoretical Mathematics undegraduate at THE Ohio State University!
                This is my portfolio website which contains more information about my professional goals, my personal interests, my skills, some of the projects I am
                currently working on and have worked on in the past, and coursework I have completed. The latest version of my resume is included as well if you would
                like to contact me with any questions regarding my work!
            </p>
            </div>
        </div>
    )
}

export default Home