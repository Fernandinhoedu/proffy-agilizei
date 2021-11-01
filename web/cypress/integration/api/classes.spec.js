/// <reference types="cypress"  />
/// <reference types="@bahmutov/cy-api"  />

context('Classes endpoint', () => {
    it('POST -  deve  cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                    "name": "Fernando Silva",
                    "avatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA",
                    "whatsapp": "41123123455",
                    "bio": "testes",
                    "subject": "Matemática",
                    "cost": 10,
                    "schedule": [
                        {
                            "week_day": "1", 
                            "from": "20:48", 
                            "to": "21:50"
                         }
                    ]
        }

        }).then((response) =>{

        })
    });
});