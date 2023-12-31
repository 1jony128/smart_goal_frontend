import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

export interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue: (value: string) => void; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: Dispatch<SetStateAction<any>>; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setError: Dispatch<SetStateAction<any>>; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHover: Dispatch<SetStateAction<any>>; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLabel: Dispatch<SetStateAction<any>>;
  error: null | string;
  hover: boolean;
  onBlur: () => void;
  onFocus: () => void;
  label: string;
  name: string | undefined;
  disabled: boolean;
  onDisabled: () => void;
  onDirty: (value: boolean) => void;
  dirty: boolean;
}

export const useInput = (initialValue: string, name?: string): IInput => {
  const [value, setValue] = useState(initialValue);
  const [label, setLabel] = useState("");
  const [error, setError] = useState(null);
  const [hover, setHover] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [dirty, setDirty] = useState(false);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setHover(true);
  }, []);
  const onDirty = useCallback((value: boolean) => {
    setDirty(value);
  }, []);

  const onChangeValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  const onBlur = useCallback(() => {
    setHover(false);
  }, []);

  const onFocus = useCallback(() => {
    setHover(true);
  }, []);

  const onDisabled = useCallback(() => {
    setDisabled(!disabled);
  }, [disabled]);

  return {
    value,
    onChange,
    setValue,
    setError,
    setLabel,
    error,
    hover,
    setHover,
    onBlur,
    onFocus,
    label,
    name,
    disabled,
    onDisabled,
    onChangeValue,
    dirty,
    onDirty,
  };
};

export default useInput;
