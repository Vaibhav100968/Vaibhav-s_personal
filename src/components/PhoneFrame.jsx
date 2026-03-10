import { motion } from 'framer-motion'

export default function PhoneFrame({ children }) {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
      {/* Left faded text - "Vaibhav's" */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none select-none hidden md:flex items-center justify-center"
        style={{ width: 'calc((100% - var(--phone-width)) / 2)' }}
      >
        <div
          className="text-center"
          style={{
            fontSize: 'clamp(40px, 6vw, 90px)',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.06)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          Vaibhav's
        </div>
      </div>

      {/* Right faded text - "iPhone" */}
      <div
        className="absolute right-0 top-0 bottom-0 pointer-events-none select-none hidden md:flex items-center justify-center"
        style={{ width: 'calc((100% - var(--phone-width)) / 2)' }}
      >
        <div
          className="text-center"
          style={{
            fontSize: 'clamp(40px, 6vw, 90px)',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.06)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          iPhone
        </div>
      </div>

      {/* Phone */}
      <motion.div
        className="relative overflow-hidden bg-black z-10"
        style={{
          width: 'var(--phone-width)',
          height: 'var(--phone-height)',
          borderRadius: '50px',
          boxShadow: '0 0 0 3px #1a1a1a, 0 0 0 6px #0a0a0a, 0 30px 80px rgba(0,0,0,0.5)',
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
