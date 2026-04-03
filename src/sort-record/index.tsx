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

type FilteredComponentProps = {
  formData: FormData[];
};

const SortRecord = ({ formData }: FilteredComponentProps) => {
  const topStudents = [...formData]
    .sort((a, b) => Number(b.obtainedmarks) - Number(a.obtainedmarks))
    .slice(0, 3);

  const rankStyles = [
    "from-amber-300 via-yellow-200 to-amber-100 text-amber-950 border-amber-300",
    "from-slate-300 via-slate-200 to-slate-50 text-slate-900 border-slate-300",
    "from-orange-300 via-orange-200 to-orange-50 text-orange-950 border-orange-300",
  ];

  return (
    <section className="mt-10 w-full overflow-hidden rounded-[28px] border border-slate-200 bg-linear-to-br from-slate-950 via-sky-950 to-cyan-900 shadow-[0_24px_60px_-24px_rgba(14,116,144,0.65)]">
      <div className="border-b border-white/10 px-6 py-6 text-white sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
          Student Leaderboard
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Top 3 Students
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-200/80">
              Based on Highest marks performance records highlight here.
            </p>
          </div>
          <div className="inline-flex w-fit rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
            Total entries: {formData.length}
          </div>
        </div>
      </div>

      {topStudents.length > 0 ? (
        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">
          {topStudents.map(
            (
              {
                fullName,
                fatherName,
                age,
                Address,
                studentClass,
                section,
                rollNumber,
                obtainedmarks,
                experience,
                certifications,
                careerGoal,
              },
              index,
            ) => (
              <article
                key={`${index}`}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/95 p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.75)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${rankStyles[index] ?? rankStyles[2]}`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className={`inline-flex rounded-full border bg-linear-to-r px-3 py-1 text-xs font-extrabold uppercase tracking-[0.25em] ${
                        rankStyles[index] ?? rankStyles[2]
                      }`}
                    >
                      #{index + 1} Rank
                    </div>
                    <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
                      {fullName}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      S/O {fatherName}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950 px-4 py-3 text-right text-white shadow-lg">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                      Marks
                    </p>
                    <p className="text-3xl font-black leading-none">
                      {obtainedmarks}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Class
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {studentClass}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Section
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {section}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Roll No
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {rollNumber}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Age
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">{age}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 rounded-[22px] bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {Address}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Experience & Skills
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {experience || "No experience added"}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {certifications || "No certifications added"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Career Goal
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {careerGoal || "No goal added"}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <div className="rounded-3xl border border-dashed border-cyan-200/30 bg-white/10 px-6 py-10 text-center text-white backdrop-blur-sm">
            <p className="text-lg font-bold tracking-tight">
              Now Leader Board is empty!
            </p>
            <p className="mt-2 text-sm text-slate-200/80">kkk</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SortRecord;
