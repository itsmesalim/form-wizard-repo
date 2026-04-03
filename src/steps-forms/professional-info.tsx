import FormWrapper from "./form-wrapper";
import { inputclassName } from "./student-info";

type ProfessionalData = {
  experience: string;
  certifications: string;
  careerGoal: string;
};

type ProfessionalFormProps = ProfessionalData & {
  updateFields: (fields: Partial<ProfessionalData>) => void;
};

const ProfessionalInfo = ({
  experience,
  certifications,
  careerGoal,
  updateFields,
}: ProfessionalFormProps) => {
  return (
    <FormWrapper title="Professional Details">
      <div>
        <label className="text-sm font-bold text-slate-700">Experience</label>
        <input
          autoFocus
          required
          type="text"
          value={experience}
          onChange={(e) => updateFields({ experience: e.target.value })}
          className={inputclassName}
          placeholder="Enter experience"
        />
      </div>
      <div>
        <label className="text-sm font-bold text-slate-700">
          Certifications
        </label>
        <input
          required
          type="text"
          value={certifications}
          onChange={(e) => updateFields({ certifications: e.target.value })}
          className={inputclassName}
          placeholder="Enter certifications"
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-bold text-slate-700">Career Goal</label>
        <input
          required
          type="text"
          value={careerGoal}
          onChange={(e) => updateFields({ careerGoal: e.target.value })}
          className={inputclassName}
          placeholder="Enter career goal"
        />
      </div>
    </FormWrapper>
  );
};

export default ProfessionalInfo;
