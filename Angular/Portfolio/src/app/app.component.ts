import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  public updateNavbar(nav="home") {
    document.getElementById("nav-home-tab")?.classList.remove("active");
    document.getElementById("nav-projetos-tab")?.classList.remove("active");
    document.getElementById("nav-faq-tab")?.classList.remove("active");
    document.getElementById("nav-contato-tab")?.classList.remove("active");

    switch (nav) {
      case "home":
        document.getElementById("nav-home-tab")?.classList.add("active");
        break;
      case "projetos":
        document.getElementById("nav-projetos-tab")?.classList.add("active");
        break;
      case "faq":
        document.getElementById("nav-faq-tab")?.classList.add("active");
        break;
      case "contato":
        document.getElementById("nav-contato-tab")?.classList.add("active");
        break;
    
      default:
        break;
    }
  }
}
