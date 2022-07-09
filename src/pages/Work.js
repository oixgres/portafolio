import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Project from "../components/Project";
import { JobCard } from "../components/collections/Cards";
import Certification from "../components/Certification";

import { motion } from "framer-motion";

import jobs from "../json/jobs.json";
import projects from "../json/projects.json";
import certifications from "../json/certifications.json";
import { Grid } from "semantic-ui-react";


const Work = () => {
    const animation = {
        'initial':{ opacity: 0, y: 100 },
        'whileInView':{ opacity: 1, y: 0, transition: { duration: 0.5} },
        'viewport':{ once: true }
    }


    return(
        <div>
            <Navbar location={'work'}/>
            
            {/* ***** JOBS ***** */}
            <Header
                name={`Job Experience`}
                size='4em'
                color={'#fff'}
                position='left'
                padding='0 0.25em 0 0.25em'
            />
            {jobs.map((job) => (
                <JobCard
                    json_data={job}
                    json_motion={animation}
                />
            ))}

            {/* ***** PROJECTS ***** */}
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
                        url={project.url}
                        repo={project.repo}
                    />
                </motion.div>
            ))}

            {/* ***** CERTIFICATIONS ***** */}
            <Header
                name={`Certifications`}
                size='4em'
                color={'#fff'}
                position='left'
                padding='0 0.25em 0 0.25em'
            />

            <Grid padded stackable columns={3} centered>
            {certifications.map((certification) => (
                <Grid.Column width={5}>

                <Certification
                    title={certification.title}
                    image={certification.image}
                    />
                    </Grid.Column>
            ))}
            </Grid>
        </div>
    );
}

export default Work;