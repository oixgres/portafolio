import Job from "../components/Job";
import Navbar from "../components/Navbar";

import jobs from "../json/jobs.json";

const Work = () => {
    return(
        <div>
            <Navbar location={'work'}/>
            {jobs.map((job) => (
                <Job
                    job={job.name}
                    workplace={job.workplace}
                    date={job.date}
                    image={job.image}
                    skills={job.skills}
                />
            ))}
        </div>
    );
}

export default Work;