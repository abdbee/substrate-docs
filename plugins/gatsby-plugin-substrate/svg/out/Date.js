import * as React from 'react';

function SvgDate(props) {
  return (
    <svg width={16} height={18} viewBox="0 0 16 18" {...props}>
      <path d="M13.8333 2.33317H13V0.666504H11.3333V2.33317H4.66667V0.666504H3V2.33317H2.16667C1.24167 2.33317 0.508333 3.08317 0.508333 3.99984L0.5 15.6665C0.5 16.5832 1.24167 17.3332 2.16667 17.3332H13.8333C14.75 17.3332 15.5 16.5832 15.5 15.6665V3.99984C15.5 3.08317 14.75 2.33317 13.8333 2.33317ZM13.8333 15.6665H2.16667V7.33317H13.8333V15.6665ZM13.8333 5.6665H2.16667V3.99984H13.8333V5.6665ZM8 9.83317H12.1667V13.9998H8V9.83317Z" />
    </svg>
  );
}

export default SvgDate;
