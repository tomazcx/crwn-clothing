import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";

export const PopoverContentContainer = styled(Popover.Content)`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: white;
	padding: 1rem 2rem;
	border: 1px solid black;
	margin-right: 1rem;
	

`

export const PopoverCartProductsContainer = styled.div`
	display:flex;
	flex-direction:column;
	gap:1rem;
	overflow:scroll;
	max-height:12rem;
`

export const PopoverTriggerContainer = styled(Popover.Trigger)`
	background-color: transparent;
	border: none;
`

export const PopoverTitle = styled.span`
	font-size: 1.2rem;
	font-weight: 600;

`



