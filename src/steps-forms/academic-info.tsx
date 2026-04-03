import FormWrapper from "./form-wrapper";
import { inputclassName } from "./student-info";

type AcademicData = {
  studentClass: string;
  section: string;
  rollNumber: string;
  obtainedmarks: string;
};

type AcademicFormData = AcademicData & {
  updateFields: (fields: Partial<AcademicData>) => void;
};

const AcademicInfo = ({
  studentClass,
  section,
  rollNumber,
  obtainedmarks,
  updateFields,
}: AcademicFormData) => {
  return (
    <FormWrapper title="Academic Details">
      <div>
        <label className="text-sm font-bold text-slate-700">
          Student Class
        </label>
        <input
          autoFocus
          required
          type="text"
          value={studentClass}
          onChange={(e) => updateFields({ studentClass: e.target.value })}
          className={inputclassName}
          placeholder="Enter class"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">Section</label>
        <input
          required
          type="text"
          value={section}
          onChange={(e) => updateFields({ section: e.target.value })}
          className={inputclassName}
          placeholder="Enter section"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">Roll Number</label>
        <input
          required
          type="text"
          value={rollNumber}
          onChange={(e) => updateFields({ rollNumber: e.target.value })}
          className={inputclassName}
          placeholder="Enter roll number"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">
          Obtained Marks
        </label>
        <input
          required
          min={0}
          max={100}
          type="number"
          value={obtainedmarks}
          onChange={(e) => updateFields({ obtainedmarks: e.target.value })}
          className={inputclassName}
          placeholder="Enter marks"
        />
      </div>
    </FormWrapper>
  );
};

export default AcademicInfo;
