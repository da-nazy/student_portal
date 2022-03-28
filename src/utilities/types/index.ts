import { ReactNode } from "react";

export type ThemeModeType={
    value?:boolean;
}
export type MuiProviderType={
    children:ReactNode
}
export enum StorageKeys{
    themeMode='@store:theme_mode',
    userToken="@store:user_token",
    userDetails="@store:user_details"
}