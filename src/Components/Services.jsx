import { BsJournalBookmarkFill } from "react-icons/bs";

export default function Services() {
    return (
        <div className='row px-4 py-5'>
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="cardDiv">
                    <div className="serviceHeadingDiv">
                        <div className="iconDiv">
                            <BsJournalBookmarkFill />
                        </div>
                        <div className="serviceHeading">
                            <h3>Integration with APIs</h3>
                        </div>
                    </div>
                    <div className="serviceDesc">
                        Integrate third-party APIs (such as social media APIs, payment gateways, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems.
                    </div>
                </div>
            </div>
        </div>
    )
}