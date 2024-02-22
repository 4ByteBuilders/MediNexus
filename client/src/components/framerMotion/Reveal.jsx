import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

function Reveal({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            console.log("isInView", isInView);
            mainControls.start("visible");
        }
    }, [isInView, mainControls])
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75
                    },
                    visible: {
                        opacity: 1,
                        y: 0
                    }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.55, delay: 0.28 }}
            >
                {children}
            </motion.div>
        </div>
    )
}


Reveal.propTypes = {
    children: PropTypes.node.isRequired, // Validates `children` as a prop
    width: PropTypes.string // Validates `width` as a string
};

export default Reveal;
