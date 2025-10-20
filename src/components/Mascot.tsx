import { motion } from 'framer-motion';

interface MascotProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

export function Mascot({ size = 'medium', animated = true }: MascotProps) {
  const sizes = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  const MascotSVG = () => (
    <svg
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      {/* Body - Robot UX Designer */}
      <motion.g
        animate={
          animated
            ? {
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                },
              }
            : undefined
        }
      >
        {/* Head */}
        <ellipse cx='100' cy='80' rx='45' ry='40' fill='url(#gradient1)' />

        {/* Eyes */}
        <circle cx='85' cy='75' r='8' fill='#0a0a0a' />
        <circle cx='115' cy='75' r='8' fill='#0a0a0a' />
        <motion.circle
          cx='87'
          cy='73'
          r='3'
          fill='#84cc16'
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx='117'
          cy='73'
          r='3'
          fill='#84cc16'
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Smile */}
        <path
          d='M 85 90 Q 100 98 115 90'
          stroke='#0a0a0a'
          strokeWidth='3'
          fill='none'
          strokeLinecap='round'
        />

        {/* Antenna */}
        <line
          x1='100'
          y1='40'
          x2='100'
          y2='25'
          stroke='#84cc16'
          strokeWidth='3'
          strokeLinecap='round'
        />
        <motion.circle
          cx='100'
          cy='20'
          r='6'
          fill='#84cc16'
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <animate
            attributeName='opacity'
            values='0.5;1;0.5'
            dur='1.5s'
            repeatCount='indefinite'
          />
        </motion.circle>

        {/* Body */}
        <rect
          x='70'
          y='110'
          width='60'
          height='50'
          rx='15'
          fill='url(#gradient2)'
        />

        {/* Arms */}
        <motion.rect
          x='45'
          y='120'
          width='20'
          height='30'
          rx='10'
          fill='#84cc16'
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '55px 120px' }}
        />
        <motion.rect
          x='135'
          y='120'
          width='20'
          height='30'
          rx='10'
          fill='#84cc16'
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '145px 120px' }}
        />

        {/* Design tool in hand - Pen */}
        <motion.g
          animate={{ rotate: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '150px 140px' }}
        >
          <rect x='148' y='145' width='4' height='20' rx='2' fill='#22c55e' />
          <polygon points='150,145 148,140 152,140' fill='#0a0a0a' />
        </motion.g>

        {/* UX Icon on chest */}
        <text
          x='100'
          y='140'
          fontSize='16'
          fill='#0a0a0a'
          textAnchor='middle'
          fontWeight='bold'
        >
          UX
        </text>

        {/* Legs */}
        <rect x='80' y='160' width='15' height='25' rx='8' fill='#a3e635' />
        <rect x='105' y='160' width='15' height='25' rx='8' fill='#a3e635' />
      </motion.g>

      {/* Sparkles around mascot */}
      <motion.circle
        cx='60'
        cy='60'
        r='2'
        fill='#84cc16'
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx='140'
        cy='70'
        r='2'
        fill='#a3e635'
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx='70'
        cy='140'
        r='2'
        fill='#22c55e'
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      <defs>
        <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#84cc16' />
          <stop offset='100%' stopColor='#a3e635' />
        </linearGradient>
        <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#a3e635' />
          <stop offset='100%' stopColor='#84cc16' />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className={`${sizes[size]} relative`}>
      <MascotSVG />
    </div>
  );
}
