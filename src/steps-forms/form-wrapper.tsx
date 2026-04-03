import type { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <section>
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Step Form
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
          {title}
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
};

export default FormWrapper;
