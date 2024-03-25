interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`bg-primary px-7 py-2 text-white rounded-full ${className}`}
    >
      {children}
    </button>
  );
}
