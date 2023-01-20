import { InputProps } from "./types"

export const inputFields: Array<InputProps> = [
    {
        label: "First Name",
        type: "text",
        name: "firstName",
        placeholder: "Jane"
    },
    {
        label: "Last Name",
        type: "text",
        name: "lastName",
        placeholder: "Doe"
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "your@email.com"
    }
]