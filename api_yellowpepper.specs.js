describe('Swagger Petstore - OpenAPI 3.0', () => {
    
     // ---------------- PETS --------------------

    it ('GET - READ', () => {
        cy.log(' - * - Starting Swagger PetStore - LOG  - * - ')
        cy.request('http://localhost:8080/').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
        })
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
        cy.request('http://localhost:8080/api/v3/store/inventory').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response).to.have.property('statusText', 'OK')
            expect(response.body).to.not.be.null
            expect(response).to.have.property('headers')
            expect(response).to.have.property('body')
            expect(response).to.have.property('duration')
            expect(response.body).to.have.property('approved',50)
            expect(response.body).to.have.property('delivered',50)
            expect(response.body).to.have.property('placed',100)

        })
    })
    
})