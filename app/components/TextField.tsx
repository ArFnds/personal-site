import { cn } from "~/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const TextField = ({
	id,
	label,
	name,
	placeholder,
	description,
	error,
	...props
}: React.ComponentProps<"input"> & {
	label: string;
	name: string;
	error?: string;
	placeholder?: string;
	description?: string;
}) => {
	return (
		<>
			<Label className={cn(error && "text-destructive")} htmlFor={id}>
				{label}
			</Label>
			<Input placeholder={placeholder} name={name} id={id} {...props} />
			{description && (
				<p className={cn("text-[0.8rem] text-muted-foreground")}>
					{description}
				</p>
			)}
			{error && (
				<p className={cn("text-[0.8rem] font-medium text-destructive")}>
					{error}
				</p>
			)}
		</>
	);
};
