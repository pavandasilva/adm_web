import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import Check from '../../assets/icons/svgs/Check';
import { Wrapper, Container } from './styles';

export interface CheckBoxOnChange {
  name: string
  checked: boolean
}

export interface CheckBoxProps {
  checked: boolean,
  onChange?: (checkBoxOnChange: CheckBoxOnChange) => void
  name: string
  children?: React.ReactNode
}

export type Color = 'default' | 'checked'

const Checkbox = ({
  checked: chekedProp, name, onChange, children,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(chekedProp);

  useEffect(() => {
    onChange && onChange({
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
    <Wrapper onClick={checkBoxHandleOnClick}>
      <Container color={color}>
        {/* { checked && 'ok' } */}
        {checked && <Check />}
      </Container>
      <aside>
        { children }
      </aside>
    </Wrapper>

  );
};

export default Checkbox;
