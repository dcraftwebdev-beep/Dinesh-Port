import styles from './Icon.module.css';

const paths = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M8 10.5V16M8 7.75v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.4-2.5 1.4 0 2.1 1 2.1 2.5V16" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.25 6.75v.01" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10.25 9.25v5.5l4.75-2.75z" />
    </>
  ),
  external: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M10 14l5-5M10.5 9H15v4.5" />
    </>
  ),
  arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
  sparkle: (
    <path
      d="M12 3.5c.5 4.3 3.7 7.5 8 8-4.3.5-7.5 3.7-8 8-.5-4.3-3.7-7.5-8-8 4.3-.5 7.5-3.7 8-8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  phone: (
    <path d="M5.5 4h3l1.5 4-2 1.25a9 9 0 0 0 5.25 5.25L14.5 12.5l4 1.5v3a2 2 0 0 1-2 2A13.5 13.5 0 0 1 3.5 6a2 2 0 0 1 2-2z" />
  ),
};

export default function Icon({ name, size = 24, className = '', ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${styles.icon} ${className}`}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
