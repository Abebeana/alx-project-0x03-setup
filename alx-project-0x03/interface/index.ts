import Card from "@/components/common/Card"
import Button from "@/components/common/Button";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
}

interface LayoutProps {
  children: ReactNode;
}


interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}


export type { CardProps, ButtonProps, LayoutProps };