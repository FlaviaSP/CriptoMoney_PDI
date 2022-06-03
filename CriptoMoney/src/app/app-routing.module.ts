import { componentFactoryName } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { TelaCambioComponent } from "./tela-cambio/tela-cambio.component";

const routes: Routes = [
    {
        path: "Home",
        component: AppComponent
    },
    {
        path: '**',
        component: TelaCambioComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}