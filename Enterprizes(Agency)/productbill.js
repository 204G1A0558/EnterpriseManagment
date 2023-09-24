document.addEventListener("DOMContentLoaded", function () {
    // Load the cart data from sessionStorage
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Product Bill", 10, 10);
    let yPosition = 30;

    // Iterate through the cart items and add them to the PDF
    cart.forEach(item => {
        const total = item.price * item.quantity;
        doc.text(`Product Name: ${item.productName}`, 10, yPosition);
        doc.text(`Quantity: ${item.quantity}`, 10, yPosition + 10);
        doc.text(`Price: $${item.price}`, 10, yPosition + 20);
        doc.text(`Total: $${total}`, 10, yPosition + 30);
        yPosition += 50;
    });

    // Save the PDF with a unique name
    const fileName = `product_bill_${Date.now()}.pdf`;
    doc.save(fileName);

    // Display the PDF in the "pdfContainer" div
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.innerHTML = '<iframe width="100%" height="500px" src="' + fileName + '"></iframe>';
});

