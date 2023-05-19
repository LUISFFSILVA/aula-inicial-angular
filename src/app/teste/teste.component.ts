import { Component, OnInit } from '@angular/core';
import { ExemploService } from '../exemplo.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  title = 'aula-inicial-angular';
  nomes: Array<string> = ['luis','Pedro', 'Carla'];
  valorAtual: number = 0
  nomePessoa: string = ''

  constructor(private exemploService: ExemploService){

  }

  async aoClicarBotao(): Promise<void> {
    this.valorAtual ++;
    const result = await this.exemploService.exemplo()
    console.log(result)
  }

  obterHoraAtual(): number{
    return new Date().getHours()
  }

  jaENoite():boolean{
    return this.obterHoraAtual() > 18
  }

  jaETarde():boolean{
    return this.obterHoraAtual() > 12 && this.obterHoraAtual() <= 18
  }

  jaEDia():boolean{
    return this.obterHoraAtual() < 12
  }

  ngOnInit(): void {
  }

}
