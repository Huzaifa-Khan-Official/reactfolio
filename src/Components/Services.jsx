import { BsJournalBookmarkFill } from "react-icons/bs";
import { servicesList } from "../Constants/Constants";
import { motion } from "framer-motion"


export default function Services() {
    return (
        <>
            <h2
                className="servicesTitle text-center ps-5">
                What I do ?
            </h2>
            <div className="row px-3 justify-content-center gap-4 my-4">
                {
                    servicesList.map((singleService, index) => {
                        return (
                            <motion.div
                                className="cardDiv col-lg-3 col-md-4 col-12"
                                key={index}
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <div className="d-flex flex-column gap-3 ">
                                    <div className="serviceHeadingDiv d-flex flex-wrap align-items-center gap-2">
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
                            </motion.div>
                        )
                    })
                }

            </div>
        </>
    )
}