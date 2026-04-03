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

type TableComponentProps = {
  formData: FormData[];
};

const TableComponent = ({ formData }: TableComponentProps) => {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-700">
            Submitted Records
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            Student Data Table
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            All submitted forms available in a clean, readable table format.
          </p>
        </div>
        <div className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">
          Total records: {formData.length}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-950 whitespace-nowrap">
            <tr>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Student
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Age
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Address
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Class
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Section
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Roll No
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Marks
              </th>
              <th className="p-4 text-left text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                Professional Info
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {formData.length > 0 ? (
              formData.map(
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
                  <tr
                    key={`${fullName}-${index}`}
                    className="align-top transition hover:bg-sky-50/60"
                  >
                    <td className="p-4">
                      <div className="min-w-55">
                        <p className="text-sm font-black text-slate-900">
                          {fullName}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          S/O {fatherName}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-semibold text-slate-700">
                      {age}
                    </td>
                    <td className="p-4">
                      <p className="min-w-55 text-sm leading-6 text-slate-600">
                        {Address}
                      </p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                        {studentClass}
                      </span>
                    </td>
                    <td className="p-4 text-sm font-semibold text-slate-700">
                      {section}
                    </td>
                    <td className="p-4 text-sm font-semibold text-slate-700">
                      {rollNumber}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-black text-cyan-800">
                        {obtainedmarks}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="min-w-65 space-y-2 rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-700">
                          <span className="font-black text-slate-900">
                            Experience:
                          </span>{" "}
                          {experience}
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          <span className="font-black text-slate-900">
                            Certifications:
                          </span>{" "}
                          {certifications}
                        </p>
                        <p className="text-sm font-semibold text-slate-700">
                          <span className="font-black text-slate-900">
                            Goal:
                          </span>{" "}
                          {careerGoal}
                        </p>
                      </div>
                    </td>
                  </tr>
                ),
              )
            ) : (
              <tr>
                <td className="p-10 text-center" colSpan={8}>
                  <p className="text-lg font-bold text-slate-700">
                    No submitted forms yet.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    when submiting the form records will be apear her. honge.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableComponent;
