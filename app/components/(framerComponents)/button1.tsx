import { motion } from "framer-motion";


const But1 = () => {
    return ( 
        <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    
    >
    </motion.button>
     );
}
 
export default But1;