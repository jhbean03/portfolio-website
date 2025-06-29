import resume from "../assets/ResumeMAIN.pdf"

function Resume() {
    return (
        <div className="flex flex-col gap-[2em] text-black dark:text-slate-200 bg-slate-200 dark:bg-slate-800 w-[70%] ml-auto mr-auto mt-[5em] mb-[5em] rounded-4xl p-[2em] animate-fadeIn">
            <h1 className="font-[Offside] text-[40px] text-center font-bold">Resume</h1>
            <p className="text-center">
                Below is a PDF of the latest version of my resume. If you have any questions, feel free to contact me via the information below on my resume!
            </p>
                <object data={resume} type="application/pdf" className="w-full aspect-[4/3] self-center">
                    <p>
                        Your web browser doesn't have a PDF plugin. Instead, you can <a href="../assets/ResumeMAIN.pdf">click here to download my resume.</a>
                    </p>
                </object>
        </div>
    )
}

export default Resume