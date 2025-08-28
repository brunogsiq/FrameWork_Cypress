
describe('Test editar pedido', () => {
  it('automação ', () => {

    cy.request({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'user': 'admin',
        'pass': 'password'
      },
      url: Cypress.env('baseUrl') + 'api/integration/getOrder',
      body: {
        id: 5,
      }
    })
      .then((get_response) => {
        cy.writeFile('localStorage_get.txt', get_response.body)

        cy.request({
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'user': 'admin',
            'pass': 'password'
          },
          url: Cypress.env('baseUrl') + 'api/integration/updateOrder',
          body: {
            id: 5,
            status_label: "Faturado",
            status_code: "cod3",
            danfe_xml: ' 1 2 3',
            message_reject: '',
            products: [
              {
                id: '50',
                ean: "7898344187869",
                quantity: 1,
                product_status: "cod3",
              },
              {
                id: '50',               // duplicar id
                ean: "7898344187869",
                quantity: 2,            // quantidade menor
                product_status: "cod2", // parc faturado
              },
              {
                id: '52',
                ean: "7898594675611",
                quantity: 1,
                product_status: "cod3",
              },
            ]
          }
        })
          .then((put_response) => {
            cy.writeFile('localStorage_put.txt', put_response.body)

            cy.request({
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'user': 'admin',
                'pass': 'password'
              },
              url: Cypress.env('baseUrl') + 'api/integration/getOrder',
              body: {
                id: 5,
              }
            })
              .then((get_response) => {
                cy.writeFile('localStorage_get_after.txt', get_response.body)
              })
          })
      })
  })
})
