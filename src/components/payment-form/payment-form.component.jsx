import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {Button, BUTTON_TYPE_CLASSES} from "../button/button.component"

export const PaymentForm = () => {

	const stripe = useStripe()
	const elements = useElements()

	const paymentHandler = async (e) => {
		e.preventDefault()

		if (!stripe || !elements) {
			return
		}
	}


	return (
		<div>
			<CardElement />
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
		</div>
	)

}
