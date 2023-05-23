sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("y99.bps.controller.Parceiro", {
            onInit: function () {
                //acessa a rota de detalhe RouteParceiro do manifest.json e chama a função rotaDetalhe para 
                // ler a URL
                let oRouter = this.getOwnerComponent().getRouter();
                let oRotaDesejada = oRouter.getRoute("RouteParceiro");
                oRotaDesejada.attachPatternMatched(this.rotaDetalhe, this);

            },
            rotaDetalhe: function(oEvent){
                //acessa o ID na URL
                let sId = oEvent.getParameter("arguments").PartnerId;

                //acessa o modelo
                let oModel = this.getOwnerComponent().getModel();
                
                //cria o caminho com o ID que foi encontrado na URL
                let sCaminho = oModel.createKey("/Parceiros", {
                    PartnerId: sId
                });
              //faz o GET no modelo com o caminho e associa na view para termos acesso às propriedades
              this.getView().bindElement(sCaminho);

            }

        });
    });
