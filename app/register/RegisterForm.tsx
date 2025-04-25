"use client";
import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type Country = {
  name: {
    common: string;
  };
  cca2: string;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  companyName: string;
  country: string;
  selfDescription: string;
  inquiryType: string;
  message?: string;
};
function RegisterForm() {
  const COUNTRY_API_URL = "https://restcountries.com/v3.1/all?fields=name,cca2";
  const [countries, setCountries] = useState<Country[]>([]);
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    mode: "onTouched",
  });

  const onSubmit = async (data: FormValues) => {
    setSuccessMsg("");
    try {
      const response = await fetch("https://coreconnect-stage.azurewebsites.net/form/Guest/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const finalData = await response.json();
      console.log("Success:", finalData);
      if (finalData.status == 200) {
        setSuccessMsg(finalData.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setSuccessMsg("Oops! Kindly check your form before submitting.");
      }
    } catch {
      setSuccessMsg("Oops! Unable to send request now. Kindly eract us at info@iflygeo.com");
    }
  };

  const fieldStatusClass = (field: keyof FormValues, errors: FieldErrors<FormValues>, touched: Partial<Record<keyof FormValues, boolean>>) => {
    if (errors[field]) return "input-group error";
    if (touched[field]) return "input-group success";
    return "input-group";
  };

  useEffect(() => {
    fetch(COUNTRY_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const sortedCountries = data.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className={fieldStatusClass("firstName", errors, touchedFields)}>
        <label className="input-label">First Name</label>
        <input placeholder="First Name" className="input-field" {...register("firstName", { required: "First name is required" })} />
        {errors.firstName && <small className="error">{errors.firstName.message}</small>}
      </div>
      <div className={fieldStatusClass("lastName", errors, touchedFields)}>
        <label className="input-label">Last Name</label>
        <input placeholder="Last Name" className="input-field" {...register("lastName", { required: "Last name is required" })} />
        {errors.lastName && <small className="error">{errors.lastName.message}</small>}
      </div>
      <div className={fieldStatusClass("email", errors, touchedFields)}>
        <label className="input-label">Business Email</label>
        <input
          placeholder="Business Email"
          className="input-field"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
          })}
        />
        {errors.email && <small className="error">{errors.email.message}</small>}
      </div>
      <div className={fieldStatusClass("contactNumber", errors, touchedFields)}>
        <label className="input-label">Contact Number</label>
        <input placeholder="Contact Number" className="input-field" {...register("contactNumber", { required: "Contact number is required" })} />
        {errors.contactNumber && <small className="error">{errors.contactNumber.message}</small>}
      </div>
      <div className={fieldStatusClass("companyName", errors, touchedFields)}>
        <label className="input-label">Company Name</label>
        <input placeholder="Company Name" className="input-field" {...register("companyName", { required: "Company name is required" })} />
        {errors.companyName && <small className="error">{errors.companyName.message}</small>}
      </div>
      <div className={fieldStatusClass("country", errors, touchedFields)}>
        <label className="input-label">Country</label>
        <select className="input-field" {...register("country", { required: "Country is required" })}>
          <option value="">-- Select Country --</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        {errors.country && <small className="error">{errors.country.message}</small>}
      </div>
      <div className={`${fieldStatusClass("selfDescription", errors, touchedFields)} full-edge`}>
        <label className="input-label">How would you describe yourself?</label>
        <select className="input-field" {...register("selfDescription", { required: "Please select an option" })}>
          <option value="">-- How would you describe yourself? --</option>
          <option value="Airline">Airline</option>
          <option value="Travel Seller">Travel Seller</option>
          <option value="Travel Integration Partner">Travel Integration Partner</option>
          <option value="Researcher">Others</option>
        </select>
        {errors.selfDescription && <small className="error">{errors.selfDescription.message}</small>}
      </div>
      <div className={`${fieldStatusClass("inquiryType", errors, touchedFields)} full-edge`}>
        <label className="input-label">Inquiry Type</label>
        <select className="input-field" {...register("inquiryType", { required: "Please select inquiry type" })}>
          <option value="">-- Inquiry Type --</option>
          <option value="Travel tech business & Sales inquiry">Travel tech business & Sales inquiry</option>
          <option value="Support inquiry for ASR or MFB/SSP Agent API or Agent">Support inquiry for ASR or MFB/SSP Agent API or Agent</option>
          <option value="Partnership Opportunity - Directly connect with supply partnerships">Partnership Opportunity - Directly connect with supply partnerships</option>
          <option value="Business opportunity for marketing - Directly connect with marketing">Business opportunity for marketing - Directly connect with marketing</option>
          <option value="Others">Others</option>
        </select>
        {errors.inquiryType && <small className="error">{errors.inquiryType.message}</small>}
      </div>
      <div className={"input-group full-edge"}>
        <label className="input-label">Enter your query (optional)</label>
        <textarea placeholder="Enter your query (optional)" className="input-field textarea" {...register("message")} rows={4} />
      </div>

      <button type="submit" className="button button--accent" data-icon="end">
        <span className="">Start your journey</span>
        <span className="icon">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
      <div className={"input-group full-edge"}>
        <span>{successMsg}</span>
      </div>
    </form>
  );
}

export default RegisterForm;
