export function LemonGlow() {
  return (
    <div className='absolute inset-0 -z-10 pointer-events-none'>
      <div
        className='absolute w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-lime-400/15 dark:from-lime-500/30 dark:to-green-500/30 rounded-full blur-3xl'
        style={{ top: '10%', left: '10%' }}
      />
      <div
        className='absolute w-80 h-80 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 dark:from-green-400/25 dark:to-lime-400/25 rounded-full blur-3xl'
        style={{ bottom: '18%', right: '12%' }}
      />
      <div
        className='absolute w-64 h-64 bg-gradient-to-r from-emerald-300/8 to-lime-300/8 dark:from-lime-400/20 dark:to-green-400/20 rounded-full blur-2xl'
        style={{ top: '58%', left: '48%' }}
      />
      <div
        className='absolute w-32 h-32 bg-gradient-to-r from-lime-400/12 to-emerald-400/12 dark:from-lime-500/40 dark:to-green-500/40 rounded-full blur-xl'
        style={{ top: '28%', right: '28%' }}
      />
      <div
        className='absolute w-48 h-48 bg-gradient-to-r from-emerald-300/8 to-lime-300/8 dark:from-green-400/25 dark:to-lime-400/25 rounded-full blur-2xl'
        style={{ bottom: '38%', left: '18%' }}
      />
    </div>
  );
}
