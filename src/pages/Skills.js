import DisplaySkill from "../components/DisplaySkill";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import { useState } from "react";

const displayItems = [
    {
        title: 'Soft Skills',
        folder: 'pl-icons',
        images: ['c','cpp','java','scala','php','c']
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
    const [activeIndex, setactiveIndex] = useState(-1);

    return (
        <div>
            <Navbar location={'skills'}/>
            {displayItems.map((item, index) => (
                <Skill
                    index={index}
                    title={item.title}
                    delay={0.3}
                    animateX={[500, 0]}
                    activeIndex={activeIndex}
                    setactiveIndex={setactiveIndex}
                >
                    <DisplaySkill
                        folder={item.folder}
                        images={item.images}
                        index={index}
                        activeIndex={activeIndex}
                    />
                </Skill>
            ))}
        </div>
    );
}

export default Skills;