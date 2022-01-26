import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private photoService : PhotoService;
  private photoForm : Platform;
  constructor() {
    this.photoService = new PhotoService(this.photoForm);
   }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
}
