

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');
    const responseMessage = document.getElementById('response-message');
    const defaulterStatus = document.getElementById('defaulter-status');
    const submittedData = document.getElementById('submitted-data');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent default form submission

        // Collect form data
          const formData = {
            LIMIT_BAL: parseFloat(document.getElementById('LIMIT_BAL').value),
            SEX: parseInt(document.getElementById('SEX').value),
            EDUCATION: parseInt(document.getElementById('EDUCATION').value),
            MARRIAGE: parseInt(document.getElementById('MARRIAGE').value),
            AGE: parseInt(document.getElementById('AGE').value),
            PAY_0: parseInt(document.getElementById('PAY_0').value),
            PAY_2: parseInt(document.getElementById('PAY_2').value),
            PAY_3: parseInt(document.getElementById('PAY_3').value),
            PAY_4: parseInt(document.getElementById('PAY_4').value),
            PAY_5: parseInt(document.getElementById('PAY_5').value),
            PAY_6: parseInt(document.getElementById('PAY_6').value),
            BILL_AMT1: parseFloat(document.getElementById('BILL_AMT1').value),
            BILL_AMT2: parseFloat(document.getElementById('BILL_AMT2').value),
            BILL_AMT3: parseFloat(document.getElementById('BILL_AMT3').value),
            BILL_AMT4: parseFloat(document.getElementById('BILL_AMT4').value),
            BILL_AMT5: parseFloat(document.getElementById('BILL_AMT5').value),
            BILL_AMT6: parseFloat(document.getElementById('BILL_AMT6').value),
            PAY_AMT1: parseFloat(document.getElementById('PAY_AMT1').value),
            PAY_AMT2: parseFloat(document.getElementById('PAY_AMT2').value),
            PAY_AMT3: parseFloat(document.getElementById('PAY_AMT3').value),
            PAY_AMT4: parseFloat(document.getElementById('PAY_AMT4').value),
            PAY_AMT5: parseFloat(document.getElementById('PAY_AMT5').value),
            PAY_AMT6: parseFloat(document.getElementById('PAY_AMT6').value)
        };

        // Create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/predict_by_form', true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // Handle the response
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                responseMessage.textContent = response.message;

                // Display whether the user is a defaulter or not
                if (!response.isDefaulter) {
                    defaulterStatus.textContent = "The user's financial profile indicates no risk of default.";
                    defaulterStatus.style.color = "#1690f4";
                    
                } else {
                    defaulterStatus.textContent = "The user's profile suggests a potential risk of default. Further review and verification are required.";
                    defaulterStatus.style.color = "#ea3612";

                }
                submittedData.style.display = 'block';
            } else {
                responseMessage.textContent = `Error: ${xhr.statusText}`;
            }
        };
        console.log(JSON.stringify(formData));
        // Send the request with the collected form data
        xhr.send(JSON.stringify(formData));
    });
});
