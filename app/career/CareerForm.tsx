"use client";
import { useForm, FieldErrors } from "react-hook-form";
import { useState } from "react";

type CareerFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resume: FileList;
  message?: string;
};

function CareerForm() {
  const [formState, setFormState] = useState<"accent" | "pending" | "success" | "failed">("accent");
  const [buttonText, setButtonText] = useState("Submit to Join Us");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<CareerFormValues>({ mode: "onTouched" });

  const onSubmit = async (data: CareerFormValues) => {
    setFormState("pending");
    setButtonText("Uploading...");

    // Mock API behavior – adapt this to your real backend endpoint.
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("message", data.message || "");
      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }

      // Replace the following fetch call with your actual file-upload endpoint
      const response = await fetch("/api/career-submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormState("success");
      setButtonText("Submitted");
      setSuccessMsg("Your application was submitted successfully.");
      reset();
    } catch (error) {
      setFormState("failed");
      setButtonText("Submit Application");
      setSuccessMsg("Failed to submit your application. Please try again later.");
      console.log(error);
    }
  };

  const fieldStatusClass = (
    field: keyof CareerFormValues,
    errors: FieldErrors<CareerFormValues>,
    touched: Partial<Record<keyof CareerFormValues, boolean>>
  ) => {
    if (errors[field]) return "input-group error";
    if (touched[field]) return "input-group success";
    return "input-group";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="career-form contact-form">
      <div className={fieldStatusClass("firstName", errors, touchedFields)}>
        <label className="input-label">First Name</label>
        <input
          placeholder="First Name"
          className="input-field"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <small className="error">{errors.firstName.message}</small>}
      </div>

      <div className={fieldStatusClass("lastName", errors, touchedFields)}>
        <label className="input-label">Last Name</label>
        <input
          placeholder="Last Name"
          className="input-field"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <small className="error">{errors.lastName.message}</small>}
      </div>

      <div className={fieldStatusClass("email", errors, touchedFields)}>
        <label className="input-label">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
          })}
        />
        {errors.email && <small className="error">{errors.email.message}</small>}
      </div>

      <div className={fieldStatusClass("phoneNumber", errors, touchedFields)}>
        <label className="input-label">Phone Number</label>
        <input
          placeholder="Phone Number"
          className="input-field"
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        {errors.phoneNumber && <small className="error">{errors.phoneNumber.message}</small>}
      </div>

      <div className={`${fieldStatusClass("resume", errors, touchedFields)} full-edge`}>
        <label className="input-label" htmlFor="file">Attach Resume</label>
        <input
          type="file"
          id="file"
          className="input-field"
          accept=".pdf"
          {...register("resume", {
            required: "Resume is required",
            validate: {
              maxSize: (files) => files?.[0]?.size < 5 * 1024 * 1024 || "File size must be under 5MB",
            },
          })}
        />
        {errors.resume && <small className="error">{errors.resume.message}</small>}
      </div>

      <div className={"input-group full-edge"}>
        <label className="input-label">Enter your message (optional)</label>
        <textarea
          placeholder="Enter your message"
          className="input-field textarea"
          {...register("message")}
          rows={4}
        />
      </div>

      <div className="input-group full-edge">
        <button type="submit" className={`button button--${formState}`} data-icon="end">
          <span>{buttonText}</span>
          <span className="icon"><i className="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>

      {successMsg && (
        <div className="input-group full-edge">
          <div className={`form-message-box type--${formState}`}>{successMsg}</div>
        </div>
      )}
    </form>
  );
}

export default CareerForm;
