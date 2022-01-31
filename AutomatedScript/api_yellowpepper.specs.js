describe('Swagger Petstore - OpenAPI 3.0', () => {
    
     // ---------------- PETS --------------------

    it ('GET - READ - GENERAL REPORT', () => {
        cy.log(' - * - Starting Swagger PetStore - LOG  - * - ')
        cy.request('http://localhost:8080/').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
            expect(response).to.have.property('status')
        })
        cy.log(' - * - End of Swagger PetStore - LOG  - * - ')
    })

    it ('GET - Pets', () => {
        cy.log(' - * -- GET - PETS - START - LOG  -- * - ')
        cy.request('http://localhost:8080/api/v3/pet/findByStatus?status=available').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
            expect(response.body.length).to.eq(6)
            
            cy.log(' - * -- GET - PETS - END - LOG  -- * - ')

        })
    })

    it ('POST - Pets', () => {
        cy.log(' - * -- POST - PETS - START - LOG  -- * - ')
        const url = 'http://localhost:8080/api/v3/pet'
        const newItem = {
            "id": 10,
            "name": "doggie",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
        cy.request('POST', url, newItem )
          .its('body')
          .should('include',{name:'doggie'})
          .then((response) => {
            expect(response).to.have.property('status','available')
            expect(response.body).to.not.be.null
            expect(response).to.have.property('photoUrls')
            expect(response).to.have.property('status')
            expect(response).to.have.property('tags')
          })
        cy.log(' - * -- POST - PETS - END - LOG  -- * - ')
    })

    it ('PUT - Pets', () => {
        cy.log(' - * -- PUT - PETS - START - LOG  -- * - ')
        cy.request({            
            method : 'PUT', 
            url : 'http://localhost:8080/api/v3/pet',
            body : {
                "id": 4,
                "name": "doggie",
                "category": {
                  "id": 1,
                  "name": "Dogs"
                },
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }
        }).then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('headers')
            expect(response.body).to.deep.equal({
                "id": 4,
                "name": "doggie",
                "category": {
                  "id": 1,
                  "name": "Dogs"
                },
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
            })
        })
        cy.log(' - * -- PUT - PETS - END - LOG  -- * - ')
    })


    it ('DELETE - Pets', () => {
      cy.log(' - * -- DELETE - PETS - START - LOG  -- * - ')
      cy.request('DELETE','http://localhost:8080/api/v3/pet/2').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
      })
      cy.log(' - * -- PUT - PETS - END - LOG  -- * - ')
    })

    // ---------------- STORE --------------------

    it ('GET - Store ', () => {
      cy.log(' - * -- GET - STORE - START - LOG  -- * - ')
      cy.request('http://localhost:8080/api/v3/store/inventory').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
            expect(response.body).to.have.property('approved',57)
            expect(response.body).to.have.property('delivered',50)
            expect(response.body).to.have.property('placed',100)

        })
        cy.log(' - * -- GET - STORE - END - LOG  -- * - ')
    })

    it ('POST - Store ', () => {
      cy.log(' - * -- POST - STORE - START - LOG  -- * - ')
      const url = 'http://localhost:8080/api/v3/store/order'
      const newItem = {
        "id": 10,
        "petId": 198772,
        "quantity": 7,
        "shipDate": "2022-01-31T14:58:03.623Z",
        "status": "approved",
        "complete": true
      }
      cy.request('POST',url, newItem).then((response) => {
          expect(response).to.have.property('status',200)
          expect(response).to.have.property('statusText', 'OK')
          expect(response.body).to.not.be.null
          expect(response).to.have.property('headers')
          expect(response).to.have.property('body')
          expect(response).to.have.property('duration')
          expect(response.body).to.have.property('status','approved')

      })
      cy.log(' - * -- POST - STORE - END - LOG  -- * - ')

    })

    it ('GET - Store - BY ID', () => {
      cy.log(' - * -- GET - STORE BY ID- START - LOG  -- * - ')
      cy.request('http://localhost:8080/api/v3/store/order/3').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
            expect(response.body).to.have.property('status','delivered')

        })
        cy.log(' - * -- GET - STORE BY ID - END - LOG  -- * - ')
    })
    it ('DELETE - Store', () => {
      cy.log(' - * -- DELETE - STORE - START - LOG  -- * - ')
      cy.request('DELETE','http://localhost:8080/api/v3/store/order/400').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
            expect(response).to.have.property('duration')
            expect(response).to.have.property('headers')
      })
      cy.log(' - * -- PUT - STORE - END - LOG  -- * - ')
    })

    
})
