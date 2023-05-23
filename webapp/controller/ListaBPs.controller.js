sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("y99.bps.controller.ListaBPs", {
            onInit: function () {

            },
            aoSelecionarParceiro: function(oEvent)  {
                let oColumnListItem = oEvent.getSource();

                //acessar o caminho do modelo em que o item que foi clicado está associado
                //o método getBindingContext importa o nome do modelo. Neste caso, deixamos 
                //vazio pois é o modelo principal do manifest.json
                let oContexto = oColumnListItem.getBindingContext();

                //acessa os dados do modelo em forma de objeto para acessar a propriedade PartnerId
                let oDadosModelo = oContexto.getObject();

                //acessa a propriedade com o ID
                let sId = oDadosModelo.PartnerId;

               // altera layout 


                //acessa o roteador
                let oRoteador = this.getOwnerComponent().getRouter(); 
                //navega para a tela parceiro
                oRoteador.navTo("RouteParceiro", {
                    PartnerId: sId
                });
            }  
        });
    });
