import { CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ percentage }) => (
    <div>
    <div>
    <CircularProgressbar />
    </div>
    <div>
    <h3> {percentage}
    </h3>
    <p>Completed</p>
    </div>
    </div>
)

export default ProgressBar;