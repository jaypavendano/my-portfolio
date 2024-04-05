import { ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => {
  return <section className="container my-28">{children}</section>;
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-white text-4xl text-center font-space_Grotesk font-medium mb-14">
      {title}
    </h3>
  );
};
