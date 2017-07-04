import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntryService } from "../../app/entry.service";
import { Entry } from "../../app/entry.model";
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  entries: Entry[];
  constructor(private navCtrl: NavController,
              private entryService: EntryService) {
      this.entries = entryService.entries;

  }

  onItemClick(entry: Entry) {
    this.navCtrl.push(DetailPage, { entryId: entry.id });
  }
}
