"use client";

import { initialBlogFormData } from "@/utils/constants";
import { BlogFormData } from "@/utils/type";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
};

const initialState = {
  loading: false,
  setLoading: () => { },
  formData: initialBlogFormData,
  setFormData: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialBlogFormData);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        formData,
        setFormData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}