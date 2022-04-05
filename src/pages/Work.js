import Job from "../components/Job";
import Navbar from "../components/Navbar";

const Work = () => {
    return(
        <div>
            <Navbar location={'work'}/>
            <Job
                job='BIG DATA DEVOPS'
                workplace='Samsung SRT'
                date='November 2021 - Today'
                image='samsung-devops'
                skills={['aws', 'python', 'docker']}    
            />
        </div>
    );
}

export default Work;