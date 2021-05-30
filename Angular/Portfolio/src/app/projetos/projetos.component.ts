import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  projects = {
    "MagicEye": {
      "nome": "Olho mágico",
      "descrição": "Pule de uma janela para outra como num piscar de olhos.",
      "link": "https://github.com/eduardoseity/MagicEye",
      "tags": "Python"
    },
    "ExcelBalloonCreate": {
      "nome": "Balões para Excel",
      "descrição": "Crie balões indicativos para documentos técnicos no Excel de forma fácil e rápida.",
      "link": "",
      "tags": "VBA, Excel"
    }
  }
  technology = "";
  router;
  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    let appComponent = new AppComponent();
    appComponent.updateNavbar("projetos");
    switch (this.router.url) {
      case "/projetos/python":
        this.technology = "Python";
        break;
      case "/projetos/dotnet":
        this.technology = ".NET";
        break;
      case "/projetos/frontend":
        this.technology = "Front-End";
        break;
      case "/projetos/vbaexcel":
        this.technology = "VBA Excel";
        break;
    
      default:
        break;
    }
  }

  

}
