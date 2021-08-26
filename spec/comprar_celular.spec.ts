import {Actors, CarritoCompraPage, Comprar, Seleccionar, TextoElemento} from './support/screenplay';
import {actorCalled, engage} from '@serenity-js/core';
import {browser} from 'protractor';
import {Ensure, equals} from '@serenity-js/assertions';

describe('Comprar celular en DemoBlaze', () => {

    const escenarios = [
        {rangoPrecio: 'costoso'},
        {rangoPrecio: 'economico'},
    ];

    const datos =
        {Nombre: 'Juan Camilo Murcia Ramos', Pais: 'Colombia', Ciudad: 'Medellin', TargetaCredito: '1234098734568976', Mes: 'Mayo', Ano: '2020'};

    beforeEach(() => {
        engage(new Actors());
        browser.get(browser.baseUrl);
    });

    escenarios.forEach(escenario =>
        it('Observar mensaje de compra, al comprar el celular mas ' + escenario.rangoPrecio, () =>
            actorCalled('Jasmine').attemptsTo(
                Seleccionar.elProducto(escenario.rangoPrecio),
                Comprar.producto(datos),
                Ensure.that(TextoElemento(CarritoCompraPage.lblMensajeCompraRealizada),
                    equals('Thank you for your purchase!')),
            ))
    );
});
