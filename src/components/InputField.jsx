import React from "react";

const InputField = ({
    type = "text",
    label,
    value,
    onChange,
    required = false,
    options = [],
    rows = 4,
    name,
    variant = "default", // 'default' or 'minimal'
    placeholder = "",
}) => {
    if (variant === "minimal") {
        // Style for LetsConnect (Dark background, label above)
        return (
            <div className="w-full">
                <label className="block text-white text-sm mb-2">{label}</label>
                {type === "textarea" ? (
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        rows={rows}
                        required={required}
                        className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 font-semibold text-sm resize-none"
                    />
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        className="w-full bg-transparent border-b border-white/30 pb-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/60 font-semibold text-sm"
                    />
                )}
            </div>
        );
    }

    // Default Style for ContactPage (Light background, floating label)
    const baseClasses =
        "w-full bg-transparent border-b border-gray-400 outline-none py-3 peer transition-colors focus:border-black";
    const labelClasses =
        "absolute left-0 text-gray-600 transition-all duration-300 peer-focus:text-black peer-focus:text-sm peer-focus:-top-2 peer-valid:text-sm peer-valid:-top-2 top-4 pointer-events-none";

    return (
        <div className="relative group w-full">
            {type === "select" ? (
                <select
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    className={`${baseClasses} text-gray-800`}
                >
                    <option value="" disabled></option>
                    {options.map((opt, index) => (
                        <option key={index} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            ) : type === "textarea" ? (
                <textarea
                    name={name}
                    required={required}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                    className={`${baseClasses} resize-none`}
                    placeholder=" "
                ></textarea>
            ) : (
                <input
                    name={name}
                    type={type}
                    required={required}
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    placeholder=" "
                />
            )}
            <label className={labelClasses}>{label}</label>
        </div>
    );
};

export default InputField;
