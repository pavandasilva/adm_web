import styled from 'styled-components';
import { SampleStatusColor } from '.';

interface SampleStatusStylesProps {
  color: SampleStatusColor
}

export const Container = styled.div<SampleStatusStylesProps>`
	display: flex;
	align-items: center;
	height: 22px;

	> div {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: 2px solid ${props => props.theme.colors[props.color]}
	}

	> span {
		margin-left: 8px;
		font-size: 13px;
		letter-spacing: 1px;
	}
`;
