import * as React from 'react';

function SvgNodeTemplate(props) {
  return (
    <svg width={42} height={22} viewBox="0 0 42 22" {...props}>
      <path d="M8.4 11C8.4 11.7425 8.45906 12.4781 8.57063 13.2L0.7875 13.2C0.354375 13.2 0 12.8287 0 12.375L0 9.625C0 9.17125 0.354375 8.8 0.7875 8.8L8.57063 8.8C8.45906 9.52187 8.4 10.2575 8.4 11ZM41.2125 8.8L33.4294 8.8C33.5475 9.52187 33.6 10.2575 33.6 11C33.6 11.7425 33.5409 12.4781 33.4294 13.2L41.2125 13.2C41.6456 13.2 42 12.8287 42 12.375L42 9.625C42 9.17125 41.6456 8.8 41.2125 8.8ZM21 8.1125C19.4775 8.1125 18.2437 9.405 18.2437 11C18.2437 12.595 19.4775 13.8875 21 13.8875C22.5225 13.8875 23.7563 12.595 23.7563 11C23.7563 9.405 22.5225 8.1125 21 8.1125ZM21 0C26.8013 0 31.5 4.9225 31.5 11C31.5 17.0775 26.8013 22 21 22C15.1987 22 10.5 17.0775 10.5 11C10.5 4.9225 15.1987 0 21 0Z" />
    </svg>
  );
}

export default SvgNodeTemplate;
