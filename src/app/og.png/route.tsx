import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background: 'linear-gradient(135deg, #104e73 0%, #0082c9 100%)',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div
          style={{
            width: '18px',
            height: '72px',
            borderRadius: '9px',
            background: '#2ecfd8',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: '40px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          Triple E
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '76px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}
        >
          Technology Solutions
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '34px',
            color: '#a8e4ef',
            lineHeight: 1.3,
          }}
        >
          Managed services, cybersecurity, and IT consulting
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          fontSize: '28px',
          color: '#cfeaf7',
          letterSpacing: '0.04em',
        }}
      >
        Annapolis Valley, Nova Scotia · tripleetech.ca
      </div>
    </div>,
    size
  );
}
