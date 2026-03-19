import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CardWrapper({ children }: Props) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      {children}
    </div>
  );
}