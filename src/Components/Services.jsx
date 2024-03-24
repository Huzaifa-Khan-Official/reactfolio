import { BsJournalBookmarkFill } from "react-icons/bs";
import { servicesList } from "../Constants/Constants";

export default function Services({ scrolled }) {
    return (
        <>
            <h2 className={`servicesTitle text-center ps-5 ${scrolled && "fadeInLeft"}`}>
                What I do ?
            </h2>
            <div className={`row px-3 justify-content-center gap-4 my-4 ${scrolled && "fadeInBottom"}`}>
                {
                    servicesList.map((singleService, index) => {
                        return (
                            <div className="cardDiv col-lg-3 col-md-4 col-12" key={index}>
                                <div className="d-flex flex-column gap-3 ">
                                    <div className="serviceHeadingDiv d-flex align-items-center gap-2">
                                        <div className="iconDiv">
                                            <BsJournalBookmarkFill className="sevicesIcon" />
                                        </div>
                                        <div className="serviceHeading">
                                            <h4>{singleService.title}</h4>
                                        </div>
                                    </div>
                                    <div className="serviceDescDiv">
                                        <p className="serviceDesc">
                                            {singleService.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}