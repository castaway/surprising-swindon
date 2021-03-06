import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Entry } from "../../app/entry.model";
import { EntryService } from "../../app/entry.service";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild(Slides) slides: Slides;

  entry: Entry;
  entries: Entry[];
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private entryService: EntryService) {
     const entryId = navParams.get('entryId');
     this.entry = entryService.getEntry(entryId);
     this.entries = entryService.entries;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
      console.log("Slides", this.slides);
  // this.slides.slideTo(this.entry.id);
  }

}
