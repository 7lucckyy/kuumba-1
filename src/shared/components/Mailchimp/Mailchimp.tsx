import React, {
	useReducer
} from "react";
import MailchimpSubscribe, { EmailFormFields, FormHooks } from "react-mailchimp-subscribe";
import { motion, AnimatePresence, useScroll } from "framer-motion"; 

import { InputField } from "./InputField";
import { Form, MailchimpFormProps } from "./types";
import { inputFields } from "./data";
import styles from "./mailchimp.module.scss"

function CustomForm({ status, message, onValidated }:MailchimpFormProps) {
    const messageSent = status === "success"
	const reducer = (
		state: Form,
		action: { payload: string; type: string }
	) => {
		switch (action.type) {
			case "email":
				return { ...state, email: action.payload };
				break;
			case "firstName":
				return { ...state, firstName: action.payload };
				break;
			case "lastName":
				return { ...state, lastName: action.payload };
				break;
			default:
				return { email: "", firstName: "", lastName: "" };
				break;
		}
	};

	const [formState, dispatchEvent] = useReducer(reducer, {
		email: "",
		firstName: "",
		lastName: "",
	});
	const isFormValid = formState.email && formState.firstName && formState.lastName && formState.email.indexOf("@") > -1
	
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatchEvent({ type: e.target.name, payload: e.currentTarget.value })
    }
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		isFormValid &&
			onValidated({
				EMAIL: formState.email,
				MERGE1: formState.firstName,
				MERGE2: formState.lastName,
			});
	};

	return (
		<motion.form layout className="mt-7 px-5 py-[34px] bg-white" onSubmit={(e) => handleSubmit(e)}>
			<h3 className="text-[#333333] text-sm mb-[14px]">
				{messageSent ? <div
					className="text-center"
					dangerouslySetInnerHTML={{ __html: message as string }}
				/>: "Join our email list for future updates."}
			</h3>

			{!messageSent ? (
				<div className="mc__field-container">
					{inputFields.map(field => (
						<InputField
							key={field.name}
							label={field.label}
							onChangeHandler={handleInputChange}
							type={field.type}
							name={field.name}
							value={formState[`${field.name}` as keyof Form]}
							placeholder={field.placeholder}
						/>
					))}
				</div>
			) : null}

			{status === "error" && (<p className="text-red-500 font-medium text-xs mt-3">Sorry, we could not confirm your subscription. Try Again.</p>)}
			{!messageSent &&
				<button type="submit" className={`${isFormValid ? "bg-[#4169E1]": "bg-[#4169E1]/60"} py-3 px-8 text-gray-200 font-medium mt-[30px] text-sm disabled:bg-slate-200`} disabled={status === "sending"}>
					{status === "sending" ? (
					<span className={styles.alert__sending}>Sending...</span>
					):
					<span>Subscribe</span>}
				</button>
			}
		</motion.form>
	);
}


function MailchimpForm() {
	const url = `https://gmail.us10.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;
    const { scrollYProgress } = useScroll()
	
	return (
		<motion.div style={{ scaleX: scrollYProgress}} className="bg-[#EEEEE] mx-auto w-full max-w-[560px]">
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }:FormHooks<EmailFormFields>) => (
					<CustomForm
						status={status}
						message={message}
						onValidated={(formData: EmailFormFields) => subscribe(formData)}
					/>
				)}
			/>
		</motion.div>
	);
}

export default MailchimpForm;