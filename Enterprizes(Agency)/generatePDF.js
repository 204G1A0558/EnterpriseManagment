const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs').promises;

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  page.drawText('Your Product Bill', {
    x: 50,
    y: height - 50,
    size: 30,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  await fs.writeFile('product_bill.pdf', pdfBytes);
}

generatePDF().then(() => console.log('PDF generated!'));

