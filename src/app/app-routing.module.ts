import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { EmployeeComponent } from './employee/employee.component';



const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "viewdetails/:id",component: ViewProductDetailsComponent },
    { path: "EmployeeList",component: EmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
