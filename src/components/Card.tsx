import { forwardRef } from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card=forwardRef<HTMLDivElement, CardProps>(({ className, children }, ref)=>{
  return (
    <div ref={ref} className={`bg-white p-5 rounded-3xl shadow-xl ${className}`}>
      {children}
    </div>
  );
})
