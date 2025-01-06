import { JSX } from "react";

interface TextProps {
    input: string;
}

const Text = ({input}: TextProps): JSX.Element[] => {
    const lines = input.split("\n");

    return lines.map((line, index) => {
        if (line.startsWith("# ")) {
            return <h1 key={index}>{line.slice(2)}</h1>;
        } else if (line.startsWith("## ")) {
            return <h2 key={index}>{line.slice(3)}</h2>;
        } else if (line.startsWith("### ")) {
            return <h3 key={index}>{line.slice(4)}</h3>;
        } else if (line.startsWith("- ")) {
            return <li key={index}>{line.slice(2)}</li>;
        } else if (line.includes("**")) {
            const parts = line.split(/(\*\*.*?\*\*)/);
            return (
                <p key={index}>
                    {parts.map((part, i) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                            <strong key={i}>{part.slice(2, -2)}</strong>
                        ) : part
                    )}
                </p>
            );
        } else if (line.trim() === "") {
            return <br key={index} />;
        } else {
            return <p key={index}>{line}</p>;
        }
    });
};

export default Text;