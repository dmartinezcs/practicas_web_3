import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      {children}
    </section>
  );
}