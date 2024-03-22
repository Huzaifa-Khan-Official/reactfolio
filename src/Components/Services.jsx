import { BsJournalBookmarkFill } from "react-icons/bs";
import { servicesList } from "../Constants/Constants";

export default function Services() {
    return (
        <div className='row px-4 py-5 justify-content-center'>
            {
                servicesList.map((singleService, index) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-12 mt-lg-4 mt-5" key={index}>
                            <div className="cardDiv d-flex flex-column gap-3 ">
                                <div className="serviceHeadingDiv d-flex align-items-center gap-2">
                                    <div className="iconDiv">
                                        <BsJournalBookmarkFill className="sevicesIcon" />
                                    </div>
                                    <div className="serviceHeading">
                                        <h3>{singleService.title}</h3>
                                    </div>
                                </div>
                                <div className="serviceDesc">
                                    {singleService.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}