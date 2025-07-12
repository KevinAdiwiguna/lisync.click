"use client";

import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import Button from "./button";

interface CopyButtonProps {
	text: string;
}

export const CopyButton = ({ text }: CopyButtonProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button
            color="outline"
			type="button"
            className="p-2"
			onClick={handleCopy}
			title={copied ? "Disalin!" : "Salin"}
		>
			<FiCopy className="w-5 h-5" />
		</Button>
	);
};
