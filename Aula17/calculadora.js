        function calculaIdade() {
            var dia = document.getElementById("dia_nascimento").value;
            var mes = document.getElementById("mes_nascimento").value;
            var ano = document.getElementById("ano_nascimento").value;

            dataAtual = new Date();

            var diaA = dataAtual.getDate();
            var mesA = dataAtual.getMonth() + 1;
            var anoA = dataAtual.getFullYear();

            if(dia <= 0 || dia > 31 || ano<= 0){
                alert("Digite uma data de nascimento válida")
                return
            }

            usuarioAno = anoA - ano;

            if(mes > mesA){
                usuarioAno--;
            }
            else if((mes == mesA) && (dia > diaA)){
                usuarioAno--;
            }

            document.getElementById('resposta').innerHTML = 'Data de nascimento: '+ dia + '/' + mes + '/' + ano + '<br>' + 'Você tem: ' + usuarioAno + ' anos' + '<br>' + 'Data de hoje: ' + diaA + '/' + mesA + '/' + anoA;
        }

        function calcular() {
            let valor1 = document.getElementById("n1").value
            let valor2 = document.getElementById("n2").value
            let op = document.getElementById("op").value

              

            switch(){
                case 1: 
            }
        }


        function calculoFatorial(){
            let n = document.getElementById("numero")

            
        }