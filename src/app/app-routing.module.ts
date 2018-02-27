import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*画面遷移先を追加する場合は以下にimport追記*/
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ResultlistComponent } from './resultlist/resultlist.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
const routes: Routes = [
    // パスの指定がない場合はAppNextComponentが起動
    { path: '', component: SearchformComponent},
    // パスにnextが指定されるとAppNextComponentが起動
    { path: 'search',  component: SearchformComponent },
    // パスにnextnextが指定されるとAppNextNextComponentが起動
    { path: 'result', component: ResultlistComponent },

    { path: '**', component: PageNotFoundComponent },
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
