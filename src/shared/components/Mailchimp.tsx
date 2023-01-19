import { spawn } from "child_process";
import React, {
	useState,
	useEffect,
	useReducer,
    InputHTMLAttributes,
    FC
} from "react";
import MailchimpSubscribe, { EmailFormFields, FormHooks } from "react-mailchimp-subscribe";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	type: "email" | "text" | "submit";
	value: string | number;
	placeholder: string;
	isRequired: boolean;
	onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

type Form = {
	firstName: string;
	lastName: string;
	email: string;
};

function InputField({
	label,
	type,
	value,
	name,
	placeholder,
	isRequired,
	onChangeHandler,
}: InputProps) {
	return (
		<div className="mt-[26px]">
			<label htmlFor={name} className="block text-base text-left text-[#5d5d5d] mb-[3px]">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				required={isRequired}
				onChange={onChangeHandler}
                className="w-full h-10 text-gray-500 border-2 border-[#D0D0D0] px-4 py-2"
			/>
		</div>
	);
}

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

	const [{ email, firstName, lastName }, dispatch] = useReducer(reducer, {
		email: "",
		firstName: "",
		lastName: "",
	});
	const isValidForm = email && firstName && lastName

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		email &&
			firstName &&
			lastName &&
			email.indexOf("@") > -1 &&
			onValidated({
				EMAIL: email,
				MERGE1: firstName,
				MERGE2: lastName,
			});
	};

	useEffect(() => {
		if (status === "success") clearFields();
	}, [status]);

	const clearFields = () => {
		dispatch({ type: "reset", payload: "" });
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: e.target.name, payload: e.currentTarget.value })
    }

	return (
		<form className="mt-7 px-5 py-[34px] bg-white" onSubmit={(e) => handleSubmit(e)}>
			<h3 className="text-[#333333] text-sm mb-[14px]">
				{!messageSent && "Join our email list for future updates."}
			</h3>
			{status === "error" && (
				<div
					className="mc__alert mc__alert--error"
					dangerouslySetInnerHTML={{ __html: message as string }}
				/>
			)}
			{messageSent && (
				<div
					className="text-center"
					dangerouslySetInnerHTML={{ __html: message as string }}
				/>
			)}

			{!messageSent ? (
				<div className="mc__field-container">
					<InputField
						label="First Name"
						onChangeHandler={handleInputChange}
						type="text"
						name="firstName"
						value={firstName}
						placeholder="Jane"
						isRequired
					/>

					<InputField
						label="Last Name"
						onChangeHandler={handleInputChange}
						type="text"
						name="lastName"
						value={lastName}
						placeholder="Doe"
						isRequired
					/>

					<InputField
						label="Email"
						onChangeHandler={handleInputChange}
						type="email"
						name="email"
						value={email}
						placeholder="your@email.com"
						isRequired
					/>
				</div>
			) : null}

			{/*Close button appears if form was successfully sent*/}
			{!messageSent &&
				<button type="submit" className={`${isValidForm ? "bg-[#4169E1]": "bg-[#4169E1]/60"} py-3 px-8 text-white mt-[30px] text-sm`} disabled={status === "sending"}>
					{status === "sending" ? (
					<span className="mc__alert mc__alert--sending">Sending...</span>
					):
					<span>Subscribe</span>}
				</button>
			}
		</form>
	);
}

type MailchimpFormProps = {
	message: string | Error | null
	status: "success" | "error" | "sending" | null
	onValidated: (data: EmailFormFields & { MERGE1: string; MERGE2: string }) => void
}

function MailchimpForm() {
	const url = `https://gmail.us10.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;
    
	return (
		<div className="bg-[#EEEEE] mx-auto w-full max-w-[560px]">
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
		</div>
	);
}

export default MailchimpForm;
