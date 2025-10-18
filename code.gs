function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Salvar no Google Sheets
    const sheet = SpreadsheetApp.openById('SEU_SHEET_ID_AQUI').getActiveSheet();
    sheet.appendRow([
      data.name,
      data.phone,
      data.email,
      data.help,
      data.description_accurate,
      data.timestamp
    ]);
    
    // Enviar email de notificação
    const subject = 'Novo contato do formulário: ' + data.name;
    const body = `
Novo contato recebido:

Nome: ${data.name}
Telefone: ${data.phone}
Email: ${data.email}
Mensagem: ${data.help}
Descrição precisa: ${data.description_accurate}
Data: ${data.timestamp}

--- 
Enviado via Formulário de Contato
    `;
    
    MailApp.sendEmail('piresfernando493@gmail.com', subject, body);
    
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimetype(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', message: error.toString()}))
      .setMimetype(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Form submission handler is running');
}
