const ipc = require('electron').ipcRenderer;

const printPDFBtn = document.getElementById('invno');
const invoiceField = document.getElementById('invoicefield');

printPDFBtn.addEventListener('click', function (event) {

    setTimeout(send, 2000);
})

function send(){
    ipc.send('get-name', invoicefield.value);
    ipc.send('print-to-pdf');
}