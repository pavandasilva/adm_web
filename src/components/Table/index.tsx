/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';

import { produce } from 'immer';

import {
  Container, HeaderCell, BodyCell, RowBody, BreakLine, CheckBoxWrapper,
} from './styles';
import Checkbox from '../Checkbox';

export type HeaderType = {
  title: string
  reference: string
  contrast?: boolean
  width?: number,
}

export type DataType = any[]

interface TableProps {
  data: any[]
  header: HeaderType[]
  editable?: boolean
  title: string
}

type CheckBoxState = boolean[]

const Table = ({
  data, header, editable = false, title: titleTable,
}: TableProps) => {
  const [checkBoxesState, setCheckBoxesState] = useState([] as CheckBoxState);

  useEffect(() => {
    setCheckBoxesState(() => data.map(() => false));
  }, [data]);

  const handleCheckBoxOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.name);

    setCheckBoxesState((state) => state.map((item, idx) => {
      if (idx === index) {
        return !item;
      }
      return item;
    }));
  }, []);

  return (
    <Container>
      <span>{ titleTable }</span>

      <header>
        { editable && <CheckBoxWrapper /> }
        { header.map(({ title }) => <HeaderCell collumns={header.length} editable>{title}</HeaderCell>) }
      </header>

      <BreakLine />

      {data.map((item, index) => (
        <RowBody>
          {/*   { editable && <CheckBoxWrapper><input type="checkbox" key={index.toString()} name={index.toString()} onChange={handleCheckBoxOnChange} checked={checkBoxesState[index]} /></CheckBoxWrapper> } */}
          { editable && (
            <CheckBoxWrapper>
              <Checkbox checked={checkBoxesState[index]} />
            </CheckBoxWrapper>
          )}

          {
            header.map(({ reference, contrast = false }) => (
              <BodyCell collumns={header.length} contrast={contrast} editable>
                {item[reference]}
              </BodyCell>
            ))
          }
        </RowBody>

      ))}

    </Container>
  );
};

export default Table;
