// export function sendMail(emailTo, emailFrom, name, subject, text) {
// 	const url = "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send";
// 	const message = `NOME: ${name} EMAIL: ${emailFrom} TESTO: ${text}`;

// 	const data = `{"personalizations":[{"to":[{"email":"${String(
// 		emailTo,
// 	)}"}],"subject":"${String(
// 		subject,
// 	)}"}],"from":{"email":"portfolio@example.com"},"content":[{"type":"text/plain","value":"${String(
// 		message,
// 	)}"}]}`;

// 	const options = {
// 		method: "POST",
// 		headers: {
// 			"content-type": "application/json",
// 			"X-RapidAPI-Key": "",
// 			"X-RapidAPI-Host": "",
// 		},
// 		body: data,
// 	};

// 	fetch(url, options)
// 		.then((res) => res.json())
// 		.then((json) => console.log(json))
// 		.catch((err) => console.error("error:" + err));
// }
