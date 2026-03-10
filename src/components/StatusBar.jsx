import { useState, useEffect } from 'react'

export default function StatusBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatted = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className="absolute top-0 left-0 right-0 z-50 text-white" style={{ height: '54px' }}>
      {/* Time - centered between left frame edge and dynamic island */}
      <div
        className="absolute top-[19px] left-0 flex items-center justify-center"
        style={{ width: 'calc((100% - 126px) / 2)' }}
      >
        <span className="text-[17px] font-semibold tracking-tight">{formatted}</span>
      </div>

      {/* Dynamic Island - centered */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 bg-black rounded-full w-[126px] h-[37px] flex items-center justify-center">
        <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a2e] ml-6" />
      </div>

      {/* Right icons - centered between dynamic island and right frame edge */}
      <div
        className="absolute top-[19px] right-0 flex items-center justify-center gap-[5px]"
        style={{ width: 'calc((100% - 126px) / 2)' }}
      >
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
          <rect x="0" y="9" width="3" height="3" rx="0.5" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
          <circle cx="8" cy="11" r="1.2" />
          <path d="M5.2 8.8a4 4 0 015.6 0" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M2.5 6a7.5 7.5 0 0111 0" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke="white" strokeWidth="1" opacity="0.4" />
          <rect x="2" y="2" width="20" height="9" rx="1.5" fill="white" />
          <rect x="24.5" y="3.5" width="2" height="6" rx="1" fill="white" opacity="0.5" />
        </svg>
      </div>
    </div>
  )
}
