import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading(message: string, duration: number = 2000)
  {
    const loading = await this.loadingController.create({

      message : message,
      translucent: true,
      backdropDismiss: true,
      spinner: "lines-sharp",
      duration: duration
    });
    await loading.present();
  }

}
