import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

// eslint-disable-next-line import/no-unresolved
import { MdCreate, MdDelete } from 'react-icons/md';

import { useTheme } from 'styled-components';
import {
  Container, HeaderCell, BodyCell, RowBody, BreakLine, CheckBoxWrapper, Header, Actions, ActionWrapper,
} from './styles';
import Checkbox, { CheckBoxOnChange } from '../Checkbox';

export type HeaderType = {
  title: string
  reference: string
  contrast?: boolean
  width?: number
}

export type DataType = any[]

interface TableProps {
  data: any[]
  header: HeaderType[]
  editable?: boolean
  title: string
}

export interface WidthConfig {
  withTotal: number
  numbItemsHasWidht: number
}

type CheckBoxState = boolean[]

const Table = ({
  data, header, editable = false, title: titleTable,
}: TableProps) => {
  const [checkBoxesState, setCheckBoxesState] = useState([] as CheckBoxState);

  useEffect(() => {
    setCheckBoxesState(() => data.map(() => false));
  }, [data]);

  const [widthConfig] = useState(() => {
    const withTotal = header.reduce((acumulador, item) => {
      if (item?.width && item.width > 0) {
        return acumulador + item.width;
      }

      return acumulador;
    }, 0);

    const numbItemsHasWidht = header.reduce((acumulador, item) => {
      if (item?.width && item.width > 0) {
        return acumulador + 1;
      }

      return acumulador;
    }, 0);

    return {
      withTotal,
      numbItemsHasWidht,
    };
  });

  const numberItensSelected = useMemo(() => checkBoxesState.reduce((acumulador, checked) => {
    if (checked) {
      return acumulador + 1;
    }

    return acumulador;
  }, 0), [checkBoxesState]);

  const handleCheckBoxOnChange = useCallback(({ name }: CheckBoxOnChange) => {
    const index = Number(name);

    setCheckBoxesState((state) => state.map((item, idx) => {
      if (idx === index) {
        return !item;
      }
      return item;
    }));
  }, []);

  const headerSuffix = numberItensSelected > 1 ? 'itens selecionados' : 'item selecionado';
  const theme = useTheme();

  return (
    <Container>
      <Header hasSelectedItem={numberItensSelected > 0}>
        <span>{ numberItensSelected ? `${numberItensSelected} ${headerSuffix}` : titleTable }</span>

        <Actions>
          { numberItensSelected === 1 && <ActionWrapper title="Editar item selecionado"><MdCreate size={24} color={theme.colors.font.primary} /></ActionWrapper>}
          { numberItensSelected > 0 && <ActionWrapper title={`Excluir ${headerSuffix}`}><MdDelete size={24} color={theme.colors.danger} /></ActionWrapper>}

        </Actions>
      </Header>

      <header>
        { editable && <CheckBoxWrapper /> }
        { header.map(({ title, width }) => <HeaderCell width={width as number} className={width ? 'widthFixed' : ''} collumns={header.length} editable widthConfig={widthConfig}>{title}</HeaderCell>) }
      </header>

      <BreakLine />

      {data.map((item, index) => (
        <RowBody checked={checkBoxesState[index]}>
          {/*   { editable && <CheckBoxWrapper><input type="checkbox" key={index.toString()} name={index.toString()} onChange={handleCheckBoxOnChange} checked={checkBoxesState[index]} /></CheckBoxWrapper> } */}
          { editable && (
            <CheckBoxWrapper>
              <Checkbox name={index.toString()} checked={checkBoxesState[index]} onChange={handleCheckBoxOnChange} />
            </CheckBoxWrapper>
          )}

          {
            header.map(({ reference, contrast = false, width }) => (
              <BodyCell width={width as number} className={width ? 'widthFixed' : ''} collumns={header.length} contrast={contrast} editable widthConfig={widthConfig}>
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
