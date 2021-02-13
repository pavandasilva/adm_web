import React, {
  ChangeEvent,
  InputHTMLAttributes, useCallback, useEffect, useState,
} from 'react';

import { Container, Title } from './styles';

export type ModeInput = 'showing' | 'new' | 'default' | 'editing'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  mode: ModeInput
  error?: string
}

const Input = ({
  mode, placeholder, value: comingValue, error = '', ...rest
}: InputProps) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setValue(comingValue as string);
  }, [comingValue]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const onFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <Container mode={mode} error={!!error} focused={focused}>
      {(!!value || mode === 'default' || mode === 'editing') && <Title mode={mode} focused={focused} error={!!error}>{placeholder && placeholder }</Title>}
      <input {...rest} placeholder={mode !== 'default' ? placeholder : ''} onChange={onChange} value={value} onFocus={onFocus} onBlur={onBlur} />
    </Container>
  );
};

export default Input;
