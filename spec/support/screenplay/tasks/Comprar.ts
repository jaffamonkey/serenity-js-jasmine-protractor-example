import {Click, Enter, isClickable, isVisible, Wait} from '@serenity-js/protractor';
import {CarritoCompraPage} from '../ui';
import {Task} from '@serenity-js/core';
import {CerrarAlerta} from '../interactions';


export const Comprar = {
    producto: (dataTableDatosPersonales: { Nombre: string; Ano: string; TargetaCredito: string; Mes: string; Ciudad: string; Pais: string }) =>
        Task.where(`#actor realiza la compra del producto`,
            CerrarAlerta.delNavegador(),
            Wait.until(CarritoCompraPage.btnCarritoCompras, isClickable()),
            Click.on(CarritoCompraPage.btnCarritoCompras),
            Wait.until(CarritoCompraPage.cntProductoCarrito, isVisible()),
            Wait.until(CarritoCompraPage.btnRealizarPedido, isClickable()),
            Click.on(CarritoCompraPage.btnRealizarPedido),
            Wait.until(CarritoCompraPage.txtNombre, isClickable()),
            Enter.theValue(dataTableDatosPersonales.Nombre).into(CarritoCompraPage.txtNombre),
            Enter.theValue(dataTableDatosPersonales.Pais).into(CarritoCompraPage.txtPais),
            Enter.theValue(dataTableDatosPersonales.Ciudad).into(CarritoCompraPage.txtCiudad),
            Enter.theValue(dataTableDatosPersonales.TargetaCredito).into(CarritoCompraPage.txtTarjetaCredito),
            Enter.theValue(dataTableDatosPersonales.Mes).into(CarritoCompraPage.txtMes),
            Enter.theValue(dataTableDatosPersonales.Ano).into(CarritoCompraPage.txtAno),
            Click.on(CarritoCompraPage.btnComprar)
        )
};

