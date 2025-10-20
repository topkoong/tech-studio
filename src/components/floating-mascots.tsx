'use client';

import { motion } from 'framer-motion';

interface FloatingMascotsProps {
  count?: number;
  className?: string;
}

export function FloatingMascots({
  count = 8,
  className = '',
}: FloatingMascotsProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute z-50 ${className}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 60 - 30, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        >
          {/* Exact Mascot SVG from Banner - More Visible */}
          <svg
            viewBox='0 0 200 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-24 h-24 opacity-60 drop-shadow-lg'
          >
            <g
              style={{
                transform: 'translateY(-0.248438px)',
                transformOrigin: '100px 99.5px',
              }}
            >
              <ellipse
                cx='100'
                cy='80'
                rx='45'
                ry='40'
                fill='url(#mascotGradient1)'
              />
              <circle cx='85' cy='75' r='8' fill='#0a0a0a' />
              <circle cx='115' cy='75' r='8' fill='#0a0a0a' />
              <circle
                cx='87'
                cy='73'
                r='3'
                fill='#22c55e'
                opacity='0.9894991819892311'
              />
              <circle
                cx='117'
                cy='73'
                r='3'
                fill='#22c55e'
                opacity='0.9894991819892311'
              />
              <path
                d='M 85 90 Q 100 98 115 90'
                stroke='#0a0a0a'
                strokeWidth='3'
                fill='none'
                strokeLinecap='round'
              />
              <line
                x1='100'
                y1='40'
                x2='100'
                y2='25'
                stroke='#22c55e'
                strokeWidth='3'
                strokeLinecap='round'
              />
              <circle
                cx='100'
                cy='20'
                r='6'
                fill='#22c55e'
                style={{
                  transform: 'scale(1.0109)',
                  transformOrigin: '100px 20px',
                }}
              />
              <rect
                x='70'
                y='110'
                width='60'
                height='50'
                rx='15'
                fill='url(#mascotGradient2)'
              />
              <rect
                x='45'
                y='120'
                width='20'
                height='30'
                rx='10'
                fill='#22c55e'
                style={{
                  transformOrigin: '55px 135px',
                  transform: 'rotate(0.210016deg)',
                }}
              />
              <rect
                x='135'
                y='120'
                width='20'
                height='30'
                rx='10'
                fill='#22c55e'
                style={{
                  transformOrigin: '145px 135px',
                  transform: 'rotate(-0.210016deg)',
                }}
              />
              <g
                style={{
                  transformOrigin: '150px 152.5px',
                  transform: 'rotate(-0.315025deg)',
                }}
              >
                <rect
                  x='148'
                  y='145'
                  width='4'
                  height='20'
                  rx='2'
                  fill='#16a34a'
                />
                <polygon points='150,145 148,140 152,140' fill='#0a0a0a' />
              </g>
              <text
                x='100'
                y='140'
                fontSize='16'
                fill='#0a0a0a'
                textAnchor='middle'
                fontWeight='bold'
              >
                DEV
              </text>
              <rect
                x='80'
                y='160'
                width='15'
                height='25'
                rx='8'
                fill='#16a34a'
              />
              <rect
                x='105'
                y='160'
                width='15'
                height='25'
                rx='8'
                fill='#16a34a'
              />
            </g>
            <circle
              cx='60'
              cy='60'
              r='2'
              fill='#22c55e'
              opacity='0.021001636021537706'
              style={{
                transform: 'scale(0.0315025)',
                transformOrigin: '60px 60px',
              }}
            />
            <circle
              cx='140'
              cy='70'
              r='2'
              fill='#16a34a'
              opacity='0.44334568371414207'
              style={{
                transform: 'scale(0.665019)',
                transformOrigin: '140px 70px',
              }}
            />
            <circle
              cx='70'
              cy='140'
              r='2'
              fill='#22c55e'
              opacity='0.9789983639784623'
              style={{
                transform: 'scale(1.4685)',
                transformOrigin: '70px 140px',
              }}
            />
            <defs>
              <linearGradient
                id='mascotGradient1'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#22c55e' />
                <stop offset='100%' stopColor='#16a34a' />
              </linearGradient>
              <linearGradient
                id='mascotGradient2'
                x1='0%'
                y1='0%'
                x2='100%'
                y2='100%'
              >
                <stop offset='0%' stopColor='#16a34a' />
                <stop offset='100%' stopColor='#22c55e' />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </>
  );
}
