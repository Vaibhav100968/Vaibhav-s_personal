import { motion } from 'framer-motion'
import AppWindow from '../components/AppWindow'

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'SOL',
    type: 'Internship',
    logoGradient: 'linear-gradient(135deg, #1a1a1a, #333)',
    details: [
      'Assisted in developing the Model Context Protocol (MCP) to reinforce AI-driven task automation across platforms including Slack, Gmail, GitHub, and Google Calendar',
      "Contributed to designing and building SOL's Claude Code\u2013powered AI assistant",
      'Automated debugging support and documentation generation',
      'Assisted building internal APIs and backend integrations for smart task generation',
      'Interned during period when company secured $500,000 grant',
    ],
  },
  {
    id: 2,
    role: 'Game Development Intern',
    company: 'Solaria Interactive',
    type: 'Internship',
    logoGradient: 'linear-gradient(135deg, #222, #444)',
    details: [
      'Completed 1-on-1 Lua programming mentorship for first 5 weeks',
      'Learned game mechanics, UI, and physics in Roblox Studio',
      'Contributed to development of Kaiju Revolution',
      'Worked on asset integration, UI systems, and testing',
      'Collaborated with development team',
    ],
  },
]

export default function Experience({ isOpen, onClose }) {
  return (
    <AppWindow isOpen={isOpen} onClose={onClose} title="Experience" headerColor="#FFF7F0">
      <div style={{ background: '#FFF7F0', minHeight: '100%', paddingBottom: '80px' }}>
        <div style={{ padding: '8px 16px 16px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>Work Experience</h2>
        </div>

        {/* Timeline */}
        <div style={{ padding: '0 16px', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '35px', top: '0', bottom: '0', width: '2px',
            background: '#1a1a1a',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              style={{ display: 'flex', gap: '16px', marginBottom: '24px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: exp.logoGradient, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, zIndex: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }} />

              {/* Card */}
              <div style={{
                background: 'white', borderRadius: '16px', padding: '16px',
                flex: 1, boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>{exp.role}</h3>
                </div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#555' }}>{exp.company}</p>
                <span style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 600, color: '#007AFF',
                  background: '#007AFF15', padding: '3px 10px', borderRadius: '10px', marginTop: '6px',
                }}>
                  {exp.type}
                </span>

                <div style={{ marginTop: '12px' }}>
                  {exp.details.map((detail, j) => (
                    <div key={j} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ color: '#007AFF', fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>{'\u2022'}</span>
                      <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppWindow>
  )
}
