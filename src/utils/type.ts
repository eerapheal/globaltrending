export interface Option {
  label: string;
  value: string;
}

export interface FormControlItem {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  component: string;
  options: Option[];
}
