import { binotype } from "@binotype/site"
import showdown from "showdown"

export const contact: binotype.Site.Page = {
	title: "Contact",
	menu: false,
	content: new showdown.Converter()
		.makeHtml(`Don't hesitate to contact me with ideas, suggestions and opinions. I look forward to hear from you.

<form action="https://getsimpleform.com/messages?form_api_token=5f6ce7baef1b2e89d2be999fdc119828" method="post">
<input type='hidden' name='redirect_to' value='https://simonmika.com/message-received' />
<label for="name">Name</label>
<input type="text" name="name" />
<label for="email">Email</label>
<input type="email" name="email" />
<label for="message">Message</label>
<textarea name="message"></textarea>
<button type="submit">Send</button>
</form>
`),
}
