'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SkillNode {
    id: string
    name: string
    icon: string
    level: number
    category: string
    color: string
    orbitRadius: number
    orbitSpeed: number
    orbitOffset: number
    description: string
    projects: string[]
}

const skills: SkillNode[] = [
    { id: 'python', name: 'Python', icon: '🐍', level: 90, category: 'Language', color: '#00d4ff', orbitRadius: 90, orbitSpeed: 0.4, orbitOffset: 0, description: 'Primary language for all DS work', projects: ['Churn Prediction', 'Market Segmentation', 'A/B Testing'] },
    { id: 'sklearn', name: 'Scikit-learn', icon: '🤖', level: 85, category: 'ML', color: '#b829dd', orbitRadius: 140, orbitSpeed: 0.3, orbitOffset: 1.2, description: 'Full ML pipeline from baseline to tuning', projects: ['Churn Prediction', 'House Price Regression'] },
    { id: 'pandas', name: 'Pandas', icon: '🐼', level: 92, category: 'Data', color: '#00ff88', orbitRadius: 180, orbitSpeed: 0.25, orbitOffset: 2.5, description: 'Data wrangling and manipulation', projects: ['Netflix EDA', 'Sales Forecasting'] },
    { id: 'sql', name: 'SQL', icon: '🗄️', level: 85, category: 'Language', color: '#00d4ff', orbitRadius: 115, orbitSpeed: 0.35, orbitOffset: 3.8, description: 'Complex queries, CTEs, window functions', projects: ['Market Segmentation', 'Netflix EDA'] },
    { id: 'xgboost', name: 'XGBoost', icon: '⚡', level: 78, category: 'ML', color: '#ffd700', orbitRadius: 200, orbitSpeed: 0.2, orbitOffset: 0.8, description: 'Gradient boosted trees for tabular data', projects: ['House Price Regression', 'Churn Prediction'] },
    { id: 'plotly', name: 'Plotly', icon: '📈', level: 75, category: 'Viz', color: '#ff2d78', orbitRadius: 155, orbitSpeed: 0.28, orbitOffset: 4.2, description: 'Interactive data visualizations', projects: ['Sales Forecasting', 'Netflix EDA'] },
    { id: 'numpy', name: 'NumPy', icon: '🔢', level: 88, category: 'Data', color: '#b829dd', orbitRadius: 100, orbitSpeed: 0.45, orbitOffset: 2.0, description: 'Numerical computing and array operations', projects: ['Feature Engineering', 'All ML Projects'] },
    { id: 'streamlit', name: 'Streamlit', icon: '🚀', level: 78, category: 'Deploy', color: '#00d4ff', orbitRadius: 175, orbitSpeed: 0.22, orbitOffset: 5.0, description: 'Rapid ML app deployment', projects: ['Market Segmentation Dashboard'] },
    { id: 'seaborn', name: 'Seaborn', icon: '🎨', level: 80, category: 'Viz', color: '#00ff88', orbitRadius: 130, orbitSpeed: 0.32, orbitOffset: 1.8, description: 'Statistical data visualization', projects: ['Netflix EDA', 'Churn Prediction'] },
    { id: 'arima', name: 'ARIMA', icon: '📅', level: 72, category: 'ML', color: '#ffd700', orbitRadius: 215, orbitSpeed: 0.18, orbitOffset: 3.1, description: 'Time series forecasting', projects: ['Sales Forecasting'] },
    { id: 'tableau', name: 'Tableau', icon: '📊', level: 80, category: 'Viz', color: '#ff2d78', orbitRadius: 165, orbitSpeed: 0.26, orbitOffset: 0.5, description: 'Interactive BI dashboards', projects: ['Business Reporting'] },
    { id: 'fastapi', name: 'FastAPI', icon: '🔌', level: 65, category: 'Deploy', color: '#b829dd', orbitRadius: 195, orbitSpeed: 0.21, orbitOffset: 4.7, description: 'ML model serving as REST APIs', projects: ['Churn Prediction API'] },
]

function proficiencyLabel(level: number) {
    if (level >= 85) return { text: 'Expert', color: 'var(--cyan)' }
    if (level >= 70) return { text: 'Proficient', color: 'var(--purple)' }
    return { text: 'Familiar', color: 'var(--gold)' }
}

