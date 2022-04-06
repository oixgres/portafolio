import Job from "../components/Job";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import { Icon } from "semantic-ui-react";
import { motion } from "framer-motion";

import jobs from "../json/jobs.json";

const Work = () => {
    return(
        <div>
            <Navbar location={'work'}/>
            {/* <Icon name='code' inverted> */}
            <Header
                // name={`${<Icon name='code' inverted/>} Job Experience`}
                name={`Job Experience`}
                size='4em'
                color={'#fff'}
                position='left'
                padding='0 0.25em 0 0.25em'
                />
            {/* </Icon>   */}
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
                />
                </motion.div>
            ))}
        </div>
    );
}

export default Work;