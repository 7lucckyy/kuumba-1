import { InputHTMLAttributes } from "react";
import { EmailFormFields } from "react-mailchimp-subscribe";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	type: "email" | "text" | "submit";
	placeholder: string;
};

export type Form = {
	firstName: string;
	lastName: string;
	email: string;
};

export type MailchimpFormProps = {
	message: string | Error | null
	status: "success" | "error" | "sending" | null
	onValidated: (data: EmailFormFields & { MERGE1: string; MERGE2: string }) => void
}