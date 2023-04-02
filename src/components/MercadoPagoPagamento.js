import Script from 'next/script'
import React from 'react'

export default function MercadoPagoPagamento() {

  
  return (
  <>

<div>
    <h2>Pagamento do MercadoPago</h2>
    <div id="paymentBrick_container"></div>
    </div>

    
    <Script src="https://sdk.mercadopago.com/js/v2" onLoad={() => {
    const mp = new MercadoPago('TEST-848bd8c1-5036-42a8-9318-b5371b5d539f');

    const bricksBuilder = mp.bricks();

    const renderCardPaymentBrick = async (bricksBuilder) => {

      const settings = {
        initialization: {
          amount: 1450, // valor total a ser pago
          
        },
        locale: 'pt',
        customization : {
          maxInstallments: 7,
          paymentMethods: {
              creditCard: 'all',
              bankTransfer: ['pix']
          },
          visual: {
            style: {
              theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
            }
          }
        },
        callbacks: {
          onReady: () => {
            console.log('brick ready')
          },
          onSubmit: ({ selectedPaymentMethod, formData }) => {
            // callback chamado o usuário clicar no botão de submissão dos dados
    
            // ejemplo de envío de los datos recolectados por el Brick a su servidor
            return new Promise((resolve, reject) => {
                fetch("http://localhost:8080/api/events/subscription/payment", { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify(formData)
                })
                .then((response) => {
                    // receber o resultado do pagamento
                    resolve();
                })
                .catch((error) => {
                    // lidar com a resposta de erro ao tentar criar o pagamento
                    reject();
                })
              });
          },
          onError: (error) => { 
            // callback chamado para todos os casos de erro do Brick
            console.error(error);
          },
        },
      };
      const paymentBrickController = await bricksBuilder.create('payment', 'paymentBrick_container', settings);
    };
    renderCardPaymentBrick(bricksBuilder);
    console.log('Script has loaded')
  }}>


  </Script>
    
   
    </>
  )
}
