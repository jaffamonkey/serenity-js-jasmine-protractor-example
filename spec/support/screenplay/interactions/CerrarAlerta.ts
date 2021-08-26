import {Actor, Duration, Interaction} from '@serenity-js/core';
import {Accept, ModalDialog, Wait} from '@serenity-js/protractor';

export const CerrarAlerta = {
    delNavegador: () =>
        Interaction.where(`#actor cierra la alerta del navegador`, (actor: Actor) => {
            return actor.attemptsTo(
                Wait.for(Duration.ofMilliseconds(2000)),
                Accept.the(ModalDialog.window()));
        })
};
