import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion, AnimatePresence } from "framer-motion";


const Modal = ({ showModal, setShowModal}) =>{

    const backdrop ={
        visible: {opacity: 1},
        hidden:{ opacity: 0 },
    }
    const modal ={
        hidden:{
            y: "100vh",
            opacity: 0,
        },
        visible:{
            y: "200px",
            opacity: 1,
            transition: { delay: 0.5}
        }
    }

    return(
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modal}

                    >
                        <p>Want to make another Pizza?</p>
                        <Link to="/">
                            <button onClick={()=>setShowModal(false)}>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;