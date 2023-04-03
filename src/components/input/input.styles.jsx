import styled, {css} from "styled-components";

const mainColor = 'black'
const subColor = 'grey'

const shrinkLabelStyles = css`
	top: -14px;
	color: ${mainColor};
	font-size: 12px;
`

export const FormInputLabel = styled.label`
	position: absolute;
	top: 14px;
	cursor: text;
	transition: 300ms ease all;
	color: $sub-color;

	${({shrink}) => shrink && shrinkLabelStyles};
`

export const FormInput = styled.input`
	border: none;
	border-bottom: 1px solid ${subColor};
	padding: 10px 10px 10px 5px;
	font-size: 18px;

	&:focus{
		outline: none;
	}

	&:focus ~label{
		${shrinkLabelStyles}
	}

`

export const FormInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	gap: .5rem;
`


