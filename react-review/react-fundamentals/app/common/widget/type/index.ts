import { IUser } from "@/app/page";
import React from "react";

type IDataType = string | boolean | number | object | null | undefined;

export type ObjectRecord = Record<string, IDataType>;
export type ElementObject = Record<string, React.ReactNode>;
export type ObjectUser = Record<string, IUser>;
// Form
export type ChangeHandler = React.ChangeEvent<HTMLInputElement>;
