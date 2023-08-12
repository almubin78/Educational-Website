import { useRef } from "react";
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import Student from "../home/Student";

const NewsTric = () => {
    const ref = useRef(null);
    return (
        <div id="nt-example1-container">
            <i className="fa fa-arrow-up"
                id="nt-example1-prev"
                onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }} />
            <NewsTicker
                ref={ref}
                id="nt-example1"
                direction={Directions.UP}
                rowHeight={80}
                maxRows={3}
                duration={4000}
                speed={300}
                >
                <div>Physics- <span className="text-indigo-800 text-lg">SSC</span></div>
                <div>Physics-<span className="text-red-300 text-lg">HSC (1st ans second part)</span></div>
                <div>ICT-<span className="text-indigo-800 text-lg">SSC (with basic web-design)</span></div>
                <div>ICT-<span className="text-red-300 text-lg">HSC (Practical parts)</span></div>
                {/* <div><Student/></div> */}
            </NewsTicker>
            <i className="fa fa-arrow-down"
                id="nt-example1-next"
                onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }} />
        </div>
    );
};

export default NewsTric;