/**
 * Geometric "E" mark used by the generated icon routes.
 *
 * Drawn from positioned bars rather than text: Satori (the renderer behind
 * ImageResponse) has no bold face available, so a text glyph renders thin and
 * illegible at favicon sizes. All values are percentages so one definition
 * scales from 32px to 180px.
 */
export function BrandMark({ rounded }: { rounded: string }) {
  const bar = { position: 'absolute' as const, background: '#ffffff' };
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #104e73 0%, #0082c9 100%)',
        borderRadius: rounded,
      }}
    >
      <div
        style={{ ...bar, left: '30%', top: '26%', width: '9%', height: '48%' }}
      />
      <div
        style={{ ...bar, left: '30%', top: '26%', width: '40%', height: '9%' }}
      />
      <div
        style={{
          ...bar,
          left: '30%',
          top: '45.5%',
          width: '32%',
          height: '9%',
        }}
      />
      <div
        style={{ ...bar, left: '30%', top: '65%', width: '40%', height: '9%' }}
      />
    </div>
  );
}
