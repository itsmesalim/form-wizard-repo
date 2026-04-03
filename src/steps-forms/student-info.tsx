import FormWrapper from "./form-wrapper";

type StudentData = {
  fullName: string;
  fatherName: string;
  age: string;
  Address: string;
};

type StudentFormProps = StudentData & {
  updateFields: (fields: Partial<StudentData>) => void;
};

export const inputclassName =
  "mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100";

const StudentInfo = ({
  fullName,
  fatherName,
  age,
  Address,
  updateFields,
}: StudentFormProps) => {
  return (
    <FormWrapper title="Student Details">
      <div>
        <label className="text-sm font-bold text-slate-700">Full Name</label>
        <input
          autoFocus
          required
          type="text"
          value={fullName}
          onChange={(e) => updateFields({ fullName: e.target.value })}
          className={inputclassName}
          placeholder="Enter student full name"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">
          Father's Name
        </label>
        <input
          required
          type="text"
          value={fatherName}
          onChange={(e) => updateFields({ fatherName: e.target.value })}
          className={inputclassName}
          placeholder="Enter father name"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">Age</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
          className={inputclassName}
          placeholder="Enter age"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">Address</label>
        <input
          required
          min={1}
          type="text"
          value={Address}
          onChange={(e) => updateFields({ Address: e.target.value })}
          className={inputclassName}
          placeholder="Enter address"
        />
      </div>
    </FormWrapper>
  );
};

export default StudentInfo;
