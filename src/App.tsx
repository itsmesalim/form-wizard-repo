import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import UseMultiStepForm from "./steps-forms/use-multi-step-form";
import StudentInfo from "./steps-forms/student-info";
import AcademicInfo from "./steps-forms/academic-info";
import ProfessionalInfo from "./steps-forms/professional-info";
import TableComponent from "./table";
import SortRecord from "./sort-record";

type FormData = {
  fullName: string;
  fatherName: string;
  age: string;
  Address: string;
  studentClass: string;
  section: string;
  rollNumber: string;
  obtainedmarks: string;
  experience: string;
  certifications: string;
  careerGoal: string;
};

const INITIAL_DATA: FormData = {
  fullName: "",
  fatherName: "",
  age: "",
  Address: "",
  studentClass: "",
  section: "",
  rollNumber: "",
  obtainedmarks: "",
  experience: "",
  certifications: "",
  careerGoal: "",
};

const FORMS_STORAGE_KEY = "formsData";
const CURRENT_FORM_STORAGE_KEY = "currentFormData";

function getStoredArrayData(): FormData[] {
  try {
    const storedValue = localStorage.getItem(FORMS_STORAGE_KEY);
    return storedValue ? (JSON.parse(storedValue) as FormData[]) : [];
  } catch {
    return [];
  }
}

function getStoredFormData(): FormData {
  try {
    const storedValue = localStorage.getItem(CURRENT_FORM_STORAGE_KEY);
    return storedValue
      ? { ...INITIAL_DATA, ...(JSON.parse(storedValue) as Partial<FormData>) }
      : INITIAL_DATA;
  } catch {
    return INITIAL_DATA;
  }
}

function App() {
  const [data, setData] = useState<FormData>(getStoredFormData);
  const [formData, setFormData] = useState<FormData[]>(getStoredArrayData);
  const stepTitles = [
    "Student Details",
    "Academic Details",
    "Professional Details",
  ];

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    UseMultiStepForm([
      <StudentInfo {...data} updateFields={updateFields} />,
      <AcademicInfo {...data} updateFields={updateFields} />,
      <ProfessionalInfo {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    if (!isLastStep) return next();
    setFormData((prevFormData) => [...prevFormData, data]);
    setData(INITIAL_DATA);
    localStorage.removeItem(CURRENT_FORM_STORAGE_KEY);
    alert("Registration Successful");
  };

  useEffect(() => {
    localStorage.setItem(FORMS_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem(CURRENT_FORM_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_22%),linear-gradient(180deg,#f8fafc_0%,#e0f2fe_48%,#f8fafc_100%)] px-4 py-8 font-[Arial] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white/80 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-6 py-8 sm:px-8 lg:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-sky-700">
                Multi Step Registration
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Smart student profile form with a cleaner workflow.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Har step ko clear sections me organize kiya gaya hai taake data
                entry fast, readable aur refresh ke baad persistent rahe.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stepTitles.map((title, index) => {
                  const isActive = index === currentStepIndex;
                  const isCompleted = index < currentStepIndex;

                  return (
                    <div
                      key={title}
                      className={`rounded-3xl border p-4 transition-all ${
                        isActive
                          ? "border-sky-300 bg-sky-50 shadow-[0_14px_30px_-20px_rgba(2,132,199,0.65)]"
                          : isCompleted
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-slate-200 bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black ${
                            isActive
                              ? "bg-sky-600 text-white"
                              : isCompleted
                                ? "bg-emerald-600 text-white"
                                : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                            isActive
                              ? "text-sky-700"
                              : isCompleted
                                ? "text-emerald-700"
                                : "text-slate-500"
                          }`}
                        >
                          {isCompleted
                            ? "Done"
                            : isActive
                              ? "Current"
                              : "Pending"}
                        </span>
                      </div>
                      <p className="mt-4 text-base font-bold text-slate-900">
                        {title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative border-t border-slate-200 bg-slate-950 px-6 py-8 text-white sm:px-8 lg:border-l lg:border-t-0 lg:px-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">
                  Live Summary
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-tight">
                  Draft record overview
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                      Candidate
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      {data.fullName || "Your student name"}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      {data.fatherName || "Father name will appear here"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                        Marks
                      </p>
                      <p className="mt-2 text-2xl font-black text-cyan-300">
                        {data.obtainedmarks || "--"}
                      </p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                        Class
                      </p>
                      <p className="mt-2 text-2xl font-black text-white">
                        {data.studentClass || "--"}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-transparent p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                      Current Step
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      {stepTitles[currentStepIndex]}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Step {currentStepIndex + 1} of {steps.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.4)] backdrop-blur sm:p-8"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
          <div className="relative">
            <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
                  Registration Form
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {stepTitles[currentStepIndex]}
                </h2>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-800">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white">
                  {currentStepIndex + 1}
                </span>
                <span>
                  Step {currentStepIndex + 1} / {steps.length}
                </span>
              </div>
            </div>

            {step}

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="cursor-pointer rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="cursor-pointer rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.8)] transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                {isLastStep ? "Finish Registration" : "Save & Continue"}
              </button>
            </div>
          </div>
        </form>

        <SortRecord formData={formData} />

        <TableComponent formData={formData} />
      </div>
    </div>
  );
}

export default App;
