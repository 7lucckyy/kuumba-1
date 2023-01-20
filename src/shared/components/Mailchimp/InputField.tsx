import { InputProps } from "./types";

export function InputField({
	label,
	type,
	value,
	name,
	placeholder,
	onChangeHandler,
}: InputProps & {onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;}) {
	return (
		<div
			className="mt-[26px]">
			<label htmlFor={name} className="block text-base text-left text-[#5d5d5d] mb-[3px]">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChangeHandler}
                className="w-full h-10 text-gray-500 border-2 border-[#D0D0D0] px-4 py-2"
				required
			/>
		</div>
	);
}