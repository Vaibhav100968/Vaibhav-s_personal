import { motion, AnimatePresence } from 'framer-motion'

function isLightColor(color) {
  if (!color) return false
  // Check for known light colors
  if (color.startsWith('#FFF') || color.startsWith('#FDF') || color.startsWith('#fff') || color.startsWith('#fdf')) return true
  return false
}

export default function AppWindow({ isOpen, onClose, title, children, headerColor = 'rgba(0,0,0,0.85)' }) {
  const light = isLightColor(headerColor)
  const textColor = light ? '#1a1a1a' : 'white'
  const barColor = light ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.4)'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-50 flex flex-col"
          initial={{ scale: 0.5, opacity: 0, borderRadius: '40px' }}
          animate={{ scale: 1, opacity: 1, borderRadius: '0px' }}
          exit={{ scale: 0.5, opacity: 0, borderRadius: '40px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ overflow: 'hidden' }}
        >
          {/* App header */}
          <div
            className="flex items-center justify-center px-5 pt-14 pb-3 shrink-0 relative"
            style={{ background: headerColor }}
          >
            <span style={{ color: textColor, fontWeight: 600, fontSize: '16px' }}>
              {title}
            </span>
          </div>

          {/* App content */}
          <div
            className="flex-1 overflow-y-auto app-scroll"
            style={{ background: headerColor }}
          >
            {children}
          </div>

          {/* Bottom home bar - clickable to go home */}
          <motion.button
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-2 z-10"
            style={{ height: '34px' }}
            onClick={onClose}
            whileTap={{ scale: 0.95 }}
          >
            <div style={{
              width: '144px', height: '5px', borderRadius: '9999px',
              background: barColor,
            }} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
