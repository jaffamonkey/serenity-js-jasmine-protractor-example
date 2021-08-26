import {Task} from '@serenity-js/core';
import {Click, isClickable, Wait} from '@serenity-js/protractor';
import {DemoblazeHomePage} from '../ui';
import {Filtrar} from '../interactions';

export const Seleccionar = {
    elProducto: (rangoPrecio: string) =>
        Task.where(`#actor escoge el producto mas economico`,
            Wait.until(DemoblazeHomePage.btnCelulares, isClickable()),
            Click.on(DemoblazeHomePage.btnCelulares),
            Wait.until(DemoblazeHomePage.cntProductos, isClickable()),
            Filtrar.elProducto(DemoblazeHomePage.tajetasCelulares, rangoPrecio),
            Wait.until(DemoblazeHomePage.btnAnadirCarrito, isClickable()),
            Click.on(DemoblazeHomePage.btnAnadirCarrito),
        )
};
