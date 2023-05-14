import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GraphComponent } from './pages/graph/graph.component';
import { SavedComponent } from './pages/saved/saved.component';

const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'graph', component: GraphComponent },
    { path: 'saved', component: SavedComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', redirectTo: 'main' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
