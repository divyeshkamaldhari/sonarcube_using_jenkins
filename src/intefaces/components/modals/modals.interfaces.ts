export interface customerDetailsProps {
  key: React.Key;
  fname: string;
  lname: string;
  age: number;
  address: string;
  tags?: string[];
}

export interface UserModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  dispatchAction: (
    action: string,
    record: customerDetailsProps,
  ) => Promise<void>;
  isFormReset: boolean;
  isUser: customerDetailsProps;
  modalAction: string;
}
