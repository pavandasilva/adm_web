import React, { useCallback, useMemo, useState } from 'react';
import Check from '../../assets/icons/svgs/Check';
import { Container } from './styles';

export interface CheckBoxProps {
  checked?: boolean
}

export type Color = 'default' | 'checked'

const Checkbox = ({ checked: chekedProp = false }: CheckBoxProps) => {
  const [checked, setChecked] = useState(chekedProp);

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
