import React, {
  ChangeEvent,
  InputHTMLAttributes, useCallback, useEffect, useState,
} from 'react';
import Info from '../../assets/icons/svgs/Info';

import {
  Wrapper, InfoIcon, Title, Container, ErrorMessage, InfoContent,
} from './styles';

export type ModeInput = 'showing' | 'new' | 'default' | 'editing'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  mode: ModeInput
  error?: string
  required?: boolean
}

const Input = ({
  mode, placeholder, value: comingValue, required = false, error = '', ...rest
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
    <Wrapper mode={mode} error={!!error} focused={focused}>
      <Container mode={mode} error={!!error} focused={focused}>
        <div>
          {(!!value || mode === 'default' || mode === 'editing') && <Title mode={mode} focused={focused} error={!!error}>{placeholder && placeholder }</Title>}
          <input {...rest} placeholder={mode !== 'default' ? placeholder : ''} onChange={onChange} value={value} onFocus={onFocus} onBlur={onBlur} />
        </div>
        {error && <InfoIcon><Info /></InfoIcon>}
      </Container>

      <InfoContent>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!required && <span>Opcional</span>}
      </InfoContent>
    </Wrapper>
  );
};

export default Input;
