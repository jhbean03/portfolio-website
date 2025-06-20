interface SkillBoxProps {
    icon: string;
    text: String;
}

function SkillBox({icon, text}: SkillBoxProps) {
    return (
        <div className="bg-slate-300 dark:bg-slate-700 p-[1em] w-[10em] rounded-4xl flex flex-col items-center">
            <img src={icon} className="h-[86px] mb-[1em]"/>
            <div>{text}</div>
        </div>
    );
}

export default SkillBox