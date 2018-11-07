describe('Mi primera navegación en Google', function(){
	it('Vamos a "buscar" en google', function(){
		url_env('dev')
		//cy.visit(url_envDos('cypress_prod'))
		cy.contains('type').click()
        	cy.url().should('include','/commands/actions')

		cy.get('.action-email')
		  .type('fake@email.com')
		  .should('have.value','fake@email.com')
	})
})



//forma uno: crear una funcion con selectores de url
function url_env(environment){
	if(environment == 'dev'){
	return cy.visit('https://example.cypress.io')
	}
	if(environment == 'uat'){
	return cy.visit('https://google.com')
	}
	console.log('No existe la variable de entorno' + environment)
}


//forma dos: funcionpara selecionar ambientes configuradas en variables de entorno
function url_envDos(environment){
	if (environment == 'cypress_prod'){
		return cy.visit(Cypress.env(environment))
	}
	if (environment == 'google_prod'){
		return cy.visit(Cypress.env(environment))
	}
	if (environment == 'eltiempo_prod'){
		return cy.visit(Cypress.env(environment))
	}
}

