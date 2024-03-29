import React, { ReactNode } from "react";

export function Modal(props: {children: ReactNode}) {
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-black/40" aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="flex min-h-full items-center justify-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