export default function SkillConstellation() {
    const [time, setTime] = useState(0)
    const [selected, setSelected] = useState<SkillNode | null>(null)
    const [hovered, setHovered] = useState<string | null>(null)
    const rafRef = useRef<number>(0)
    const lastRef = useRef<number>(0)
    const cx = 240
    const cy = 240

    useEffect(() => {
        const tick = (ts: number) => {
            const dt = lastRef.current ? (ts - lastRef.current) / 1000 : 0
            lastRef.current = ts
            setTime(t => t + dt)
            rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafRef.current)
    }, [])

    const getPos = (skill: SkillNode) => {
        const angle = time * skill.orbitSpeed + skill.orbitOffset
        return {
            x: cx + Math.cos(angle) * skill.orbitRadius,
            y: cy + Math.sin(angle) * skill.orbitRadius * 0.38,
        }
    }

    return (
        <div className="relative w-full flex flex-col items-center">
            {/* SVG Constellation */}
            <div className="relative w-full max-w-[480px] mx-auto select-none">
                <svg viewBox="0 0 480 480" className="w-full" style={{ overflow: 'visible' }}>
                    <defs>
                        {/* Orbit ellipses */}
                        {[90, 115, 130, 140, 155, 165, 175, 180, 195, 200, 215].map(r => (
                            <ellipse key={r} id={`orbit-${r}`} cx={cx} cy={cy} rx={r} ry={r * 0.38} fill="none" />
                        ))}
                        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.35" />
                            <stop offset="60%" stopColor="#b829dd" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Orbit rings */}
                    {[...new Set(skills.map(s => s.orbitRadius))].map(r => (
                        <ellipse
                            key={r}
                            cx={cx} cy={cy}
                            rx={r} ry={r * 0.38}
                            fill="none"
                            stroke="rgba(0,212,255,0.06)"
                            strokeWidth="1"
                            strokeDasharray="4 6"
                        />
                    ))}

                    {/* Glow core */}
                    <circle cx={cx} cy={cy} r={60} fill="url(#core-glow)" />

                    {/* Connection lines to selected */}
                    {selected && (() => {
                        const sp = getPos(selected)
                        return skills
                            .filter(s => s.id !== selected.id)
                            .map(s => {
                                const p = getPos(s)
                                return (
                                    <line
                                        key={s.id}
                                        x1={sp.x} y1={sp.y}
                                        x2={p.x} y2={p.y}
                                        stroke={selected.color}
                                        strokeWidth="0.5"
                                        strokeOpacity="0.18"
                                    />
                                )
                            })
                    })()}

                    {/* Core center */}
                    <circle cx={cx} cy={cy} r={28}
                        fill="rgba(10,10,15,0.95)"
                        stroke="rgba(0,212,255,0.2)"
                        strokeWidth="1.5"
                    />
                    <text x={cx} y={cy - 5} textAnchor="middle" fontSize="14" fill="var(--cyan)" fontFamily="JetBrains Mono">DS</text>
                    <text x={cx} y={cy + 11} textAnchor="middle" fontSize="8" fill="var(--text-muted)" fontFamily="JetBrains Mono">CORE</text>

                    {/* Skill nodes */}
                    {skills.map(skill => {
                        const pos = getPos(skill)
                        const isSelected = selected?.id === skill.id
                        const isHovered = hovered === skill.id
                        const r = isSelected ? 18 : isHovered ? 16 : 13
                        return (
                            <g
                                key={skill.id}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelected(isSelected ? null : skill)}
                                onMouseEnter={() => setHovered(skill.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {/* Glow ring */}
                                <circle
                                    cx={pos.x} cy={pos.y} r={r + 10}
                                    fill="none"
                                    stroke={skill.color}
                                    strokeWidth="1"
                                    strokeOpacity={isSelected || isHovered ? 0.4 : 0.08}
                                />
                                {/* Node bg */}
                                <circle
                                    cx={pos.x} cy={pos.y} r={r}
                                    fill={`${skill.color}18`}
                                    stroke={skill.color}
                                    strokeWidth={isSelected ? 2 : 1}
                                    strokeOpacity={isSelected ? 1 : 0.5}
                                />
                                {/* Icon */}
                                <text
                                    x={pos.x} y={pos.y + 5}
                                    textAnchor="middle"
                                    fontSize={isSelected ? "13" : "10"}
                                >
                                    {skill.icon}
                                </text>
                                {/* Label */}
                                {(isHovered || isSelected) && (
                                    <text
                                        x={pos.x} y={pos.y + r + 14}
                                        textAnchor="middle"
                                        fontSize="8"
                                        fill={skill.color}
                                        fontFamily="JetBrains Mono"
                                    >
                                        {skill.name}
                                    </text>
                                )}
                            </g>
                        )
                    })}
                </svg>
            </div>

            {/* Detail Panel */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="w-full max-w-[480px] glass-card rounded-2xl p-5 mt-2"
                        style={{ border: `1px solid ${selected.color}30` }}
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.28 }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{selected.icon}</span>
                                <div>
                                    <div className="font-bold text-white text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>{selected.name}</div>
                                    <div className="text-xs mono" style={{ color: selected.color }}>{selected.category}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold mono" style={{ color: selected.color }}>{selected.level}%</div>
                                <div className="text-xs" style={{ color: proficiencyLabel(selected.level).color }}>
                                    {proficiencyLabel(selected.level).text}
                                </div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="h-1.5 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: `linear-gradient(90deg, ${selected.color}, ${selected.color}70)` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${selected.level}%` }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>

                        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{selected.description}</p>

                        <div>
                            <div className="text-xs mono mb-2" style={{ color: 'var(--text-muted)' }}>USED IN</div>
                            <div className="flex flex-wrap gap-1.5">
                                {selected.projects.map(p => (
                                    <span key={p} className="tag-cyan">{p}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>Click any node to explore</p>
        </div>
    )
}
