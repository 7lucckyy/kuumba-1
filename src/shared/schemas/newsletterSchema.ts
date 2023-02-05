import { object, string } from "yup";

const newsletterSchema = object({
  email: string().email("Enter a valid email").required("Email is required"),
}).required();

export default newsletterSchema;
