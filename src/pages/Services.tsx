import { motion } from 'framer-motion'

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-[60vh]"
    >
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-neutral-900 mb-4">
          Dịch vụ
        </h1>
        <p className="text-neutral-500 text-lg">Sẽ được thiết kế sau</p>
      </div>
    </motion.div>
  )
}
