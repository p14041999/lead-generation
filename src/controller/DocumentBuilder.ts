import * as html_to_pdf from 'html-pdf-node';

let options = { format: 'A4' };
let file = [{ url: "https://www.codepartner.in", name: 'ESTIMATE' }];

html_to_pdf.generatePdfs(file, options).then(output => {
    console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
});