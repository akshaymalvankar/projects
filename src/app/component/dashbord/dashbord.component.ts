import { Component, OnInit } from '@angular/core';
import { DashbordService } from '../../services/dashbord.service';
import { Policy } from '../../policy';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private apiService: DashbordService) { }

  policies: Policy[] = [];
  keys: String[];
  objs:{};
  selectedPolicy: Policy = { id: 0, name: '', amount: 0 };

  ngOnInit() {
    this.apiService.readPolicies().subscribe((policies: Policy[])=>{
      this.policies = policies;
       console.log(this.policies);
    })
  }
  createOrUpdatePolicy(form) {
    if (this.selectedPolicy && this.selectedPolicy.id) {
      form.value.id = this.selectedPolicy.id;
      this.apiService.updatePolicy(form.value).subscribe((policy: Policy) => {
        console.log("Policy updated", policy);
      });
    }
    else {

      this.apiService.createPolicy(form.value).subscribe((policy: Policy) => {
        console.log("Policy created, ", policy);
      });
    }

  }

  selectPolicy(policy: Policy) {
    this.selectedPolicy = policy;
  }

  deletePolicy(id) {
    this.apiService.deletePolicy(id).subscribe((policy: Policy) => {
      console.log("Policy deleted, ", policy);
    });
  }
}
