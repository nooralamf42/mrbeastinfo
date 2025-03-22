import React, { PropsWithChildren } from "react";

export default function FormCheckbox({children}:PropsWithChildren) {
  return (
    <label className="flex items-center">
      <input type="checkbox" name={JSON.stringify(children)} className="mr-3 size-4" />
      <span>{children}</span>
    </label>
  );
}
