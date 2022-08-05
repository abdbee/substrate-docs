import * as React from 'react';

function SvgCheckMark(props) {
  return (
    <svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
      <path
        fill="#24CC85"
        d="M28.5714 32H3.42857C1.535 32 0 30.465 0 28.5714V3.42857C0 1.535 1.535 0 3.42857 0H28.5714C30.465 0 32 1.535 32 3.42857V28.5714C32 30.465 30.465 32 28.5714 32ZM13.951 24.9958L27.0939 11.8529C27.5401 11.4066 27.5401 10.683 27.0939 10.2367L25.4776 8.6205C25.0314 8.17421 24.3077 8.17414 23.8614 8.6205L13.1429 19.3389L8.13864 14.3347C7.69236 13.8884 6.96871 13.8884 6.52236 14.3347L4.90614 15.9509C4.45986 16.3972 4.45986 17.1209 4.90614 17.5671L12.3347 24.9957C12.7811 25.4421 13.5046 25.4421 13.951 24.9958Z"
      />
    </svg>
  );
}

export default SvgCheckMark;
