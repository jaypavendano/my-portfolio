import { ReactNode } from 'react';

export const Section = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) => {
  return <section className={`container py-28 ${styles}`}>{children}</section>;
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-white text-4xl text-center font-space_Grotesk font-medium mb-20">
      {title}
    </h3>
  );
};
