import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Project from "../components/Project";

import { motion } from "framer-motion";

import jobs from "../json/jobs.json";
import projects from "../json/projects.json";

const Work = () => {
    return(
        <div>
            <Navbar location={'work'}/>
            <Header
                name={`Job Experience`}
                size='4em'
                color={'#fff'}
                position='left'
                padding='0 0.25em 0 0.25em'
            />
            {jobs.map((job) => (
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5} }}
                viewport={{ once: true }}
                >
                    <Job
                        job={job.name}
                        workplace={job.workplace}
                        date={job.date}
                        image={job.image}
                        skills={job.skills}
                        description={job.description}
                    />
                </motion.div>
            ))}
            <Header
                name={`Projects`}
                size='4em'
                color={'#fff'}
                position='left'
                padding='0 0.25em 0 0.25em'
            />
            {projects.map((project) => (
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5} }}
                viewport={{ once: true }}
                >
                    <Project
                        project={project.name}
                        workplace={project.workplace}
                        date={project.date}
                        image={project.image}
                        skills={project.skills}
                        description={project.description}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default Work;