import { object, string } from "yup";

const contactUsSchema = object({
  full_name: string()
    .required("This is a required field")
    .min(2, "Full name must contain at least 2 characters")
    .max(45, "Full name must contain at most 45 characters"),
  message: string()
    .required("This is a required field")
    .min(15, "Message must contain at least 15 characters")
    .max(150, "Message must contain at most 150 characters"),
  message_sender: string().required("Messge sender is required"),
}).required();

export default contactUsSchema;
