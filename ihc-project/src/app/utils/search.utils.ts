export class SearchUtils {

    /**
     * Realiza filtro rápido na tabela, filtrando apenas os dados em tela.
     * @param filter palavra/numero que será filtrado
     * @param list lista principal com todos os dados, ela deverá receber o valor de retorno
     * @param listAux lista auxiliar com todos os dados da lista principal, ela não pode ser alterada
     * @param code nome do campo de código que será filtrado
     * @param description nome do campo de descrição que será filtrado
     **/        

    public static getFilter(filter: string, list : Array<any>, listAux : Array<any>, description: string ) : Array<any> {
    
        
        if (filter == "" || filter == undefined) {
            list = listAux;    
        }
        else {
            //Filtra o conteúdo com base na lista 
            list = list.filter(m => m[description]
                .trim()
                .toUpperCase()
                .match(filter.trim().toUpperCase()));
        }

        return list;
  }  
}