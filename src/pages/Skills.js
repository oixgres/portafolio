import DisplaySkill from "../components/DisplaySkill";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import { useState } from "react";

import displayItems  from "../json/skills.json";
import GetData from "../util/GetData";

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
                    {item.section.map((section) => (
                        <div>
                            <h2>{section.title}</h2>
                            <DisplaySkill
                                folder={item.folder}
                                images={section.images}
                                sectionIndex={index}
                                activeIndex={activeIndex}
                            />
                        </div>
                    ))}

                </Skill>
            ))}
            <GetData/>
        </div>
    );
}

export default Skills;