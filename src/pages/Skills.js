import DisplaySkill from "../components/DisplaySkill";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

const displayItems = [
    {
        title: 'Soft Skills',
        folder: 'pl-icons',
        images: ['c','cpp','java','js','php','php']
    },
    {
        title: 'Programming Languages',
        folder: 'pl-icons',
        images: ['c','cpp','java','js','python','php']
    },
    {
        title: 'Frameworks',
        folder: 'pl-icons',
        images: ['c','cpp','java','js','python','php']
    },
    {
        title: 'Tehnologies',
        folder: 'pl-icons',
        images: ['c','cpp','java','js','python','php']
    },
]
const Skills = () => {

    return (
        <div>
            <Navbar location={'skills'}/>
            {displayItems.map((item, index) => (
                <Skill
                    index={index}
                    title={item.title}
                    delay={0.3}
                    animateX={[500, 0]}
                >
                    <DisplaySkill folder={item.folder} images={item.images}/>
                </Skill>
            ))}
        </div>
    );
}

export default Skills;