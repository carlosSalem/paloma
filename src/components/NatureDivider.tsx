import { Leaf } from 'lucide-react';

interface NatureDividerProps {
  variant?: 'light' | 'dark' | 'sage';
}

export default function NatureDivider({ variant = 'light' }: NatureDividerProps) {
  const bgColors = {
    light: 'bg-cream-50',
    dark: 'bg-sage-800',
    sage: 'bg-sage-700',
  };

  const leafColors = {
    light: 'text-sage-300',
    dark: 'text-sage-600',
    sage: 'text-sage-500',
  };

  const lineColors = {
    light: 'bg-sage-200',
    dark: 'bg-sage-600',
    sage: 'bg-sage-500',
  };

  return (
    <div className={`${bgColors[variant]} py-8 relative overflow-hidden`}>
      {/* Decorative leaves floating */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <Leaf className={`w-5 h-5 ${leafColors[variant]} opacity-40 rotate-[35deg]`} />
      </div>
      <div className="absolute right-12 top-1/2 -translate-y-1/2">
        <Leaf className={`w-4 h-4 ${leafColors[variant]} opacity-30 -rotate-[20deg]`} />
      </div>
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
        <Leaf className={`w-3 h-3 ${leafColors[variant]} opacity-25 rotate-[15deg]`} />
      </div>
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2">
        <Leaf className={`w-4 h-4 ${leafColors[variant]} opacity-35 -rotate-[40deg]`} />
      </div>

      {/* Center divider */}
      <div className="flex items-center justify-center gap-4">
        <div className={`h-px w-16 ${lineColors[variant]} rounded-full`} />
        <Leaf className={`w-5 h-5 ${leafColors[variant]}`} />
        <div className={`h-px w-16 ${lineColors[variant]} rounded-full`} />
      </div>
    </div>
  );
}
