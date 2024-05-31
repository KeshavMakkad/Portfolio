import Navbar from "../navbar";
import Footer from "../footer";
import Download from "./resumeDownload.js"

function resume(){
    const resume = (
        <div className="resume-container">
            <Navbar />
            <Download />
            <Footer />
        </div>
    )
    return resume;
}

export default resume;