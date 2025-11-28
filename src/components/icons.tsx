import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c-2 0-3-1-3-3s1-4 4-4 5 2 5 4-2 3-6 3Z" />
      <path d="M17.8 14.2A5.1 5.1 0 0 0 12 11.8a5.1 5.1 0 0 0-5.8 2.4" />
      <path d="M12 2a2.9 2.9 0 0 0-2.8 4.3 4.2 4.2 0 0 0 5.6 0A2.9 2.9 0 0 0 12 2Z" />
    </svg>
  );
}


export function Construction(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M10 12h4" />
      <path d="M12 10v4" />
      <path d="M2 10h.01" />
      <path d="M2 14h.01" />
      <path d="M22 10h-.01" />
      <path d="M22 14h-.01" />
      <path d="M6 18V6" />
      <path d="M18 18V6" />
    </svg>
  );
}

export function FileSpreadsheet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M15 13v6" />
      <path d="M12 19h6" />
      <path d="M9 13v6" />
      <path d="M6 19h6" />
    </svg>
  );
}
