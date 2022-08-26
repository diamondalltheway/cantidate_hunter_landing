function getMiniData() {
  let email = document.getElementById('emailMini').value;
  let obj = {email: email};
  sendLead(obj);
}

function getFormData() {
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let companyName = document.getElementById('company').value;
  let email = document.getElementById('first-name').value;
  let phoneNumber = document.getElementById('phone-number').value;
  let comments = document.getElementById('message').value;

  let obj = {
    firstName: firstName,
    lastName: lastName,
    companyName: companyName,
    email: email,
    phoneNumber: phoneNumber,
    comments: comments,
  }

  console.log(obj);
  sendLead(obj);
}

function sendLead(obj) {
  const key = 'Cbk67kbnNE09KpMn8ieNcUKL'
  const url = `https://hooks.slack.com/services/T03QXDAKTQ9/B03UUT25M41/${key}`
  const xhr = new XMLHttpRequest()
  let payload = {}
      payload.text = JSON.stringify(obj);

  xhr.open("POST", url);
  xhr.send(JSON.stringify(payload))
}