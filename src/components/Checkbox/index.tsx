import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import Check from '../../assets/icons/svgs/Check';
import { Container } from './styles';

export interface CheckBoxOnChange {
  name: string
  checked: boolean
}

export interface CheckBoxProps {
  checked?: boolean,
  onChange: (checkBoxOnChange: CheckBoxOnChange) => void
  name: string
}

export type Color = 'default' | 'checked'

const Checkbox = ({ checked: chekedProp = false, name, onChange }: CheckBoxProps) => {
  const [checked, setChecked] = useState(chekedProp);

  useEffect(() => {
    onChange({
      name,
      checked,
    });
  }, [checked, name, onChange]);

  const checkBoxHandleOnClick = useCallback(() => {
    setChecked((state) => !state);
  }, []);

  const color = useMemo(() => {
    let c: Color;

    if (checked) {
      c = 'checked';
    } else {
      c = 'default';
    }

    return c;
  }, [checked]);

  return (
    <Container onClick={checkBoxHandleOnClick} color={color}>
      {/* { checked && 'ok' } */}

      {checked && <Check />}
    </Container>
  );
};

export default Checkbox;
