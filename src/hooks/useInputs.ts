import { useState, useCallback } from 'react';

export function useInput() {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<any>) => setValue(e.target.value),
    [setValue]
  );

  return {
    value,
    onChange
  };
}

export function useChecked() {
  const [checked, setChecked] = useState(false);

  const onChange = useCallback(
    (e: React.ChangeEvent<any>) => setChecked(e.target.checked),
    [setChecked]
  );

  return {
    checked,
    onChange
  };
}

export function useRadio(initValue?: any) {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<any>) => setValue(e.target.value),
    [setValue]
  );

  const checked = (compareValue: any) =>
    compareValue.toString() === value.toString();

  return {
    value,
    checked,
    onChange
  };
}
