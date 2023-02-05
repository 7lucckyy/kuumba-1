import { EmailFormFields } from "react-mailchimp-subscribe";

export type MailchimpFormProps = {
	message: string | Error | null
	status: "success" | "error" | "sending" | null
	onValidated: (data: EmailFormFields) => void
}