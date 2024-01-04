import { Variants } from 'framer-motion';

export const variantsH2 = (isInView: boolean): Variants => {
    return {
        visible:{
            fontSize: isInView ? '50px' : '10px',
            scale: isInView ? [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1] : 0,
            transition: {
                type: "spring",
            }
        },
    };
};
