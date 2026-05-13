<script setup>
async function downloadPdf() {
	const response = await fetch("/api/pdf");

	const blob = await response.blob();

	const url = window.URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = "document.pdf";

	document.body.appendChild(a);
	a.click();

	a.remove();
	window.URL.revokeObjectURL(url);
}
</script>

<template>
	<button @click="downloadPdf">
		Download PDF
	</button>
</template>