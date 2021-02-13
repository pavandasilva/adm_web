import React, { InputHTMLAttributes } from 'react';
import SearchIcon from '../../assets/icons/svgs/Search';
// import SearchIcon from '../../assets/icons/search.svg';
import { Container, Icon } from './styles';

export type SearchColor = 'mainBackgroundLight' | 'mainBackground'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement>{
  color: SearchColor
}

const Search = ({ color, ...rest }: ButtonProps) => (
  <Container color={color}>
    <Icon>
      <SearchIcon />
    </Icon>
    <input {...rest} />
  </Container>
);

export default Search;
