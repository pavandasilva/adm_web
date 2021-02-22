import { reverse } from 'dns';
import React, { useEffect, useMemo, useState } from 'react';

import {
  Container, Bar, Charts, Content, CartesianPlane, Sections, Info, SubTitles, SquareSubtitle,
} from './styles';

type Value = {
  success: number,
  danger: number
  subtitle: string
 }

interface MainChartProps {
  values: Value[]
  symbol: string
  subtitles: {
    danger: string
    success: string
  }
}

const MainChart = ({ values, symbol, subtitles }: MainChartProps) => {
  const [indexYBase, setIndexYBase] = useState(0);
  const [difIndex, setDifIndex] = useState(0);

  useEffect(() => {
    let allValues = [] as number[];

    values.forEach(({ success, danger }) => {
      allValues.push(success);
      allValues.push(danger);
    });

    allValues.sort((a, b) => a - b);
    let [max] = allValues.reverse();

    const calcIndexBase = () => {
      while ((max % 4) > 0) {
        max += 1;
      }
      return max;
    };

    const indexBase = calcIndexBase();
    const dif = indexBase / 4;

    setDifIndex(dif);
    setIndexYBase(indexBase);
  }, [values]);

  return (
    <Container>
      <header>Fluxo de caixa</header>
      <SubTitles>
        <div>
          <SquareSubtitle color="success" />
          <span>{subtitles.success}</span>
        </div>
        <div>
          <SquareSubtitle color="danger" />
          <span>{subtitles.danger}</span>
        </div>
      </SubTitles>
      <Content>
        <CartesianPlane>
          <div>
            <h2>
              {symbol}
            </h2>
          </div>
          <div><span>{indexYBase}</span></div>
          <div><span>{indexYBase - difIndex}</span></div>
          <div><span>{indexYBase - (2 * difIndex)}</span></div>
          <div><span>{indexYBase - (3 * difIndex)}</span></div>
          <div><span>0</span></div>
        </CartesianPlane>

        <Sections>
          { values?.map(({ success, danger, subtitle }) => (
            <section>
              <Charts>
                <>
                  <Bar color="success" percent={(success * 100) / indexYBase}>
                    <Info>
                      R$
                      {success}
                    </Info>
                  </Bar>
                  <Bar color="danger" percent={(danger * 100) / indexYBase}>
                    <Info>
                      R$
                      {danger}
                    </Info>
                  </Bar>
                </>

              </Charts>

              <span>{subtitle}</span>
            </section>
          ))}
        </Sections>

      </Content>

    </Container>
  );
};

export default MainChart;
