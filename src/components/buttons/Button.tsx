import Link from "next/link";
import React from "react";

const Button = ({
    mainClass,
    iconClass,
    LeftIcon,
    RightIcon,
	children
}: {
    mainClass?: string;
    iconClass?: string;
    LeftIcon?: React.ElementType;
    RightIcon?: React.ElementType;
	children: React.ReactNode
}) => {
    return (
        <Link
            className={`fancy ${mainClass} !flex w-fit !items-center gap-2 py-2.5`}
            href="#"
        >
            <span className="top-key"></span>
            {LeftIcon && (
                <span className={`icon-class text-white ${iconClass}`}>
                    {<LeftIcon />}
                </span>
            )}
            <span className="text font-koulen font-normal">{children}</span>
            {RightIcon && (
                <span className={`icon-class text-white ${iconClass}`}>
                    {<RightIcon />}
                </span>
            )}
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </Link>
    );
};

export default Button;
