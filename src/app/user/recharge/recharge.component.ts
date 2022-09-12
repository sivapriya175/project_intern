import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from 'src/app/addon.service';
import { Addons } from 'src/app/addons';
import { Recharge } from 'src/app/recharge';
import { RechargeService } from 'src/app/recharge.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  
  recharge:Recharge=new Recharge();
  
  constructor(private service:RechargeService,private route:Router) { }

  ngOnInit(): void {

  }
  recharges()
  {
    console.log(this.recharge);
    this.saveRecharge();
  }
  saveRecharge()
  {
    this.service.addRecharge(this.recharge).subscribe(data=>
      {
          console.log(data);
          this.goToNotify();
      })
  }
  goToNotify()
  {
    this.route.navigate(['/user/notify']);
  }
}
