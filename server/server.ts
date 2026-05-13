import { generatePdf } from "./pdf.ts";

Deno.serve(async (req) => {
	const url = new URL(req.url);

	if (url.pathname === "/api/pdf") {
		const pdf = await generatePdf();

		return new Response(pdf, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Disposition": 'attachment; filename="test.pdf"',
			},
		});
	}

	return new Response("Not found", { status: 404 });
});