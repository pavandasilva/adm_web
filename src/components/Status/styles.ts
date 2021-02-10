import styled from 'styled-components';
import { ColorStatus } from '.';

interface StatusStylesProps {
	color: ColorStatus
}

export const Container = styled.div<StatusStylesProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 84px;
	height: 22px;
	border-radius: 4px;
	background-color: ${props => props.theme.colors[props.color]};
	color: #FFF;
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	letter-spacing: 1px;
	user-select: none;
`
