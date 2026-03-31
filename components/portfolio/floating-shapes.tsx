"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-[10%] perspective-1000"
      >
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-16 h-16 border border-cyan/30 bg-cyan/5 rounded-lg backdrop-blur-sm"
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-1/3 right-[15%]"
      >
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full bg-linear-to-br from-magenta/40 to-cyan/20 blur-sm"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-1/3 left-[20%]"
      >
        <motion.div
          animate={{
            rotateX: [0, -360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-12 h-12 border border-magenta/30 bg-magenta/5 rounded-lg backdrop-blur-sm"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-1/2 right-[10%]"
      >
        <motion.div
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 border border-red-glow/30 bg-red-glow/5 rounded-lg backdrop-blur-sm"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-1/4 right-[25%]"
      >
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-linear-to-br from-cyan/50 to-transparent"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-[60%] left-[8%]"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-dashed border-cyan/20"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-[20%] right-[30%]"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 rounded-full bg-magenta/60 blur-md"
        />
      </motion.div>
    </div>
  )
}
